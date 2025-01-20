"use client";

import React, { ReactElement, useContext } from "react";
import Card from "@/components/card/Card";
import FilterButton from "@/components/filter-button/FilterButton";
import style from "./FilterComponent.module.css";
import { FiltersContext } from "../../providers/filters/FiltersProvider";
import clsx from "clsx";
import { FilterType } from "../../types/filter.type"; // بررسی کنید که مسیر صحیح باشد

type Option = {
  key: keyof FilterType;
  label: string;
};

type Props = {
  title: string;
  options: Option[];
};

function FilterComponent({ title, options }: Props): ReactElement {
  const { filters, changeFilter } = useContext(FiltersContext);

  // بررسی می‌کنیم که filters و changeFilter به درستی مقداردهی شده باشند
  if (!filters || !changeFilter) {
    console.error("FiltersContext is not properly initialized.");
    return <div>Error: FiltersContext is not available.</div>;
  }

  return (
    <Card>
      <div className={style.filters}>
        <div className={style.title}>{title}</div>
        <div className={style.buttons}>
          {options.map((option) => (
            <FilterButton
              isActive={filters[option.key]}
              key={option.key}
              className={clsx(filters[option.key] && style.active)}
              onClick={() => {
                changeFilter(option.key, !filters[option.key]);
              }}
            >
              {option.label}
            </FilterButton>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default FilterComponent;
