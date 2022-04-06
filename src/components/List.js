import React from "react";
import PropTypes from "prop-types";

const List = ({ title, id }) => {
  return (
    <li style={{ marginBottom: ".75rem",listStyle: "none" }} key={id}>
      {title}
    </li>
  );
};
List.prototype = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default List;
