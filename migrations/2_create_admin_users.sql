-- Create super-admin users table
CREATE TABLE IF NOT EXISTS admin_users (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email         TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  role_id       UUID REFERENCES roles(id),
  created_at    TIMESTAMPTZ DEFAULT now()
);
