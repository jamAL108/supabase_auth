'use server';

import {createSupabaseServerComponentClient} from '../lib/supabase/server'

export const signupWithEmailPassword = async (formdata: {
    email: string,
    password: string
}) => {
    const supabase = await createSupabaseServerComponentClient()
    const result = await supabase.auth.signUp({
        email: formdata.email,
        password: formdata.password,
    })
    return JSON.stringify(result)
}
export const signinWithEmailPassword = async (formdata: {
    email: string,
    password: string
}) => {
    const supabase = await createSupabaseServerComponentClient()
    const result = await supabase.auth.signInWithPassword({
        email: formdata.email,
        password:formdata.password
    })
    return JSON.stringify(result)
}