'use client';
import React, { useState } from 'react'
import { signinWithEmailPassword } from '../../auth/index'
import { useRouter } from 'next/navigation';
const Page = () => {
  const [email, setemail] = useState<string>('')
  const [password, setpassword] = useState<string>('')
  const router = useRouter()
  const handlesubmit = async () => {
    const data = { email, password }
    const result = await signinWithEmailPassword(data)
    const { error } = JSON.parse(result)
    if (error?.message) {
      console.log(error?.message)
    } else {
      router.push('/dashboard')
    }
  }
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-white'>
      <div className='flex flex-col gap-5 bg-[#134] w-[400px] h-[400px] justify-center items-center text-black'>
        <input type="email" placeholder='email' value={email} onChange={(e) => setemail(e.target.value)} />
        <input type="password" placeholder='password' value={password} onChange={(e) => setpassword(e.target.value)} />
        <button className='bg-[#899] text-white px-5 py-1 ' onClick={handlesubmit}>LOGIN</button>
      </div>
    </div>
  )
}

export default Page