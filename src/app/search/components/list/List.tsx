"use client"

import { ReactElement, useContext } from "react";

import Item from "../item/Item";

import style from "./List.module.css";
import { itemContext } from "../../providers/itemsProvider/itemsProvider";

export default function List(): ReactElement {
  const { filterdItem } = useContext(itemContext);
  return (
    <ul className={style.list}>
      {filterdItem.map((item) => (
        <Item key={item.value} item={item} />
      ))}
    </ul>
  );
}
