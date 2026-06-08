-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title text,
  slug text UNIQUE,
  description text,
  cover_url text,
  metadata jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
