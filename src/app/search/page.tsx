import Card from "@/components/card/Card";
import style from "./page.module.css";
import React from "react";

function Page() {
  const items = Array(100)
    .fill(null)
    .map((_, i) => i + 1);

  return (
    <div className={style.page}>
      <div className={style.filters}>
        <Card>
          <div className={style.title}>زوج و فرد</div>
          <button>زوج</button>
          <button>فرد</button>
        </Card>
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
