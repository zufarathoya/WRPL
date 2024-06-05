'use client';
import Link from 'next/link';
import { useState } from 'react';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleconfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirm(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-screen-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-slate-200" required/>
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-bold mb-2">Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-slate-200" required/>
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-bold mb-2">Konfirmasi Password:</label>
                    <input type="password" value={confirm} onChange={handleconfirmChange} className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-slate-200" required/>
                </div>
                <div className="inline-block float-right">
                    <button type="submit" className="bg-gray-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
                </div>
            </form>
        </div>
    </div>
    );
};
export default LoginPage;