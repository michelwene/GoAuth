import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

interface PayLoadSignIn {
  email: string;
  password: string;
}

class AuthService {
  async SignIn(payload: PayLoadSignIn) {
    try {
      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );
    } catch (err) {}
  }

  async registerUser(payload: PayLoadSignIn) {
    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );
    } catch (err) {}
  }
}

const authService = new AuthService();

export { authService };
