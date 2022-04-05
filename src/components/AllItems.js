import React, { useContext } from "react";
//Context
import { checkedContext } from "../context/CheckedContextProvider";
import Checkbox from "./Checkbox";

const AllItems = () => {
  const { listItems, addToCheckedItems } = useContext(checkedContext);

  return (
    <div className="allItems-container">
      <h2>All Items</h2>
      <div className="Item-container">
        {/* why does it print 4 times */}
        {/* {listItems.map(item=>(console.log('from allitems:',item)))} */}
        {listItems.map((item) => (
          <Checkbox key={item.id} id={item.id} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default AllItems;
