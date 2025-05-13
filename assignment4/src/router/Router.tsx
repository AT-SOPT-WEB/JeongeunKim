import { createBrowserRouter, Navigate } from "react-router-dom";
import { PATH } from "../constants/path";
import { HeaderLayout, NoneHeaderLayout } from "../Layout";
import MyPage from "../pages/MyPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={PATH.LOGIN} replace />,
  },
  {
    path: PATH.MAIN,
    element: <HeaderLayout />,
    children: [{ path: PATH.MY_PAGE_TYPE, element: <MyPage /> }],
  },
  {
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
