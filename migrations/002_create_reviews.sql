-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  rating numeric,
  name text,
  role text,
  review text,
  suggestions text,
  mobile_device jsonb,
  app_version text,
  received_at timestamptz DEFAULT now(),
  meta jsonb
);
