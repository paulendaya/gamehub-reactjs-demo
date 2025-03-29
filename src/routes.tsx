import ErrorPage from "@/pages/ErrorPage";
import GameDetail from "@/pages/GameDetail";
import Games from "@/pages/HomePage";
import Layout from "@/pages/Layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Games /> },
      { path: "games/:id", element: <GameDetail /> },
    ],
  },
]);

export default router;
