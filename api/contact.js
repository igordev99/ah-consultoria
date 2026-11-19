export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method === 'GET') {
    return res.status(200).json({
      organization: "Anderson Hernandes Consultoria para Empresas Contábeis",
      endpoint: 'https://www.andersonhernandesconsult.com.br/api/contact',
      method: 'POST',
      openapi: 'https://www.andersonhernandesconsult.com.br/openapi.json',
    });
  }
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const data = req.body && typeof req.body === 'object' ? req.body : {};
  if (!data.fullname || !data.email || !data.message) {
    return res.status(400).json({ success: false, message: 'Informe fullname, email e message.' });
  }
  return res.status(200).json({ success: true, organization: "Anderson Hernandes Consultoria para Empresas Contábeis", message: 'Solicitação registrada com sucesso.' });
}
