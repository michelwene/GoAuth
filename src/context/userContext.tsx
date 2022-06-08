import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "services/firebase";

type User = {
  email: string;
};

type signInData = {
  email: string;
  password: string;
};

type CredentialsData = {
  email: string;
  name: string;
  password: string;
};

type AuthContextData = {
  signIn: (credentials: signInData) => void;
  logoutUser: () => void;
  registerUser: (credentials: CredentialsData) => void;
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (response) => {
      response ? setUser(response) : setUser(null);
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const registerUser = async ({ email, password }: CredentialsData) => {
    try {
      setLoading(true);
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async ({ email, password }: signInData) => {
    try {
      setLoading(true);
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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
    loading,
    error,
    registerUser,
    signIn,
    logoutUser,
    forgotPassword,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
