'use client';
import React from 'react'
import SignOutServer from '@/auth/signout';
const Page = () => {
  const logout = async () => {
    await SignOutServer()
  }
  return (
    <form action={logout}>
      <button type='submit'>signout</button>
    </form>
  )
}

export default Page