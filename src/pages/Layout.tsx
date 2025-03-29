import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Header from "../components/header/Header";
import { ColorModeProvider } from "../components/ui/color-mode";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider>
          <Header />

          <div className="row mt-4">
            <Outlet />
          </div>
        </ColorModeProvider>
      </ChakraProvider>
    </div>
  );
}

export default Layout;
