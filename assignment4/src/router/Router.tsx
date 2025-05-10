import { createBrowserRouter } from "react-router";
import LoginPage from "../pages/LoginPage";
import { PATH } from "../constants/path";
import MainPage from "../pages/MainPage";
import SignupPage from "../pages/SignupPage";
import { HeaderLayout, NoneHeaderLayout } from "../Layout";

const router = createBrowserRouter([
  {
    path: PATH.MAIN,
    element: <HeaderLayout />,
    children: [{ index: true, element: <MainPage /> }],
  },
  {
    path: PATH.MAIN,
    element: <NoneHeaderLayout />,
    children: [
      {
        path: PATH.LOGIN,
        element: <LoginPage />,
      },
      {
        path: PATH.SIGNUP,
        element: <SignupPage />,
      },
    ],
  },
]);

export default router;
