import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from 'next/router'; // import useRouter

const SignIn = () => {
    const router = useRouter(); // initialize useRouter

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            router.push('/user'); // navigate to /user once signed in
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    };

    return (
        <div>
            <div>
                <button className="py-2 px-8 bg-gradient-to-br from-pink-500 to-pink-400 text-white rounded-lg" onClick={signInWithGoogle}>
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default SignIn;

