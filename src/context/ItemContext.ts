import { createContext } from "react";
import { Iitems, IitemsArray, IitemsObject } from "../interface/Iitems";

export const ItemContext = createContext<
  Iitems | IitemsArray | IitemsObject | null
>(null);

export default ItemContext;
