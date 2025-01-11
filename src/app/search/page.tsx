import style from "./page.module.css";
import React from "react";

import FilterComponent from "./components/filter/FilterComponent";

function Page() {
  const items = Array(100)
    .fill(null)
    .map((_, i) => i + 1);

  return (
    <div className={style.page}>
      <div className={style.filters}>
        <FilterComponent
          title="زوج یا فرد"
          options={[
            { value: "even", label: "زوج" },
            { value: "odd", label: "فرد" },
          ]}
        />
        <FilterComponent
          title="بخش پذیری"
          options={[
            { value: "tow", label: " بخش بر ۲" },
            { value: "three", label: "بخش بر ۳ " },
            { value: "five", label: "بخش بر  ۵" },
            { value: "seven", label: "بخش بر ۷" },
          ]}
        />
      </div>
      <ul className={style.results}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
