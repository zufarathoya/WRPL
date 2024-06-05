
// import { getConnection } from "../api/getdata";
// type User = {
//     flight_id: string;
//     price: number;
//     departure_time: string;
// };

// type Props = {
//     users: User[];
// };

// export default async function Data() {
//     const connection = await getConnection();
//     const [rows] = await connection.execute("SELECT * FROM flight");
//     connection.end();
//     const users: User[] = rows as User[];

//     return users
// }

import { getConnection } from "../api/getdata";

export default async function Data(req:any, res:any) {
    const connection = await getConnection();
    const [rows] = await connection.execute("SELECT * FROM flight");
    connection.end();
    const users = rows;

    res.status(200).json(users);
}
