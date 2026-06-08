-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title text,
  slug text UNIQUE,
  description text,
  metadata jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
