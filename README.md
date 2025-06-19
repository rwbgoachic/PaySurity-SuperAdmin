# PaySurity Super-Admin Module

## Overview
This module provides the Super-Admin backend for PaySurity:
- Role & permission management
- Admin user management
- Feature toggles per client
- Audit logs
- Dynamic pricing rules

## Prerequisites
- Node.js v16+
- A Supabase project with a Postgres database
- Environment variables set:
  ```
  DATABASE_URL="<your-postgres-connection-string>"
  SUPABASE_URL="<your-supabase-url>"
  SUPABASE_SERVICE_ROLE_KEY="<your-service-role-key>"
  SUPABASE_ANON_KEY="<your-anon-key>"
  ```

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run migrations:
   ```bash
   npm run migrate
   ```
3. Run tests:
   ```bash
   npm test
   ```

## Structure
- `migrations/`: SQL for creating tables
- `src/pages/api/admin/`: API routes
- `src/lib/auth.js`: RBAC middleware
- `src/utils/migrate.js`: Migration runner
- `tests/`: Automated tests

## Deployment
Deploy to Vercel or any Node.js host. Ensure env vars are configured. 
