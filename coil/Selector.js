import { selector } from "recoil";

import { todoListState, todoListFilterState } from "./Atom";
// todoListState is actual data of todos
//todoListFilterState is a state that store what to filter

// function that going to update filter value of todo list

// this is the actual function of selector
export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  // get comes from actual selector
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    // return virtual filter list saving your actual list
    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
