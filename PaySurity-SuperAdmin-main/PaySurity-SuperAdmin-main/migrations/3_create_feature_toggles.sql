-- Create feature toggles table
CREATE TABLE IF NOT EXISTS feature_toggles (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id  UUID NOT NULL,
  feature    TEXT NOT NULL,
  enabled    BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(client_id, feature)
);
