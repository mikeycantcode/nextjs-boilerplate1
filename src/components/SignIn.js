import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import styled from 'styled-components';


const SignIn = () => {
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    };

    return (
        <div>
            <button class="px-10 py-4 bg-blue-500 text-white text-lg text-semibold rounded-full" onClick={signInWithGoogle}>
                Sign in with Google
            </button>

        </div>
    );
};

export default SignIn;

