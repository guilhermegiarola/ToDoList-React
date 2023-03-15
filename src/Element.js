import React from "react";

const Element = (props) => {
  function markAsDone(e) {
    e.target.style.textDecoration = "line-through";
    props.markedAsDone(props.item);
  }

  return (
    <div
      onClick={(e) => {
        markAsDone(e);
      }}
    >
      <li>{props.children}</li>
    </div>
  );
};

export default Element;
