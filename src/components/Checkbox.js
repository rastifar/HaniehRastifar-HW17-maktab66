import React, { useContext } from "react";
//Context
import { checkedContext } from "../context/CheckedContextProvider";
//Soound 
import useSound from 'use-sound';
import sounds from "../assets/sounds.wav"

const Checkbox = ({ id, title }) => {
  const { toggleChecked } = useContext(checkedContext);
    const [play] = useSound(sounds)
    const handleChange = (event) => {
      play()
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
