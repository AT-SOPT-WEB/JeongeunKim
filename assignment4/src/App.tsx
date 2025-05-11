import { RouterProvider } from "react-router";
import router from "./router/Router";
import { Providers } from "./utils/Providers";

const App = () => {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
};

export default App;
