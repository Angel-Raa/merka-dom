import styled from "styled-components";
import { InputText, SaveButton, Title, Separator, Footer } from "../..";
import { BsGoogle } from "react-icons/bs";
import { Device } from "../../lib/style/breack-points";
import { useAuthStore } from "../../lib/store/auth/auth-store";
import { Logo } from "../../components/shared/Logo";

export function Login() {
  const login = useAuthStore((state) => state.login);
  
  return (
    <Container>
      <div className="card">
        <Logo height="80" alt="Checkout Logo"/>
        <Title>Ingresar</Title>
        <form>
          <InputText>
            <input
              className="form-field"
              placeholder="email"
              type="email"
              name="email"
              required
              autoComplete="email"
            />
          </InputText>
          <InputText>
            <input
              className="form-field"
              placeholder="contraseña"
              type="password"
              name="password"
              required
              autoComplete="current-password"
            />
          </InputText>
          <SaveButton
            title="Ingresar"
            bgcolor={"#1CB0F6"}
            color={"255,255,255"}
            width={"100%"}
            icon={<i className="fa fa-sign-in" aria-hidden="true"></i>}
          ></SaveButton>
          <Separator color="#1CB0F6"></Separator>
          <SaveButton
            onClick={login}
            bgcolor={"#DB4437"}
            color={"255,255,255"}
            width={"100%"}
            icon={<BsGoogle />}
          ></SaveButton>
        </form>
      </div>
      <Footer />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  flex-direction: column;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
    width: 100%;
    @media ${Device.tablet} {
      width: 400px;
    }
  }
`;
