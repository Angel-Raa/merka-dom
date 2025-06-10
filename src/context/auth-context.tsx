import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase/supabase";
import { type User } from "@supabase/supabase-js";

interface Props {
  children: React.ReactNode;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
});

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Primero verifica la sesión existente
    const checkActiveSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setIsLoading(false);
    };

    checkActiveSession();

    // 2. Luego configura el listener de cambios
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth event:", { event, session });

      // Ignora el evento INITIAL_SESSION porque ya manejamos getSession()
      if (event === "INITIAL_SESSION") return;

      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
