import React from "react";

import style from "./page.module.css";

import Filter from "./components/filter/Filter";

const items = Array(100)
  .fill(null)
  .map((_, i) => i + 1);

function page() {
  return (
    <div className={style.page}>
      <div className={style.filters}>
        <Filter
          title="زوج یا فرد"
          options={[
            { value: "even", label: "زوج" },
            { value: "odd", label: "فرد" },
          ]}
        />
      </div>
      <ul className={style.results}>
        {items.map((item) => (
          <li key={item} className={item % 2 === 0 ? style.active : ""}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default page;
