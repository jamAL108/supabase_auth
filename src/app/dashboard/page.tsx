import React from 'react'
import { sendItToSignup } from '@/auth/tokencheck';
import Component from './component';
const Dashboard = async () => {
  await sendItToSignup()
  return (
    <Component />
  )
}

export default Dashboard