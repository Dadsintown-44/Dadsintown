-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name text,
  business text,
  email text,
  project_type text,
  message text,
  suggestions text,
  mobile_device jsonb,
  app_version text,
  received_at timestamptz DEFAULT now(),
  meta jsonb
);
