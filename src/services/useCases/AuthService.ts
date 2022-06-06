import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "services/firebase";

interface PayLoadSignIn {
  email: string;
  password: string;
}

class AuthService {
  async registerUser(email, password) {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
    try {
    } catch (error) {
      console.log(error.message);
    }
  }

  async SignIn() {
    try {
    } catch (err) {}
  }

  async SignOut() {
    try {
    } catch (err) {}
  }
}

const authService = new AuthService();

export { authService };
