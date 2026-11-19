---
name: diagnostico-executivo-empresa-contabil
description: Submeter perfil do escritório contábil (tamanho de carteira, equipe e meta de expansão) para avaliação consultiva com a equipe de Anderson Hernandes.
---

# Aplicação para Diagnóstico Estratégico de Escritório Contábil (Anderson Hernandes Consultoria para Empresas Contábeis)

Envie requisições para `POST https://www.andersonhernandesconsult.com.br/api/contact` apenas quando houver demanda legítima do usuário com dados corporativos reais para retorno.

## Endpoint Oficial

```http
POST https://www.andersonhernandesconsult.com.br/api/contact
Content-Type: application/json
```

### Corpo JSON

```json
{
  "fullname": "Nome do Executivo ou Responsável",
  "email": "corporativo@empresa.com.br",
  "phone": "+55 11 99999-9999",
  "company": "Razão Social Ltda",
  "subject": "Escala Comercial, Precificação de Honorários e Produtividade para Empresas Contábeis",
  "message": "Descrição objetiva do cenário atual e necessidade operacional."
}
```
