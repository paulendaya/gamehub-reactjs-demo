import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Header from "../components/header/Header";
import { ColorModeProvider } from "../components/ui/color-mode";
import { Outlet } from "react-router-dom";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider>
          <Header />

          <div className="row mt-4">
            <h1>Oops...</h1>
            <p>
              {
                isRouteErrorResponse(error)
                  ? "Invalid Page"
                  : "Error Encountered"
                // isRouteErrorResponse is a fuction that checks if the error is a RouteErrorResponse object
                // based on  the error object, it will return true or false
              }
            </p>
          </div>
        </ColorModeProvider>
      </ChakraProvider>
    </div>
  );
}

export default ErrorPage;
