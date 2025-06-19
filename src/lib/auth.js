import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

export async function requireAdmin(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Missing token' });
  const { data: session, error } = await supabase.auth.getUser(token);
  if (error || !session.user) return res.status(401).json({ error: 'Invalid token' });

  const { data: user } = await supabase.from('admin_users')
    .select('role_id')
    .eq('email', session.user.email)
    .single();

  const { data: perms } = await supabase
    .from('role_permissions')
    .select('permissions(action)')
    .eq('role_id', user.role_id);

  req.admin = { email: session.user.email, permissions: perms.map(p => p.permissions.action) };
  next();
}
