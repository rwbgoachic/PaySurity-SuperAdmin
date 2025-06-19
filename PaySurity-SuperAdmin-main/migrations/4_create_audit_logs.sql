-- Create audit logs table
CREATE TABLE IF NOT EXISTS audit_logs (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_user_id UUID REFERENCES admin_users(id),
  action        TEXT NOT NULL,
  target_type   TEXT,
  target_id     UUID,
  metadata      JSONB,
  created_at    TIMESTAMPTZ DEFAULT now()
);
