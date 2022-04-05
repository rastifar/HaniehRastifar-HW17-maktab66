import React, { useContext } from "react";
//Context
import { checklistContext } from "../context/CheckListContextProvider";
//Soound
import useSound from "use-sound";
import sounds from "../assets/sounds.wav";

const Checkbox = ({ id, title }) => {
  const { addToContext, removeFromContext } = useContext(checklistContext);
  const [play] = useSound(sounds);
  const handleChange = (event) => {
    play();
    const checked = event.target.checked;
    
    let itemInTheList = event.target.value;

    if (checked) {
      addToContext(itemInTheList);
      return;
    }
    removeFromContext(itemInTheList);
  };

  return (
    <div className="item-list">
      <input type="checkbox" id={id} value={title} onChange={handleChange} />
      <label>{title}</label>
    </div>
  );
};

export default Checkbox;
