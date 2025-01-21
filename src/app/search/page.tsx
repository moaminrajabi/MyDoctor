import style from "./page.module.css";
import React from "react";

import FilterComponent from "./components/filter/FilterComponent";
import FiltersProvider from "./providers/filters/FiltersProvider";
import List from "./components/list/List";
import ItemsProvider from "./providers/itemsProvider/itemsProvider";

const items = Array(100)
  .fill(null)
  .map((_, i) => ({ value: i + 1 }));

export default function Page() {
  return (
    <FiltersProvider>
      <ItemsProvider items={items}>
        <div className={style.page}>
          <div className={style.filters}>
            <FilterComponent
              title="زوج یا فرد"
              options={[
                { key: "even", label: "زوج" },
                { key: "odd", label: "فرد" },
              ]}
            />
            <FilterComponent
              title="بخش پذیری"
              options={[
                { key: "three", label: "بخش بر ۳ " },
                { key: "five", label: "بخش بر  ۵" },
                { key: "seven", label: "بخش بر ۷" },
              ]}
            />
          </div>
          <List />
        </div>
      </ItemsProvider>
    </FiltersProvider>
  );
}
