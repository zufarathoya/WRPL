import { useState, useEffect } from "react";
import Layout from "@/components/layout";
import { getConnection } from "../api/getdata";

type User = {
    flight_id: string;
    price: number;
    departure_time: string;
};

type Props = {
    users: User[];
};

export default async function Home() {
    
  // const [users, setUsers] = useState([]);
  // const [headers, setHeaders] = useState([]);

    const connection = await getConnection();
    const [rows] = await connection.execute("SELECT * FROM flight");
    connection.end();
    const users: User[] = rows as User[];

    const headers = users.length > 0 ? Object.keys(users[0]) : [];

    const handleChange = () =>{
      let value = (document.getElementById("table-search") as HTMLInputElement).value;
      let filteredData = users.filter((user) => {
        return user.departure_time.toString().toLowerCase().includes(value.toLowerCase());
      });
      console.log(filteredData);
    }
    return (
        <Layout>
            <h1 className="text-3xl text-center">Flight</h1>
            <div className="pb-4 bg-white dark:bg-gray-900">
                <label className="sr-only">Search</label>
                <div className="relative mt-1 grid items-center justify-center">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        
                    </div>
                    <input
                        type="text"
                        id="table-search"
                        className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for items"
                        // onChange={() => handleChange}
                    ></input>
                </div>
            </div>
            <div className="grid items-center h-100 justify-center overflow-auto ">
                
                <table className="w-96 divide-y divide-x divide-gray-200">
                    <thead className="">
                        <tr className="bg-gray-300 sticky top-0">
                            <th>Price</th>
                            <th>Departure Time</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user) => (
                            <tr
                                key={user.flight_id}
                                className="text-center hover:bg-gray-100"
                            >
                                <td className="">{user.price}</td>
                                <td className="">{user.departure_time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}
