import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../src/firebase";

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
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    );
};

export default SignIn;
