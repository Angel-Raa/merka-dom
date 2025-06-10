import { create } from "zustand";
import { supabase } from "../../supabase/supabase";

// Define la interfaz para el estado
interface AuthStore {
  isAuthenticated: boolean;
}

// Define la interfaz para las acciones
interface AuthActions {
  setAuthenticated: (authenticated: boolean) => void;
  login: () => Promise<void>;
  signOut: () => Promise<void>;
}

// Combina las interfaces para el store completo
export const useAuthStore = create<AuthStore & AuthActions>((set) => ({
  isAuthenticated: false,
  setAuthenticated: (authenticated: boolean) =>
    set({ isAuthenticated: authenticated }),
  login: async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) throw error;
      set({ isAuthenticated: true });
    } catch (error) {
      console.error("Error during login:", error);
      set({ isAuthenticated: false });
    }
  },
  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      set({ isAuthenticated: false });
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  },
}));
