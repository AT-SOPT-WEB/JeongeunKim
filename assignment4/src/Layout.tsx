import { Outlet } from "react-router";

export default function Layout(): React.ReactElement {
  return (
    <div className="flex h-screen w-screen justify-center p-12">
      <Outlet />
    </div>
  );
}
