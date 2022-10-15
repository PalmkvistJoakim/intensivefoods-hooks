import { createContext } from "react";
import { Iitem, Iitemitem, ITableBody } from "../interface/Iitem";

export const ItemContext = createContext<Iitem | ITableBody | Iitemitem | null>(
  null
);

export default ItemContext;
