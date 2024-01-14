'use client';
import React,{useState , useEffect} from 'react'
import { useRouter } from 'next/navigation';
const Actulcontent = () => {
    const router = useRouter()
    const [sampletext ,setsampletext] = useState<string>("This mechanism allows the application to maintain continuous access to the user's resources without requiring the user to log in frequently. It's particularly useful in scenarios where the user grants long-term access, such as in mobile apps or applications with limited user interaction.It's important to note that the use and handling of refresh tokens can vary based on the specific OAuth 2.0 implementation and the policies of the authorization server. Additionally, the security of refresh tokens is crucial, and they should be stored securely by the client application.")
    useEffect(()=>{
     console.log("MEOW MEOW MEOW")
    },[])
  return (
    <div className='w-[100%] h-[100%] flex justify-center items-center '>
      <div className='w-[400px] h-[400px] flex justify-center items-center flex-col'>
        <h1 className='my-[40px]'>{sampletext}</h1>
        <button className='bg-red' onClick={(e)=>router.push('/dashboard')}>GO TO Dashboard</button>
      </div>
    </div>
  )
}

export default Actulcontent