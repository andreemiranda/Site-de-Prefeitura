/*
  # Create first admin user

  This migration creates the first administrator user for the system with verified status.
  
  1. Details
    - Email: contato@novahorizonte.gov.br
    - Phone: (63) 99242-8022
    - Role: admin
    - Status: Verified
*/

-- Insert first admin user with verified status
INSERT INTO admin_users (email, phone, role, is_verified)
VALUES (
  'contato@novahorizonte.gov.br',
  '(63) 98888-7000',
  'admin',
  true
);