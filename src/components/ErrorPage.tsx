import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <h1>Oops...</h1>
      <p>
        {
          isRouteErrorResponse(error) ? "Invalid Page" : "Error Encountered"
          // isRouteErrorResponse is a fuction that checks if the error is a RouteErrorResponse object
          // based on  the error object, it will return true or false
        }
      </p>
    </>
  );
};

export default ErrorPage;
