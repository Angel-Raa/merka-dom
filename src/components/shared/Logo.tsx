import styled from 'styled-components';

// Opción 1: Estilo básico con Styled Components
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogoImage = styled.img`
  height: 36px; // Ajusta según necesites
  width: auto;
`;


export const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage src={'https://i.ibb.co/1Y7VrxWS/checkout.png'} alt="Logo Checkout" />
    </LogoContainer>
  );
};

