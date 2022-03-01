import { todoListFilterState } from "coil/Atom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import React from "react";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      <Select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </Select>
    </>
  );
};

export default TodoListFilters;

const Select = styled.select`
  display: block;
  border: none;
  box-shadow: none;
  outline: none;
  background-color: #f6f8fa;
  color: #2f3137;
  box-sizing: border-box;
  height: 40px;
  border-radius: 8px;
  padding: 0 1em;
  font-size: 16px;
  margin-bottom: 1em;
`;
