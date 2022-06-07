import { AxiosError } from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "services/firebase";

class AuthService {
  async registerUser(email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      const error = err as AxiosError;
      if (error.isAxiosError) {
        switch (error.response.status) {
          case 400:
            throw new Error("Email já cadastrado");
          case 500:
            throw new Error("Erro interno do servidor");
          default:
            throw new Error(error.response.statusText);
        }
      }
      throw new Error(err.message);
    }
  }

  async SignIn(email: string, password: string) {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (err) {
      const error = err as AxiosError;

      if (error.isAxiosError) {
        switch (error.response.status) {
          case 401:
            throw new Error("Email ou senha inválidos");
          case 500:
            throw new Error("Erro interno do servidor");
          default:
            throw new Error(error.response.statusText);
        }
      }
      throw new Error(err.message);
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
