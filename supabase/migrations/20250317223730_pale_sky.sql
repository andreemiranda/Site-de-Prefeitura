/*
  # Admin Panel Schema Setup

  1. New Tables
    - `admin_users`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `phone` (text)
      - `role` (text)
      - `is_verified` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `content_categories`
      - `id` (uuid, primary key)
      - `name` (text)
      - `slug` (text, unique)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `content_items`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text)
      - `content` (text)
      - `category_id` (uuid, foreign key)
      - `status` (text)
      - `published_at` (timestamp)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for admin access
*/

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  phone text,
  role text NOT NULL DEFAULT 'admin',
  is_verified boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Create content_categories table
CREATE TABLE IF NOT EXISTS content_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Create content_items table
CREATE TABLE IF NOT EXISTS content_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL,
  content text,
  category_id uuid REFERENCES content_categories(id),
  status text NOT NULL DEFAULT 'draft',
  published_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_items ENABLE ROW LEVEL SECURITY;

-- Create policies for admin_users
CREATE POLICY "Allow full access for verified admins" ON admin_users
  FOR ALL
  TO authenticated
  USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_verified = true))
  WITH CHECK (auth.uid() IN (SELECT id FROM admin_users WHERE is_verified = true));

-- Create policies for content_categories
CREATE POLICY "Allow read access for all users" ON content_categories
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow write access for verified admins" ON content_categories
  FOR ALL
  TO authenticated
  USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_verified = true))
  WITH CHECK (auth.uid() IN (SELECT id FROM admin_users WHERE is_verified = true));

-- Create policies for content_items
CREATE POLICY "Allow read access for published content" ON content_items
  FOR SELECT
  TO authenticated
  USING (status = 'published');

CREATE POLICY "Allow full access for verified admins" ON content_items
  FOR ALL
  TO authenticated
  USING (auth.uid() IN (SELECT id FROM admin_users WHERE is_verified = true))
  WITH CHECK (auth.uid() IN (SELECT id FROM admin_users WHERE is_verified = true));

-- Insert first admin user
INSERT INTO admin_users (email, phone, role, is_verified)
VALUES (
  'contato@novahorizonte.gov.br',
  '(63) (63) 98888-7000',
  'admin',
  true
);