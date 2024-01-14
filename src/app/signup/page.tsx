'use server'
import React from 'react'
import Component from './component'
import { senditToMain } from '@/auth/tokencheck'
const Signup = async () => {
  await senditToMain()
  return (
    <Component/>
  )
}

export default Signup