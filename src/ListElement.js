import React from "react";
import Element from "./Element";

const ListElement = (props) => {
  function markedAsDone(item) {
    props.getElementToMark(item);
  }

  return (
    <div>
      {props.taskList.map((item) => {
        return (
          <Element item={item} markedAsDone={markedAsDone}>
            {item.text}
          </Element>
        );
      })}
    </div>
  );
};

export default ListElement;
