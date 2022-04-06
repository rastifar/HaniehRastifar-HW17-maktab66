import React, { createContext, useState } from "react";

export const checklistContext = createContext();

const CheckListContextProvider = ({ children }) => {
  const [contextList, setContextList] = useState([]);

  const value = {
    contextList,
    addToContext: (itemToAdd) => {
      setContextList([...contextList, itemToAdd]);
    },
    removeFromContext: (itemToRemove) => {
      setContextList(contextList.filter((item) => item.id !== itemToRemove));
    },
  };

  return (
    <checklistContext.Provider value={value}>
      {children}
    </checklistContext.Provider>
  );
};

export default CheckListContextProvider;
