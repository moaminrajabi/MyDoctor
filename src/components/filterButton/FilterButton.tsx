import { ComponentProps, ReactElement } from "react";
import clsx from "clsx";

import style from "./filterButton.module.css";

type Props = ComponentProps<"button"> & { isActive?: boolean };

function FilterButton({
  isActive = false,
  children,
  className,
  ...otherProps
}: Props): ReactElement {
  return (
    <button
      className={clsx(
        style["filter-button"],
        isActive && style.active,
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default FilterButton;
