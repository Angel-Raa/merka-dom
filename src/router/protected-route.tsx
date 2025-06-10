import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/auth-context";

interface Props {
  children: React.ReactNode;
  redirectTo?: string;
}

export const ProtectedRoute = ({ children, redirectTo = "/auth/login" }: Props) => {
  const { user } = UserAuth();
  if (!user) return <Navigate to={redirectTo} replace />;
  return <>{children}</>;
};
