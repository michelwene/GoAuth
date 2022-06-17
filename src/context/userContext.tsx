import { createContext, useContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "services/firebase";
import { CustomToast } from "components/CustomTostfy";
import { toast } from "react-toastify";
import { handleSaveDataInCookies } from "utils/saveDataInCookies";

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

  const signIn = async ({ email, password }: signInData) => {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      console.log(data);
      toast(
        <CustomToast
          status="success"
          title="Sucesso!"
          message="Login efetuado com sucesso!"
        />
      );
      handleSaveDataInCookies({
        keyCookie: "userData",
        data: JSON.stringify(data),
      });
      handleSaveDataInCookies({
        keyCookie: "accessToken",
        data: data.user.uid,
      });
      handleSaveDataInCookies({
        keyCookie: "refreshToken",
        data: data.user.refreshToken,
      });
      setUser(data.user);
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
    try {
      await sendPasswordResetEmail(auth, email);
      toast(
        <CustomToast
          status="success"
          title="Sucesso!"
          message="E-mail de recuperação enviado com sucesso!
        "
        />
      );
    } catch (err) {
      toast(
        <CustomToast
          status="error"
          title="Ops..."
          message={
            "E-mail não encontrado" ??
            "Ocorreu um erro ao realizar recuperação da senha."
          }
        />
      );
    }
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
