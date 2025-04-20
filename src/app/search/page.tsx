import React from "react";

import style from "./page.module.css";
import Card from "@/components/card/Card";

const items = Array(100)
  .fill(null)
  .map((_, i) => i + 1);

function page() {
  return (
    <div className={style.page}>
      <div className={style.filters}>
        <Card>
          <div className={style.title}>زوج یا فرد</div>
          <button>زوج</button>
          <button>فرد</button>
        </Card>
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
