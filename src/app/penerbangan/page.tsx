import Layout from '@/components/layout';
import { getConnection } from '../api/getdata';

type User = {
  flight_id: string;
  price: number;
  departure_time: string;
};

type Props = {
  users: User[];
};

export default async function Home() {
  const connection = await getConnection();
  const [rows] = await connection.execute('SELECT * FROM flight');
  connection.end();
  const users: User[] = rows as User[];

  return (
    <Layout>
      <ul>
        {users.map(user => (
          <li key={user.flight_id}>
            {user.price} ({user.departure_time})
          </li>
        ))}
      </ul>
    </Layout>
  );
}