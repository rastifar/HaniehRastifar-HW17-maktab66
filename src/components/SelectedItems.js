import React, { useContext } from "react";
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
      <ul>
        {contextList.map((item) => (
          <List key={item.id} id={item.id} title={item.value} />
        ))}
      </ul>
    </div>
  );
};

export default SelectedItems;
