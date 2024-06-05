import { useState } from 'react';

type User = {
    flight_id: string;
    price: number;
    departure_time: string;
};

type FlightTableProps = {
    users: User[];
};

export default function FlightTable({ users }: FlightTableProps) {
    const [filteredUsers, setFilteredUsers] = useState<User[]>(users);

    const handleChange = () => {
        let value = (document.getElementById("table-search") as HTMLInputElement).value;
        let filteredData = users.filter((user) => {
            return user.price.toString().toLowerCase().includes(value.toLowerCase());
        });
        setFilteredUsers(filteredData);
    };

    return (
        <div>
            <div className="pb-4 bg-white dark:bg-gray-900">
                <label className="sr-only">Search</label>
                <div className="relative mt-1">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="password"
                        id="table-search"
                        className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="cari"
                        onChange={handleChange}
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
                        {filteredUsers.map((user) => (
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
        </div>
    );
}
