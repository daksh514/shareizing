import Link from 'next/link'
import React from 'react'
import { Montserrat } from 'next/font/google'
import {  getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserButton from './UserButton';


const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700', '600']
})

async function NavBar() {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    // console.log(user);

    return (
        <div className='bg-[rgb(127,85,57)] w-full mt-10 flex justify-between px-10 py-4 rounded-md items-center '>
            <Link href='/' className={`text-white  ${montserrat.className} font-bold text-lg`}>Shareizing</Link>
            <div className='flex gap-6'>
                <Link href='/share' className={`text-white bg-[#9C6644] py-2 px-8 rounded-md shadow-md hover:scale-105 transition-all ${montserrat.className} font-semibold`}>Share</Link>
                {
                    getUser &&

                    <UserButton user={user} />
                }

            </div>
        </div>
    )
}

export default NavBar