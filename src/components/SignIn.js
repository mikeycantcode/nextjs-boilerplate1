import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import styled from 'styled-components';


const SignInButton = styled.button`
  background-color: #306bcf;
  border: 1px solid #205bbf;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #111;
  }
`;

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
            <SignInButton onClick={signInWithGoogle}>
                Sign in with Google
            </SignInButton>
        </div>
    );
};

export default SignIn;

