'use client'

import React, { useState } from 'react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { Montserrat } from 'next/font/google'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700', '600', '800']
})

function PostForm() {
    const { user } = useKindeBrowserClient()
    const [shareTitle, setShareTitle] = useState('');
    const [shareDes, setShareDes] = useState('');
    return (
        <div className='w-full  mt-10'>
            <div className="">
                <h1 className={`text-2xl font-semibold ${montserrat.className} text-amber-950`}>Title</h1>
                <Input type='text' placeholder='Enter your share title' className='mt-3' value={shareTitle} onChange={(e)=>{setShareTitle(e.target.value)}}/>
            </div>
            <div className="mt-8">
                <h1 className={`text-2xl font-semibold ${montserrat.className} text-amber-950`}>Something Amazing!</h1>
                <Textarea placeholder='Write something amazing' className='mt-3' value={shareDes} onChange={(e)=>{setShareDes(e.target.value)}}/>
            </div>
            <button className='w-full bg-amber-900 text-white mt-6 py-2 rounded-md'>Shareizing</button>
        </div>
    )
}

export default PostForm