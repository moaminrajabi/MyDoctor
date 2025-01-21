import style from "./page.module.css";
import React from "react";

import FilterComponent from "./components/filter/FilterComponent";
import FiltersProvider from "./providers/filters/FiltersProvider";
import Result from "./components/list/List";
import List from "./components/list/List";

function Page() {
  return (
    <FiltersProvider>
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
    </FiltersProvider>
  );
}

export default Page;
