import React from 'react'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '600', '800']
})


function Hero() {

  return (
    <div className='w-full mt-10'>
      <h1 className={`text-4xl ${montserrat.className} font-extrabold text-center px-28 text-[#281b13]`}>Amazing things happening in people's lives</h1>
      <p className={`text-lg  ${montserrat.className} font-bold text-center px-28 text-[#352014] mt-3`}><span className='underline'>Share</span> and <span className='underline'>Read</span> what amazes you to be real!</p>
    </div>
  )
}

export default Hero