import { atom } from "recoil";
import { getId } from "utils/Id";

export const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "hoe", // default value (aka initial value)
});

// to do list
export const todoListState = atom({
  key: "todoListState",
  default: [
    {
      id: getId(),
      text: "go study",
      isComplete: false,
    },
  ],
});

// atom to strore what to filter => from select box
export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});
