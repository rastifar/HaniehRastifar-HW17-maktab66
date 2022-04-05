import React, { useContext } from "react";
//Context
import { checkedContext } from "../context/CheckedContextProvider";

const Checkbox = ({ id, title }) => {
  const { toggleChecked } = useContext(checkedContext);

  const handleChange = (event) => {
    let itemInTheList = event.target.value;
    toggleChecked(itemInTheList);
  };

  return (
    <div className="item-list">
      <input type="checkbox" id={id} value={title} onChange={handleChange} />
      <label>{title}</label>
    </div>
  );
};

export default Checkbox;
