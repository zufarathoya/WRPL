import mysql from 'mysql2/promise';

const connectionConfig = {
  host: 'localhost',
  user: 'root',
  password: 'passwordsql',
  database: 'wrpl',
};

export async function getConnection() {
  const connection = await mysql.createConnection(connectionConfig);
  return connection;
}