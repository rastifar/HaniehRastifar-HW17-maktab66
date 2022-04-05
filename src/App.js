import React from "react";
//styles
import "./styles.scss";
//context
import CheckListContextProvider from "./context/CheckListContextProvider";
//components
import AllItems from "./components/AllItems";
import SelectedItems from "./components/SelectedItems";

const App = () => {
  return (
    <CheckListContextProvider>
      <div className="contanier">
        <AllItems />
        <SelectedItems />
      </div>
    </CheckListContextProvider>
  );
};

export default App;
