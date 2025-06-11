import { Route, Routes } from "react-router-dom";
import { Home, Login } from "..";
import { ProtectedRoute } from "./protected-route";
import { UserAuth } from "../context/auth-context";
export function Router() {
  const { user, isLoading } = UserAuth(); // Asegúrate de que tu contexto exponga `isLoading`

  // TODO: CREAR COMPONENTES DE LOADING
  if (isLoading) {
    return <div>Cargando...</div>; // O un spinner profesional
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute user={user} redirectTo="/auth/login">
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/auth/login" element={<Login />} />
    </Routes>
  );
}