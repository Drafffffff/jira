import React, { ReactNode, useContext } from "react";
import { useState } from "react";
import * as auth from "auth-provider";
import { User } from "screens/projects-list/serch-panel";
interface AuthForm {
  username: string;
  password: string;
}

const AuthContext =
  React.createContext<
    | {
        user: User | null;
        register: (form: AuthForm) => Promise<void>;
        login: (form: AuthForm) => Promise<void>;
        logout: (form: AuthForm) => Promise<void>;
      }
    | undefined
  >(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, logout, register }}
    />
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在auth-provider中使用");
  }
  return context;
};
