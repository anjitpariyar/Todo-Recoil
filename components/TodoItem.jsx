import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "coil/Atom";
import {
  replaceItemAtIndex,
  removeItemAtIndex,
} from "utils/ReplaceItemAtIndex";
import styled from "styled-components";
import Remove from "./icons/Remove";

// an actual item of todo
const TodoItem = (todoItem) => {
  const { text, id, isComplete } = todoItem;
  // for both read and write
  const [todoList, setTodoList] = useRecoilState(todoListState);
  // todo list
  const index = todoList.findIndex((listItem) => listItem.id === id);
  // onchange
  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...todoItem,
      isComplete: !isComplete,
    });
    setTodoList(newList);
  };

  // delete Item from list
  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <Item>
      <input
        type="checkbox"
        checked={isComplete}
        onChange={toggleItemCompletion}
        id={id}
        style={{ accentColor: "#e8e8e8" }}
        disabled={isComplete}
        title={"You couldnot uncheck after you checked it."}
      />
      <Label htmlFor={id} isComplete={isComplete}>
        {text}
      </Label>
      <Button onClick={deleteItem}>
        <Remove />
      </Button>
    </Item>
  );
};

export default TodoItem;

const Item = styled.div`
  display: flex;
  gap: 6px;
  font-size: 1em;
  color: #919191;
  margin-bottom: 10px;
  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  outline: none;
  box-shadow: none;
  border: 0;
  display: grid;
  place-items: center;
  padding: 0;
  margin-left: auto;
  color: #fa3c71;
  cursor: pointer;
  svg {
    height: 23px;
    width: auto;
  }
`;

const Label = styled.label`
  cursor: pointer;
  text-decoration: ${({ isComplete }) => isComplete && "line-through"};
  color: ${({ isComplete }) => isComplete && "#919191 !important"};
  flex-grow: 2;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  &:hover {
    color: #2f3137;
  }
`;
