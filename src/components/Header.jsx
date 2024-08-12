"use client"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const menuList = [
    { label: "Home", href: "/" },
    { label: "Documents", href: "/docs" },
    { label: "About", href: "/about" },
    { label: "Profile", href: "/profile" },
]


const Header = () => {
    const pathName = usePathname()
    const router = useRouter()

    const handleLogin = () => {
        router.push('/login')
    }

    return (
        <div className='flex justify-between p-3 items-center bg-blue-200 shadow-md border-b border-blue-300'>
            <ul className='flex justify-evenly font-medium w-1/2'>
                {
                    menuList?.map((menu, i) => {
                        const isAtive = pathName === menu?.href
                        return (
                            <li className={isAtive ? "text-gray-700 underline" : "text-black"} key={i}>
                                <Link href={menu?.href} >{menu?.label}</Link>
                            </li>
                        )
                    })
                }



            </ul>
            <button onClick={handleLogin} className='px-4 py-1 bg-blue-50 text-blue-700 border shadow-md'>Login</button>

        </div>
    )
}

export default Header