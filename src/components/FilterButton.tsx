import React from "react";
import { FilterButtonProps } from "../types/types";

const FilterButton = (props: FilterButtonProps) => {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.filterName)}>
      {props.filterName}
    </button>
  )
};

export default FilterButton;