import React from "react";

const TodoListItem = () => {
  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">
        <label>
          <input className="uk-checkbox" type="checkbox"></input>
        </label>
      </td>
      <td className="uk-width-expand">item</td>
      <td className="uk-widht-auto">
        <button
          className="uk-icon-button uk-button-danger"
          uk-icon="trash"
        ></button>
      </td>
    </tr>
  );
};

export default TodoListItem;
