import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "services/firebase";

class AuthService {
  async registerUser(email, password) {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
    try {
    } catch (error) {
      console.log(error.message);
    }
  }

  async SignIn(email, password) {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async SignOut() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  }
}

const authService = new AuthService();

export { authService };
