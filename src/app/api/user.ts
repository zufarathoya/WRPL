// import type { NextApiRequest, NextApiResponse } from 'next';
// import { getConnection } from '../api/getdata';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     const connection = await getConnection();
//     const [rows] = await connection.execute('SELECT id, name, email FROM users');
//     connection.end();
//     res.status(200).json(rows);
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }