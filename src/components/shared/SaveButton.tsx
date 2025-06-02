import styled from "styled-components";

interface SaveButtonProps {
  bgcolor?: string;
  color?: string;
  width?: string;
  title?: string;
  onClick?: () => void;
  url?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

interface ContainerProps {
  $bgcolor: string;
  $color: string;
  $width: string;
}

export const SaveButton = ({
  bgcolor = "var(--primary-color)",
  color = "255, 255, 255",
  width = "100%",
  title,
  onClick,
  url,
  disabled = false,
  icon = null,
}: SaveButtonProps) => {
  return (
    <Container
      $width={width}
      $color={color}
      $bgcolor={bgcolor}
      onClick={onClick}
      disabled={disabled}
      as={url ? "a" : "button"}
      type="submit"
    >
      <div className="content">
       <Icono $color={color}>
        {icon}
       </Icono>
       {
        title && (
            <span className="btn">{title}</span>
        )
       }
      </div>
    </Container>
  );
};

import React from "react";
import { Icono } from "./Icono";

const Container = styled.button<ContainerProps>`
  font-weight: 700;
  display: flex;
  font-size: 15px;
  padding: 10px 25px;
  border-radius: 16px;
  background-color: ${(props) => props.$bgcolor};
  border: 2px solid rgba(50, 50, 50, 0.2);
  border-bottom: 5px solid rgba(50, 50, 50, 0.2);
  transform: translate(0, -3px);
  cursor: pointer;
  transition: 0.2s;
  transition-timing-function: linear;
  color: rgb(${(props) => props.$color});
  align-items: center;
  justify-content: center;
  width: ${(props) => props.$width};
  .content {
    display: flex;
    gap: 12px;
  }
  &:active {
    transform: translate(0, 0);
    border-bottom: 2px solid rgba(50, 50, 50, 0.5);
  }
  &[disabled] {
    background-color: #646464;
    cursor: no-drop;
    box-shadow: none;
  }
`;
