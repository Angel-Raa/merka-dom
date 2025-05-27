import { Route, Routes } from "react-router-dom";
import { Home, Login } from "..";
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<Login />} />
    </Routes>
  );
}
