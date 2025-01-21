import { ReactElement } from "react";

import Item from "../item/Item";

import style from "./List.module.css";

const items = Array(100)
  .fill(null)
  .map((_, i) => i + 1);

export default function List(): ReactElement {
  return (
    <ul className={style.list}>
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </ul>
  );
}
