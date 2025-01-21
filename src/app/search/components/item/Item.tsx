

import { ReactElement } from "react";

import style from "./Item.module.css";

import { ItemType } from "@/type/item.type";

type Props = {
  item: ItemType;
};

export default function Item({ item }: Props): ReactElement {
  return <li className={style.item}> {item.value} </li>;
}
