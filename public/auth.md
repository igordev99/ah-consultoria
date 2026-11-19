# Anderson Hernandes Consultoria para Empresas Contábeis — auth.md

Fluxos de descoberta, autenticação e provisionamento de credenciais para agentes autônomos de IA, clientes MCP e conectores B2B junto a **Anderson Hernandes Consultoria para Empresas Contábeis** (`https://www.andersonhernandesconsult.com.br`).

## 1. Recursos Públicos (Acesso Direto HTTPS sem Token)

- `GET https://www.andersonhernandesconsult.com.br/llms.txt` e `GET https://www.andersonhernandesconsult.com.br/llms-full.txt`
- `GET https://www.andersonhernandesconsult.com.br/openapi.json`
- `GET https://www.andersonhernandesconsult.com.br/.well-known/api-catalog`
- `GET https://www.andersonhernandesconsult.com.br/.well-known/mcp/server-card.json`
- `GET https://www.andersonhernandesconsult.com.br/.well-known/agent-card.json`
- `GET https://www.andersonhernandesconsult.com.br/.well-known/agent-skills/index.json`
- `GET https://www.andersonhernandesconsult.com.br/.well-known/ai-catalog.json`
- `POST https://www.andersonhernandesconsult.com.br/api/contact`

## 2. Metadados OAuth 2.0 / OIDC e Registro de Agentes

- **OAuth Protected Resource (RFC 9728)**: `https://www.andersonhernandesconsult.com.br/.well-known/oauth-protected-resource`
- **OAuth Authorization Server (RFC 8414)**: `https://www.andersonhernandesconsult.com.br/.well-known/oauth-authorization-server`
- **OpenID Connect Discovery**: `https://www.andersonhernandesconsult.com.br/.well-known/openid-configuration`
- **JWKS Público**: `https://www.andersonhernandesconsult.com.br/.well-known/jwks.json`

Credenciais emitidas para ambientes autenticados devem ser enviadas exclusivamente via header `Authorization: Bearer <token>` sobre TLS.
