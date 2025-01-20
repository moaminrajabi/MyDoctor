"use client";
import React, {
  createContext,
  PropsWithChildren,
  ReactElement,
  useState,
} from "react";

import { FilterType } from "../../types/filter.type";

type ContextValue = {
  filters: FilterType;
  changeFilter: <Tkey extends keyof FilterType>(
    key: Tkey,
    value: FilterType[Tkey]
  ) => void;
  removeFilter: <Tkey extends keyof FilterType>(key: Tkey) => void;
};

export const FiltersContext = createContext<ContextValue>({
  filters: {},
  changeFilter: () => {},
  removeFilter: () => {},
});

type Props = PropsWithChildren;

export default function FiltersProvider({ children }: Props): ReactElement {
  const [filters, setFilters] = useState<FilterType>({});

  const changeFilter = <Tkey extends keyof FilterType>(
    key: Tkey,
    value: FilterType[Tkey]
  ): void => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const removeFilter = <Tkey extends keyof FilterType>(key: Tkey): void => {
    setFilters((prev) => {
      const clone = { ...prev };
      delete clone[key];
      return clone;
    });
  };

  return (
    <FiltersContext.Provider value={{ filters, removeFilter, changeFilter }}>
      {children}
    </FiltersContext.Provider>
  );
}
