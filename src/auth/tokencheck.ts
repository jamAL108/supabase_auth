'use server';
import readUserSession from '@/lib/action'
import { redirect } from 'next/navigation'

export async function sendItToSignup() {
    const { data } = await readUserSession()
    if (!data.session) {
        return redirect('/signup')
    }
}

export async function senditToMain(){
    const { data } = await readUserSession()
    if (data.session) {
        return redirect('/dashboard')
    }
}