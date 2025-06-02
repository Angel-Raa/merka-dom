import styled from "styled-components";

export const Footer = () => {
  return (
    <Container>
      <Lock className="lock">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 17.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm6-5.5v5c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-5c0-1.1.9-2 2-2h1v-3c0-2.76 2.24-5 5-5s5 2.24 5 5v3h1c1.1 0 2 .9 2 2zm-8-3h4v-3c0-1.66-1.34-3-3-3s-3 1.34-3 3v3zm8 0c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-5z"
            fill="#91a4b7"
          />
        </svg>
        <span>Pagos seguros procesados por nuestro socio de confianza</span>
      </Lock>
      <Derechos className="derechos">
        <span>© 2025 MERKA-DOM. Todos los derechos reservados.</span>
        <Links>
          <a href="https://merka-dom.com/terms">Términos de Servicio</a>
          <Separador className="separador" />
          <a href="https://merka-dom.com/privacy">Política de Privacidad</a>
          <Separador className="separador" />
          <a href="https://merka-dom.com/support">Soporte</a>
          <Separador className="separador" />
          <a href="https://merka-dom.com/pricing">Precios</a>
        </Links>
      </Derechos>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12.2px;
  color: #91a4b7;
  gap: 5px;
  margin: 10px;
  padding: 20px;
  background-color: #f8f9fa;
  border-top: 1px solid rgba(145, 164, 183, 0.3);
`;

const Lock = styled.div`
  border-bottom: 1px solid rgba(145, 164, 183, 0.3);
  display: flex;
  align-items: center;
  gap: 5px;
  padding-bottom: 10px;

  svg {
    flex-shrink: 0;
  }
`;

const Derechos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    color: #91a4b7;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #3b82f6;
    }
  }
`;

const Separador = styled.div`
  width: 1px;
  background-color: rgba(145, 164, 183, 0.3);
  height: 12px;
  display: flex;
  align-self: center;
`;
