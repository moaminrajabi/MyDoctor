import React, { PropsWithChildren, ReactElement } from "react";

import style from "./card.module.css";

type Props = PropsWithChildren;

function Card({ children }: Props): ReactElement {
  return <div className={style.card}>{children}</div>;
}

export default Card;
