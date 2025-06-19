import fs from 'fs';
import path from 'path';
import { Client } from 'pg';
async function main() {
  const client = new Client({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  await client.connect();
  const migrationsDir = path.join(__dirname, '../../migrations');
  const files = fs.readdirSync(migrationsDir).sort();
  for (const file of files) {
    console.log(`Running ${file}`);
    const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
    await client.query(sql);
  }
  await client.end();
  console.log('Migrations complete');
}
main().catch(err => { console.error(err); process.exit(1); });
