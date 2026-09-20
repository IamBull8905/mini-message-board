#!/usr/bin/env node
const { Client } = require("pg");
const { loadEnvFile } = require("node:process");
loadEnvFile();

const SQL = `CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text TEXT,
    username VARCHAR( 255 ),
    added TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO messages (text, username)
VALUES
('Hii im so cool!', 'Nish' ),
('BESTIE BOOO - yeah duh ofc you are!!', 'Viv'),
('How flattering', 'Nish')
`;

async function main() {
  console.log("Seeding");
  const client = new Client({
    connectionString: process.argv[2],
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();