import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    text: string;
    bg: string;
    bgAlpha: string;
    bg3: string;
    bg4: string;
    bg5: string;
    bgtgderecha: string;
    colorScroll: string;
    logorotate: string;
    // add any other theme properties you use
  }
}

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ToggleTheme } from "./ToggleTheme";
import { v } from "../../../lib/style/variables";
import { mainMenu, secondaryMenu } from "../../../utils/app-config";
import { SidebarCard } from "./SidebarCard";

interface SidebarProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidebar({ state, setState }: SidebarProps) {
  return (
    <Main $isopen={state.toString()}>
      <span className="sidebar-button" onClick={() => setState(!state)}>
        {<v.iconoflechaderecha />}
      </span>
      <Container $isopen={state.toString()} className={state ? "active" : ""}>
        <div className="logo-content">
          <div className="img-content">
            <img src={"https://i.ibb.co/1Y7VrxWS/checkout.png"} />
          </div>
          <h2>MerkaDom</h2>
        </div>
        {mainMenu.map(({ icon, label, to }) => (
          <div
            className={state ? "link-container active" : "link-container"}
            key={label}
          >
            <NavLink
              to={to}
              className={({ isActive }) => `links ${isActive ? ` active` : ``}`}
            >
              <div className="link-icon">{icon}</div>
              <span className={state ? "label-ver" : "label-oculto"}>
                {label}
              </span>
            </NavLink>
          </div>
        ))}
        <Divider />
        {secondaryMenu.map(({ icon, label, to }) => (
          <div
            className={state ? "link-container active" : "link-container"}
            key={label}
          >
            <NavLink
              to={to}
              className={({ isActive }) => `links ${isActive ? ` active` : ``}`}
            >
              <div className="link-icon">{icon}</div>
              <span className={state ? "label-ver" : "label-oculto"}>
                {label}
              </span>
            </NavLink>
          </div>
        ))}
        <ToggleTheme />
        <Divider />
        {state && <SidebarCard />}
      </Container>
    </Main>
  );
}
interface ContainerProps {
  $isopen: string;
}

const Container = styled.div<ContainerProps>`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  position: fixed;
  padding-top: 20px;
  z-index: 1;
  height: 100%;
  width: 65px;
  transition: 0.1s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colorScroll};
    border-radius: 10px;
  }

  &.active {
    width: 220px;
  }
  .logo-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;
    .img-content {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      cursor: pointer;
      transition: 0.3s ease;
      transform: ${({ $isopen }) =>
          $isopen === "true" ? `scale(0.7)` : `scale(1.5)`}
        rotate(${({ theme }) => theme.logorotate});
      img {
        width: 100%;
        animation: flotar 1.7s ease-in-out infinite alternate;
      }
    }
    h2 {
      display: ${({ $isopen }) => ($isopen === "true" ? `block` : `none`)};
    }
    @keyframes flotar {
      0% {
        transform: translate(0, 0px);
      }
      50% {
        transform: translate(0, 4px);
      }
      100% {
        transform: translate(0, -0px);
      }
    }
  }
  .link-container {
    margin: 5px 0;
    transition: all 0.3s ease-in-out;
    padding: 0 5%;
    position: relative;
    &:hover {
      background: ${(props) => props.theme.bgAlpha};
    }
    .links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${() => v.smSpacing} - 2px) 0;
      color: ${(props) => props.theme.text};
      height: 60px;
      .link-icon {
        padding: ${() => v.smSpacing} ${() => v.mdSpacing};
        display: flex;
        svg {
          font-size: 25px;
        }
      }
      .label-ver {
        transition: 0.3s ease-in-out;
        opacity: 1;
      }
      .label-oculto {
        opacity: 0;
      }
      &.active {
        color: ${(props) => props.theme.bg5};
        font-weight: 600;
        &::before {
          content: "";
          position: absolute;
          height: 100%;
          background: ${(props) => props.theme.bg5};
          width: 4px;
          border-radius: 10px;
          left: 0;
        }
      }
    }
    &.active {
      padding: 0;
    }
  }
`;
interface MainProps {
  $isopen: string;
}

const Main = styled.div<MainProps>`
  .sidebar-button {
    position: fixed;
    top: 70px;
    left: 42px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3},
      0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 2;
    transform: ${({ $isopen }) =>
      $isopen === "true" ? `translateX(162px) rotate(3.142rad)` : `initial`};
    color: ${(props) => props.theme.text};
  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${() => v.lgSpacing} 0;
`;
