"use client";

import React, {
  createContext,
  PropsWithChildren,
  ReactElement,
  useState,
} from "react";
import { FiltersType } from "../Types/filters.type";

type ContextValue = {
  filters: FiltersType;
  changeFilter: <Tkey extends keyof FiltersType>(
    key: Tkey,
    value: Exclude<FiltersType[Tkey], undefined>
  ) => void;
  RemoveFilter: <TKey extends keyof FiltersType>(key: TKey) => void;
  ClearAll: () => void;
};

export const FiltersContext = createContext<ContextValue>({
  filters: {},
  changeFilter: () => {},
  RemoveFilter: () => {},
  ClearAll: () => {},
});

type Props = PropsWithChildren;

export default function FiltersProviders({ children }: Props): ReactElement {
  const [filters, setFilters] = useState<FiltersType>({});

  const changeFilter = <Tkey extends keyof FiltersType>(
    key: Tkey,
    value: Exclude<FiltersType[Tkey], undefined>
  ): void => {
    setFilters((old) => ({ ...old, [key]: value }));
  };

  const RemoveFilter = <TKey extends keyof FiltersType>(key: TKey): void => {
    setFilters((old) => {
      const clone = { ...old };
      delete clone[key];
      return clone;
    });
  };

  const ClearAll = (): void => {
    setFilters({});
  };

  return (
    <FiltersContext.Provider
      value={{ filters, changeFilter, RemoveFilter, ClearAll }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
