import { createBrowserRouter } from "react-router";
import LoginPage from "../pages/LoginPage";
import { PATH } from "../constants/path";
import Layout from "../Layout";
import MainPage from "../pages/MainPage";

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: PATH.LOGIN, element: <LoginPage /> },
    ],
  },
]);

export default router;
