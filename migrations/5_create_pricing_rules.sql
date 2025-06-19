-- Create pricing rules table
CREATE TABLE IF NOT EXISTS pricing_rules (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id  UUID NOT NULL,
  module     TEXT NOT NULL,
  config     JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
