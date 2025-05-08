import { useState } from "react";
import { VIEW_OPTION } from "./constants/header";
import Header from "./components/header/Header";
import GithubSearchSection from "./sections/GithubSearchSection/GithubSearchSection";
import BaseballSection from "./sections/BaseballSection/BaseballSection";
import "./App.css";

function App() {
  const [renderView, setRenderView] = useState(VIEW_OPTION.BASEBALL);

  const handleRenderView = (e) => {
    setRenderView(e.target.value);
  };

  const renderContent = {
    [VIEW_OPTION.BASEBALL]: <BaseballSection />,
    [VIEW_OPTION.SEARCH_GITHUB]: <GithubSearchSection />,
  };

  return (
    <>
      <Header handleRenderView={handleRenderView} clickedOption={renderView} />
      {renderContent[renderView]}
    </>
  );
}

export default App;
