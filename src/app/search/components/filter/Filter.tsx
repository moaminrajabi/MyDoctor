import React, { ReactElement } from "react";

import style from "./filter.module.css";
import Card from "@/components/card/Card";
import FilterButton from "@/components/filterButton/FilterButton";

type Option = {
  value: string;
  label: string; // ← اصلاح شد
};

type Props = {
  title: string;
  options: Option[];
};

function Filter({ title, options }: Props): ReactElement {
  return (
    <Card>
      <div className={style.filter}>
        <div className={style.title}>{title}</div>
        <div className={style.button}>
          {options.map((option) => (
            <FilterButton key={option.value}>{option.label}</FilterButton>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default Filter;
