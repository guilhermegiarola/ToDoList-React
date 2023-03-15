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
      <ul>{props.children}</ul>
    </div>
  );
};

export default Element;
