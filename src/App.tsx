import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, Sidebar, useThemeStore } from "./index";
import { Device } from "./lib/style/breack-points";
import { Router } from "./index";
import { useState } from "react";

function App() {
  const { theme } = useThemeStore();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />

        <section className="content-sidebar">
          <Sidebar state={open} setState={setOpen} />
        </section>
        <section className="content-menu"></section>
        <section className="content-routers">
          <Router />
        </section>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.main`
  min-height: 100vh; // Asegura que el grid ocupe toda la altura de la ventana
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
