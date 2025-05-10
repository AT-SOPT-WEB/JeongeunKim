import { Outlet } from "react-router";
import Header from "./components/Header";

export const HeaderLayout = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header /> <Outlet />
    </div>
  );
};

export const NoneHeaderLayout = () => {
  return (
    <div className="flex flex-col justify-center h-screen w-screen">
      <Outlet />
    </div>
  );
};
