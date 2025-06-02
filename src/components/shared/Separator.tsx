import styled from "styled-components";

interface SeparatorProps {
  color?: string;
  children?: React.ReactNode;
}

export const Separator = ({ color, children }: SeparatorProps) => {
  return (
    <Linea color={color}>
      {children && <Span>{children}</Span>}
    </Linea>
  );
};

const Linea = styled.div<{ color?: string }>`
  position: relative;
  background-color: ${(props) => props.color};
  width: 100%;
  height: 2px;
  border-radius: 16px;
  margin: 20px 0;
`;

const Span = styled.span`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);

  padding: 0 10px;
  color: ${(props) => props.color || "#000"};
  font-size: 14px;
  font-weight: 600;
`;