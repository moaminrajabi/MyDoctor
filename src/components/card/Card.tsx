import { PropsWithChildren } from "react";
import style from "./Card.module.css";

type props = PropsWithChildren;

function Card({ children }: props) {
  return <div className={style.card}>{children}</div>;
}

export default Card;
