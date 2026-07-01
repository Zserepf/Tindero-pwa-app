'use client';
import Link from "next/link";
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth}  from "@/app/lib/firebase";
import {useRouter} from "next/navigation";


export default function SignupPage(){
    const router = useRouter();

    const handleSignup = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get("email");
        const password = formData.get("password");
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const confirmPassword = formData.get("confirmPassword");
        //Get the form data and create a new user with email and password using Firebase Authentication
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        if (password.length < 6) {
            alert("Password should be at least 6 characters long!");
            return;
        }


        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User created:", userCredential.user);
            // Redirect to dashboard or another page
            alert("Signup successful! You can now log in.");
            router.push("/login");

        } catch (error) {
            console.error("Signup error: ", error.message);
            if (error.code === "auth/email-already-in-use") {
                alert("Email already in use. Please try logging in.");
            }
            if (error.code === "auth/invalid-email") {
                alert("Invalid email format. Please enter a valid email.");
            }
        }
    };

    return(
        <main className="min-h-screen bg-amber-50 flex flex-col items-center justify-center p-6 text-left">
            <form className="bg-transparent border border-orange-600 shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 w-full max-w-sm" onSubmit={handleSignup}>
                <div className="input-group">
                    <label htmlFor="email" className="block text-orange-600 font-bold mb-1">
                        Email:
                    </label>
                    <input type="email" id="email" name="email" required placeholder="e.g. user@example.com" 
                    className="bg-white border border-orange-600 rounded-lg mb-3 w-full px-3 py-2 text-amber-600"/> 

                    <label htmlFor="firstName" className="block text-orange-600 font-bold mb-1">
                        First Name:
                    </label>
                    <input type="text" id="firstName" name="firstName" required placeholder="e.g. John"
                    className="bg-white border border-orange-600 rounded-lg mb-3 w-full px-3 py-2 text-amber-600"/>

                    <label htmlFor="lastName" className="block text-orange-600 font-bold mb-1">
                        Last Name:
                    </label>
                    <input type="text" id="lastName" name="lastName" required placeholder="e.g. Doe"
                    className="bg-white border border-orange-600 rounded-lg mb-3 w-full px-3 py-2 text-amber-600"/>

                    <label htmlFor="password" className="block text-orange-600 font-bold mb-1">
                        Password:
                    </label>
                    <input type="password" id="password" name="password" required placeholder="*********"
                    className="bg-white border border-orange-600 rounded-lg  w-full px-3 py-2 text-amber-600"/>
                     <p className="text-orange-600 text-sm mb-3">Password must be at least 6 characters long.</p>      
                    <label htmlFor="confirmPassword" className="block text-orange-600 font-bold mb-1">
                        Confirm Password:
                    </label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="*********"
                    className="bg-white border border-orange-600 rounded-lg mb-3 w-full px-3 py-2 text-amber-600"/> 
                </div>

                <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-10 rounded-full mt-4 mb-2">Sign Up</button>
                <p className="text-orange-600 font-bold mb-1">
                    Already have an account? <Link href="/login" className="text-orange-600 hover:text-orange-700">
                        Login
                    </Link>
                </p>
            </form>
        </main>
    )
}