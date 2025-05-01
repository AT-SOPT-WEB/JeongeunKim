import { useState } from "react";
import { VIEW_OPTION } from "./constants/header";
import Header from "./components/header/Header";

function App() {
  const [renderView, setRenderView] = useState(VIEW_OPTION.BASEBALL);

  const handleRenderView = (e) => {
    setRenderView(e.target.value);
  };

  return (
    <div>
      <Header handleRenderView={handleRenderView} clickedOption={renderView} />
    </div>
  );
}

export default App;
