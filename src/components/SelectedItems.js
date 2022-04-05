import React, { useContext } from "react";
import { v4 } from "uuid";

//Context
import { checklistContext } from "../context/CheckListContextProvider";
//Components
import List from "./List";

const SelectedItems = () => {
  const { contextList } = useContext(checklistContext);

  return (
    <div className="selectedItems-container">
      <h2>selected Items</h2>
      {/* {listItems.map(item => (item.checked && <List key={item.id} title={item.title}/>))} */}

      {contextList.map((item) => (
        <List key={v4()} title={item} />
      ))}
    </div>
  );
};

export default SelectedItems;
