import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req, res) {
  const { method } = req;
  if (method === 'GET') {
    const { data, error } = await supabase.from('feature_toggles').select('*');
    if (error) return res.status(500).json({ error });
    return res.status(200).json(data);
  }
  if (method === 'POST') {
    const { client_id, feature, enabled } = req.body;
    const { data, error } = await supabase.from('feature_toggles')
      .insert([{ client_id, feature, enabled }])
      .single();
    if (error) return res.status(500).json({ error });
    return res.status(201).json(data);
  }
  res.setHeader('Allow', ['GET','POST']);
  res.status(405).end(`Method ${method} Not Allowed`);
}
