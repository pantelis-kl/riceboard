"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

type ActionState={
    errors:{
        email?:string,
        password?:string,
        form?:string,
    }
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function signIn(prevState:ActionState,formData:FormData):Promise<ActionState>{
    const email = (formData.get("email") as string)?.trim().toLowerCase() ?? "";
    const password = (formData.get("password") as string) ?? "";
    const errors:ActionState["errors"]={};
    if(!email || !email.trim()) errors.email="Please enter your email";
    else if(!emailRegex.test(email)) errors.email="Please enter a valid email";
    if(!password) errors.password="Please enter your password";

    if(Object.keys(errors).length>0) return {errors};

    const supabase=await createClient();
    
    const {error:signInError}=await supabase.auth.signInWithPassword({email,password});
    if(signInError){
        const message=signInError.message==="Invalid login credentials"?
        "Invalid email or password":
        signInError.message
        return {errors:{form:message}}
    }
    redirect('/success');
}