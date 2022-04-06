import React, { useState, useEffect } from "react";
//Context
import Checkbox from "./Checkbox";

const AllItems = () => {
  // const { listItems } = useContext(checklistContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://624b064444505084bc4ab819.mockapi.io/items")
      .then((response) => response.json())
      .then((json) => setItems(json))
      .catch((error) => {
        alert("It seems to have problem loading data from API");
      });
  }, []);

  return (
    <div className="allItems-container">
      <h2>All Items</h2>
      <div className="Item-container">
        {/* why does it print 4 times */}
        {/* {listItems.map(item=>(console.log('from allitems:',item)))} */}
        {items.map((item) => (
          <Checkbox key={item.id} id={item.id} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default AllItems;
