"use client";

import { ReactElement, useContext } from "react";

import { FiltersContext } from "@/app/search/providers/filters/FiltersProvider";

import style from "./Item.module.css";

type Props = {
  item: number;
};

export default function Item({ item }: Props): ReactElement {
  const { filters } = useContext(FiltersContext);
  return <li className={style.item}> {item} </li>;
}
