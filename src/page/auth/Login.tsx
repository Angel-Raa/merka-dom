import styled from "styled-components";
import { InputText, SaveButton, Title, Separator } from "../..";
import { BsGoogle } from "react-icons/bs";
import { Device } from "../../lib/style/breack-points";

export function Login() {
  return (
    <Container>
      <div className="card">
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
          <Separator>
            <span>o</span>
          </Separator>
          <SaveButton
            bgcolor={"#DB4437"}
            color={"255,255,255"}
            width={"100%"}
            icon={<BsGoogle />}
          ></SaveButton>
        </form>
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--background-color);
  text-align: center;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media ${Device.tablet} {
      width: 400px;
    }
  }
`;
