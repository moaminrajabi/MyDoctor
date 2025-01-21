"use client";

import { ItemType } from "@/type/item.type";
import { FiltersContext } from "../filters/FiltersProvider";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type ContexValue = {
  filterdItem: ItemType[];
};

export const itemContext = createContext<ContexValue>({
  filterdItem: [],
});

type Props = PropsWithChildren & {
  items: ItemType;
};

export default function ItemsProvider({ children, items }: Props) {
  const { filters } = useContext(FiltersContext);

  const [filterdItem, setFilterdItem] = useState<ItemType[]>([]);

  const isActive = useCallback(
    (item: ItemType) => {
      if (filters.even && item.value % 2 === 0) {
        return true;
      }
      if (filters.odd && item.value % 2 === 1) {
        return true;
      }
      if (filters.three && item.value % 3 === 0) {
        return true;
      }
      if (filters.five && item.value % 5 === 0) {
        return true;
      }
      if (filters.seven && item.value % 7 === 0) {
        return true;
      }
      return false;
    },
    [filters]
  );

  useEffect(() => {
    setFilterdItem(items.filter(isActive));
  }, [isActive, items]);

  return (
    <itemContext.Provider value={{ filterdItem }}>
      {children}
    </itemContext.Provider>
  );
}
