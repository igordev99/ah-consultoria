import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'dist')
const ssrDir = path.join(rootDir, 'dist-ssr')

const ssrEntry = path.join(ssrDir, 'entry-server.js')
const { render } = await import(pathToFileURL(ssrEntry).href)
const appHtml = render()

const indexPath = path.join(distDir, 'index.html')
let html = fs.readFileSync(indexPath, 'utf8')

// Inline compiled CSS so FCP/LCP require zero extra render-blocking CSS roundtrips
const cssMatch = html.match(/<link\s+rel="stylesheet"[^>]*href="\/assets\/([^"]+\.css)"[^>]*>/i)
if (cssMatch) {
  const cssFile = path.join(distDir, 'assets', cssMatch[1])
  if (fs.existsSync(cssFile)) {
    const cssContent = fs.readFileSync(cssFile, 'utf8')
    html = html.replace(cssMatch[0], `<style>${cssContent}</style>`)
  }
}

html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
fs.writeFileSync(indexPath, html, 'utf8')
fs.rmSync(ssrDir, { recursive: true, force: true })
console.log('[AH Prerender] Home SSG + CSS inline concluído com sucesso.')
