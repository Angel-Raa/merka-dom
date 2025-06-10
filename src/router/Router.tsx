import { Route, Routes } from "react-router-dom";
import { Home, Login } from "..";
import { ProtectedRoute } from "./protected-route";
export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/auth/login" element={<Login />} />
    </Routes>
  );
}
