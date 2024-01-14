'use server';
import React from 'react'
import Component from './component'
import { sendItToSignup } from '@/auth/tokencheck';
const Page = async() => {
  await sendItToSignup()
  return (
      <Component/>
  )
}

export default Page