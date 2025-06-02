import styled from "styled-components";

interface IconoProps {
  $color?: string;
}

export const Icono = styled.span<IconoProps>`
   display:flex;
   align-items:center;
   text-align:center;
    font-size:20px;
    color:${(props) => props.$color};
  
  
`