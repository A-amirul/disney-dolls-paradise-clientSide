// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBGhS_Uv7Ia-9dEQINS2ROUrK80wlu6jBA",
	authDomain: "disney-dolls-paradise.firebaseapp.com",
	projectId: "disney-dolls-paradise",
	storageBucket: "disney-dolls-paradise.appspot.com",
	messagingSenderId: "147091416606",
	appId: "1:147091416606:web:d9e85f4d6b05dfb07d300f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;