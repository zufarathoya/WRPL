'use client';
import React, {useState} from 'react';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import LogoutIcon from '@mui/icons-material/Logout';
// import { ClassNames } from '@emotion/react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';

// const router = useRouter()

const handleLogout = () => {
  localStorage.removeItem('token')
  window.location.href = '/login'
}

const menuItems = [
  {name: 'Home', path: '/home'},
  {name: 'Penerbangan', path: '/penerbangan'},
  {name: 'Jadwal', path: '/jadwal'}
]

// const activeMenu = useMemo(() => menuItems.find(menu => menu.link === router.pathname), [router.pathname])

const Sidebar = () => {
  const [show, setShow] = useState(true)
  const wraperClasses = classNames(
    'h-screen flex justify-between flex-col bg-gray-800 text-white',
    {'w-64': show, 'w-16': !show}
  )

  return (
    <div className={`h-screen flex justify-between flex-col bg-gray-800 text-white transition-width duration-300 ${show ? 'w-64' : 'w-16'}`}>  
      <div className="p-6">
        <div className="inline-flex items-center justify-between w-full mb-8">
          <b className={`text-l font-bold ${show ? '':'hidden'}`}>Aplikasi</b>
          <button className={`transition-width duration-300 ${show ? '':'rotate-180'}`} onClick={() => setShow(curr => !curr)}>
            {/* {show? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />} */}
            <KeyboardDoubleArrowLeftIcon />
          </button>
        </div>
        <ul>
          {show && menuItems.map(item => (
            <li className="mb-2" key={item.path}>
              <Link href={item.path}>
                  <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-2">
        <button onClick={handleLogout} className="w-full flex items-center justify-center py-2 bg-red-500 hover:bg-red-600 transition-colors duration-150 rounded">
          <LogoutIcon />
          {show && <span className="ml-2">Logout</span>}
        </button>
      </div>
    </div>
  )
}
export default Sidebar