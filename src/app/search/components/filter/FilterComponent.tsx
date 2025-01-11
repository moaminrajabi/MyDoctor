import React, { ReactElement } from "react";
import Card from "@/components/card/Card";
import FilterButton from "@/components/filter-button/FilterButton";
import style from "./FilterComponent.module.css";

type Option = {
  value: string;
  label: string;
};

type Props = {
  title: string;
  options: Option[];
};

function FilterComponent({ title, options }: Props): ReactElement {
  return (
    <Card>
      <div className={style.filters}>
        <div className={style.title}>{title}</div>
        <div className={style.buttons}>
          {options.map((option) => (
            <FilterButton key={option.value}>{option.label}</FilterButton>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default FilterComponent;
