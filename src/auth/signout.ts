'use server';
import { createSupabaseServerComponentClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
export default async function SignOutServer(){
    const supabase = await createSupabaseServerComponentClient()
    await supabase.auth.signOut()
    redirect('/')
}
