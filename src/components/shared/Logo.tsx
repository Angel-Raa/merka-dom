import styled from 'styled-components';

interface LogoContainerProps {
  gap?: string;
}

const LogoContainer = styled.div<LogoContainerProps>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap || '8px'};
`;

interface LogoImageProps {
  height?: string;
}

const LogoImage = styled.img<LogoImageProps>`
  height: ${({ height }) => height || '36px'};
  width: auto;
`;

interface LogoProps {
  src?: string;
  height?: string;
  gap?: string;
  alt?: string;
}

export const Logo: React.FC<LogoProps> = ({
  src = 'https://i.ibb.co/1Y7VrxWS/checkout.png',
  height,
  gap,
  alt = 'Logo',
}) => {
  return (
    <LogoContainer gap={gap}>
      <LogoImage src={src} alt={alt} height={height} />
    </LogoContainer>
  );
};