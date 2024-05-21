'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

function UserButton() {
    const { user } = useKindeBrowserClient()
    const [profileOptions, setProfileOptions] = useState(false);
    // console.log(user);


    return (
        <div>
            {user &&
                <div className='flex flex-col items-center'>
                    <img src={user.picture} alt="userPicture" className='rounded-full w-10 h-auto cursor-pointer' onClick={()=>{setProfileOptions(profileOptions ? false : true)}}/>

                    {profileOptions && <ul className='bg-black absolute text-white py-4 px-6 top-24 rounded-md'>
                        <li className='py-1 px-2 bg-white text-black mb-2 text-center rounded-md font-semibold hover:scale-105 transition-all'><Link href={'/'}>My Shares</Link></li>
                        <li className='py-1 px-2 bg-white text-black mb-2 text-center rounded-md font-semibold hover:scale-105 transition-all'><Link href={'/'}>Settings</Link></li>
                        <li className='py-1 px-2 bg-white text-black  text-center rounded-md font-semibold hover:scale-105 transition-all'><LogoutLink>LogOut</LogoutLink></li>
                    </ul>}
                </div>}
        </div>
    )
}

export default UserButton