import React from "react";
import PropTypes from "prop-types";

const List = ({ title }) => {
  return (
    <ul style={{ listStyle: "none" }}>
      <li>{title}</li>
    </ul>
  );
};
List.prototype = {
  title: PropTypes.string.isRequired,
};

export default List;
