import { create } from "zustand";
import { Light, Dark } from "../style/themes";
type Theme = typeof Light | typeof Dark;
interface ThemeStore {
  theme: Theme;
}

interface ThemeAction {
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}
export const useThemeStore = create<ThemeStore & ThemeAction>((set, get) => ({
  theme: Light,
  setTheme: (theme) => set({ theme }),
  toggleTheme: () => set({ theme: get().theme === Light ? Dark : Light }),
}));
