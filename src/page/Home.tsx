import styled from "styled-components";
import { useAuthStore } from "../lib/store/auth/auth-store";
import { UserAuth } from "../context/auth-context";

export function Home() {
  const signOut = useAuthStore((state) => state.signOut);
  const { user } = UserAuth();
  return (
    <Container>
      <span>Home</span>
      <button onClick={signOut}>Cerra session</button>
      <span>{user?.id}</span>
      <span>{user?.email}</span>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
