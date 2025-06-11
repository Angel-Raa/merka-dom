import { Navigate } from "react-router-dom";
import type { User } from "@supabase/supabase-js";

interface Props {
  children: React.ReactNode;
  redirectTo?: string;
  user?: User | null;
}

export const ProtectedRoute = ({
  children,
  redirectTo = "/auth/login",
  user,
}: Props) => {
  if (!user) return <Navigate to={redirectTo} replace />;
  return <>{children }</>;
};
