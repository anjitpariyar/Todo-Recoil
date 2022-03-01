import React, { useState } from "react";
import { todoListState } from "coil/Atom.js";
import { useSetRecoilState } from "recoil";
import { getId } from "utils/Id";
import styled from "styled-components";
import Add from "./icons/Add";

// Form that add a todo list
const TodoItemCreator = () => {
  // empty input
  const [inputValue, setInputValue] = useState("");

  // useSetRecoilState sets our Atom for the passed value
  const setTodoList = useSetRecoilState(todoListState);

  // handeling onchange for input
  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  // time to update todo list
  const addItem = () => {
    event.preventDefault();
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  // for input value
  return (
    <div>
      <Form onSubmit={addItem}>
        <Input
          type="text"
          value={inputValue}
          onChange={onChange}
          placeholder="Write your task.."
        />
        <Button type="submit">
          <Add />
        </Button>
      </Form>
    </div>
  );
};

export default TodoItemCreator;

const Input = styled.input`
  border: none;
  box-shadow: none;
  outline: none;
  background-color: #ac1ebe12;
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  border-radius: 8px;
  padding: 0 1em;
  font-size: 1em;
  padding-right: 60px;
  color: #2f3137;
  ::placeholder {
    color: #ef02f1;
  }
`;

const Form = styled.form`
  position: relative;
  margin-bottom: 1em;
`;
const Button = styled.button`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: none;
  box-shadow: none;
  outline: none;
  display: grid;
  place-items: center;
  position: absolute;
  top: 9px;
  right: 9px;
  background-color: transparent;
  color: #191919;
  font-size: 1em;
  padding: 0;
  cursor: pointer;
  &:hover {
    background-color: #f598f757;
  }
  svg {
    height: 25px;
    width: auto;
  }
`;
