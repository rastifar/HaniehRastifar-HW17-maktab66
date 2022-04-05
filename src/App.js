import React, { useEffect, useState } from "react";
//styles
import "./styles.scss"
//context
import CheckedContextProveider from "./context/CheckedContextProvider";
//components
import AllItems from "./components/AllItems";
import SelectedItems from "./components/SelectedItems";

const App = () => {
const[items,setItems] = useState([])

  // useEffect(() => { 
  //   fetch("https://624ae47f44505084bc4833c1.mockapi.io/items")
  //   .then((response) => response.json())
  //   .then((json) =>console.log(json[0].id) )
  // }, [])
  //setItems([json])
  return (
    <CheckedContextProveider>
      <div className="contanier">
        < AllItems />       
        <SelectedItems />
      </div>
    </CheckedContextProveider>
  );
};

export default App;

{/* <Checkbox
checked={checked}
onChange={val=>setChecked(val)}
label={"count on me"}
/> */}