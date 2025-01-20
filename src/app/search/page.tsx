import style from "./page.module.css";
import React from "react";

import FilterComponent from "./components/filter/FilterComponent";
import FiltersProvider from "./providers/filters/FiltersProvider";

function Page() {
  const items = Array(100)
    .fill(null)
    .map((_, i) => i + 1);

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
        <ul className={style.results}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </FiltersProvider>
  );
}

export default Page;
