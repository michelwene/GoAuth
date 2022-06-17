import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "services/firebase";
import { CustomToast } from "components/CustomTostfy";
import { toast } from "react-toastify";

type User = {
  email: string;
};

type signInData = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn: (credentials: signInData) => void;
  logoutUser: () => void;
  forgotPassword: (email: string) => void;
  user: User;
  error: string;
};

interface UserContextProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext({} as AuthContextData);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (response) => {
      response ? setUser(response) : setUser(null);
      setError("");
    });
    return unsubscribe;
  }, []);

  const signIn = async ({ email, password }: signInData) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      toast(
        <CustomToast
          status="success"
          title="Sucesso!"
          message="Login efetuado com sucesso!"
        />
      );
    } catch (err) {
      setError(err.message);
      toast(
        <CustomToast
          status="error"
          title="Ops..."
          message={
            "E-mail e/ou senha Incorretos" ??
            "Ocorreu um erro ao realizar o Login."
          }
        />
      );
    }
  };

  const logoutUser = async () => {
    signOut(auth);
  };

  const forgotPassword = async (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  const contextValue = {
    user,
    error,
    signIn,
    logoutUser,
    forgotPassword,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
