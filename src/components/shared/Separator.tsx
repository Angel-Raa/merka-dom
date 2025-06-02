import styled from "styled-components";
interface SeparatorProps {
  color?: string;
  children?: React.ReactNode;
}
export const Separator = ({ children }: SeparatorProps) => {
  return <Linea>{children} </Linea>;
};

const Linea = styled.div`
  background-color: ${(props) => props.color || "#eee"};
  width: 100%;
  margin: 20px 0;
  height: 2px;
  border-radius: 16px;
  text-align: center;
  span {
    top: -10px;
    position: absolute;
    background-color: #fff;
    text-align: center;
    padding: 0 10px;
    color: ${(props) => props.color || "#000"};
    font-size: 14px;
    font-weight: 600;
  }
`;
