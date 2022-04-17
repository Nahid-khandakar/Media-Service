
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCG_mOpFMdLGjCBjorgqNBt7Mvf-o_KV8M",
    authDomain: "media-services-bfa19.firebaseapp.com",
    projectId: "media-services-bfa19",
    storageBucket: "media-services-bfa19.appspot.com",
    messagingSenderId: "795806858811",
    appId: "1:795806858811:web:da5475a605e4f41762a61e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;