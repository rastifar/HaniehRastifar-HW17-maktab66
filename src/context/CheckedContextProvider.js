import React, { createContext, useEffect, useState } from "react";

export const checkedContext = createContext();

const CheckedContextProveider = ({ children }) => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {  
    fetch("https://624b064444505084bc4ab819.mockapi.io/items")
      .then((response) => response.json())
      .then((json) => setListItems(json))
      .catch(error => {
      alert('It seems to have problem loading data from API')
    })
  }, []);

  const value = {
    listItems,
    toggleChecked: (itemInTheList) => {
      //what is the difference between listItems.map vs [...listItems].map
      //[...listItems].map(item => {
      //why i get error if I wrap 'if' with ()

      let updatedlistItems = listItems.map((item) => {
        if (item.title === itemInTheList) {
          item.checked = !item.checked;
        }
        return item;
      });
      setListItems(updatedlistItems);
    },
  };
  return (
    <checkedContext.Provider value={value}>{children}</checkedContext.Provider>
  );
};

export default CheckedContextProveider;
