"use client";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import {useRouter} from "next/navigation";
import { useEffect } from "react";


export default function DashboardPage()
{
    const router = useRouter();
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log("User is signed in with UID:", uid);
            }
            else {
                router.push("/login");
                console.log("User is not signed in. Redirecting to login page.");
            }
        });
    }) 
        

    return (
        <main className="min-h-screen bg-amber-50 flex flex-col px-4 py-10 overflow-y-scroll">
            <div className="bg-amber-700 min-h-full min-w-full mb-2">
                Welcome, User!
            </div>
            
            <div className="grid grid-cols-2 w-full gap-2 border-2 border-amber-800 p-2">

                <div className="border-2 border-amber-950 p-2">
                    <label className="text-amber-600 font-bold"> Test label </label>
                </div>
                
                <div className=" border-2 border-amber-950 p-2">
                    <label className="text-amber-600 font-bold "> Test label </label>
                    
                </div>
                    
                <div className="border-2 border-amber-950 p-2">
                    <label className="text-amber-600 font-bold "> Test label </label>
                        
                </div>

            </div>


        </main>
    );
}