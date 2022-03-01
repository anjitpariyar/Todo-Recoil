import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "coil/Selector";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilters";
import styled from "styled-components";
import { todoListFilterState } from "coil/Atom";

// wrapper for the  todo list
//this will loop your array
const TodoList = () => {
  //note: I'm using the filtered list returned from Aelector, not Atom
  const todoList = useRecoilValue(filteredTodoListState);
  const filterValue = useRecoilValue(todoListFilterState);
  // form item
  return (
    <>
      <TodoItemCreator />
      <TodoListFilters />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} {...todoItem} />
      ))}
      {todoList.length < 1 &&
        {
          "Show All": (
            <Empty>You haven't any todo list yet.Try adding one 😊. </Empty>
          ),
          "Show Completed": (
            <Empty>You haven't completed any yet. Lazy 😒</Empty>
          ),
          "Show Uncompleted": (
            <Empty>You completed all of your List. otsukaresama 😍</Empty>
          ),
        }[filterValue]}
    </>
  );
};

export default TodoList;

const Empty = styled.div`
  color: #bbb;
  margin-top: 1em;
`;
