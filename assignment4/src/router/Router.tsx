import { createBrowserRouter } from "react-router";
import { PATH } from "../constants/path";
import { HeaderLayout, NoneHeaderLayout } from "../Layout";
import MyPage from "../pages/MyPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: PATH.MAIN,
    element: <HeaderLayout />,
    children: [{ path: PATH.MY_PAGE, element: <MyPage /> }],
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
