import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

async function testLogin() {
  try {
    const user = await signInWithEmailAndPassword(auth, "test@example.com", "password123");
    console.log("Logged in user:", user);
  } catch (error) {
    console.error("Authentication error:", error.message);
  }
}

testLogin();
