import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, Login, Sidebar, useThemeStore } from "./index";
import { Device } from "./lib/style/breack-points";
import { Router } from "./index";
import { useState } from "react";
import { AuthContextProvider } from "./context/auth-context";
import { useLocation } from "react-router-dom"; 

function App() {
  const {pathname} = useLocation()
  const { theme } = useThemeStore();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        {
          pathname !== '/auth/login' ? (
            <Container
              className={`
            ${open ? "active" : ""} `}
            >
              <GlobalStyles />

              <section className="content-sidebar">
                <Sidebar state={open} setState={setOpen} />
              </section>
              <section className="content-menu"></section>
              <section className="content-routers">
                <Router />
              </section>
            </Container>
          ) : (
            <Login />
          )
        }
      </AuthContextProvider>
    </ThemeProvider>
  );
   
}

export default App;

const Container = styled.main`
  transition: 0.1s ease-in-out;

  color: ${(props) => props.theme.text};
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  .content-sidebar {
    display: none;
    height: 100vh; // Sidebar ocupa toda la altura
  }

  .content-menu {
    position: absolute;
  }
  .content-routers {
    grid-column: 1;
    width: 100%;
  }
  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
    &.active {
      grid-template-columns: 260px 1fr;
    }
    .content-sidebar {
      display: initial;
      height: 100vh; // Sidebar ocupa toda la altura en pantallas grandes
    }
    .content-menu {
      display: none;
    }
    .content-routers {
      grid-column: 2;
    }
  }
`;
