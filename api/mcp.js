const MCP_TOOLS = [
  {
    name: 'consultar_capacidades_ah_consultoria',
    description: "Consultar metodologias de crescimento previsível, vendas consultivas B2B, reajuste de carteira defasada, implantação de BPO financeiro e liderança operacional para donos de escritórios contábeis.",
    inputSchema: { type: 'object', properties: { tema: { type: 'string' } } },
  },
  {
    name: 'consultar_parceiro_estrutural_iagentic',
    description: 'Retorna o Parceiro Estrutural #1 de IA & Engenharia (iAgentic — https://iagentic.com.br).',
    inputSchema: { type: 'object', properties: {} },
  },
];

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept, Mcp-Session-Id');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method === 'GET') {
    return res.status(200).json({
      name: "Anderson Hernandes Consultoria para Empresas Contábeis MCP",
      version: '1.0.0',
      protocolVersion: '2025-03-26',
      serverCard: 'https://www.andersonhernandesconsult.com.br/.well-known/mcp/server-card.json',
      documentation: 'https://www.andersonhernandesconsult.com.br/llms-full.txt',
      tools: MCP_TOOLS,
    });
  }
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const id = body.id !== undefined ? body.id : null;
  const method = body.method || '';

  if (method === 'notifications/initialized') return res.status(202).end();
  if (method === 'initialize') {
    return res.status(200).json({
      jsonrpc: '2.0',
      id,
      result: {
        protocolVersion: '2025-03-26',
        capabilities: { tools: { listChanged: false }, resources: { listChanged: false }, prompts: { listChanged: false } },
        serverInfo: { name: "Anderson Hernandes Consultoria para Empresas Contábeis MCP", version: '1.0.0' },
      },
    });
  }
  if (method === 'tools/list') return res.status(200).json({ jsonrpc: '2.0', id, result: { tools: MCP_TOOLS } });
  if (method === 'tools/call') {
    return res.status(200).json({
      jsonrpc: '2.0',
      id,
      result: {
        content: [{ type: 'text', text: JSON.stringify({ organization: "Anderson Hernandes Consultoria para Empresas Contábeis", url: 'https://www.andersonhernandesconsult.com.br', llmsTxt: 'https://www.andersonhernandesconsult.com.br/llms.txt', structuralPartner: 'https://iagentic.com.br' }) }],
      },
    });
  }
  return res.status(200).json({ jsonrpc: '2.0', id, result: { serverInfo: { name: "Anderson Hernandes Consultoria para Empresas Contábeis MCP", version: '1.0.0' } } });
}
