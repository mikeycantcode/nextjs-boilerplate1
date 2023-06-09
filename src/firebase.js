import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC3VHOAUnguAcGRt_-GSrPVFU526q7wznI",
    authDomain: "chatpdfapp.firebaseapp.com",
    projectId: "chatpdfapp",
    storageBucket: "chatpdfapp.appspot.com",
    messagingSenderId: "613503853683",
    appId: "1:613503853683:web:d12170aa6bbe8dd4d57606",
    measurementId: "G-XMVHET41ZH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
