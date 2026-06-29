'use client';
import Link from "next/link";
import{auth, googleProvider} from "@lib/firebase";
import { signinWithPopup } from "firebase/auth";
import {useRouter} from "next/navigation";
 


export default function LoginPage(){
    return(
        <main className="min-h-screen bg-amber-50 flex flex-col items-center justify-center p-6 text-left">

            {/*FEATURES SECTION*/}
            <form className="bg-transparent border border-orange-600 shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
                
                <h1 className="text-3xl font-black text-orange-600 mb-3">
                    <Link href="/" className="hover:text-orange-800 transition-colors">
                        Tindero
                    </Link> Log In
                </h1>

                <div className="input-group">
                    <label htmlFor="email" className="block text-orange-600 font-bold mb-1">
                        Email:
                    </label>
                    <input type="email" id="email" name="email" required placeholder="e.g. user@example.com" 
                    className="bg-white border border-orange-600 rounded-lg mb-3 w-full px-3 py-2 text-amber-600"/>
                    
                    <label htmlFor="password" className="block text-orange-600 font-bold mb-1">
                        Password:
                    </label>
                    <input type="password" id="password" name="password" required placeholder="*********"
                    className="bg-white border border-orange-600 rounded-lg mb-3 w-full px-3 py-2 text-amber-600" />
                </div>

                <button type="submit" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-10 rounded-full mt-4 mb-2">Login</button>
               
                <p className="text-orange-600 font-bold mb-1">
                    Don't have an account? <Link href="/signup" className="text-orange-600 hover:text-orange-700">
                        Sign up
                    </Link>
                </p>
            </form>
        </main>
    )
}