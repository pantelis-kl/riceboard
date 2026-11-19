"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

type ActionState={
    errors:{
        full_name?:string,
        email?:string,
        password?:string,
        confirm_password?:string,
        form?:string,
    }
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validatePassword(password: string): string | undefined {
  if (!password) return "Please enter a password";
  if (password.length < 8) return "Password must be at least 8 characters";
  if (!/[A-Z]/.test(password)) return "Password must include at least one uppercase letter";
  if (!/\d/.test(password)) return "Password must include at least one number";
  return undefined;
}

export async function signIn(prevState:ActionState,formData:FormData):Promise<ActionState>{
    const email = (formData.get("email") as string)?.trim().toLowerCase() ?? "";
    const password = (formData.get("password") as string) ?? "";
    const errors:ActionState["errors"]={};

    if(!email) errors.email="Please enter your email";
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

export async function signUp(prevState:ActionState,formData:FormData):Promise<ActionState>{
    const full_name=(formData.get("full_name") as string)?.trim() ?? "";
    const email=(formData.get("email") as string)?.trim().toLowerCase() ?? "";
    const password=(formData.get("password") as string) ?? "";
    const confirm_password=(formData.get("confirm_password") as string) ?? "";
    const errors:ActionState['errors']={};

    if(!full_name) errors.full_name="Please enter your full name";
    if(!email) errors.email="Please enter your email";
    else if(!emailRegex.test(email)) errors.email="Please enter a valid email";
    if(!confirm_password) errors.confirm_password="Please confirm your password";
    if(validatePassword(password)) errors.password=validatePassword(password);
    else if(password!==confirm_password) errors.confirm_password="Passwords do not match";
    if(Object.keys(errors).length>0) return {errors}

    const supabase=await createClient();
    const {error:signUpError}=await supabase.auth.signUp({
        email,
        password,
        options:{
            data:{full_name}
        }
    });
    if(signUpError) return {errors:{form:signUpError.message}};
    redirect('/success');
}