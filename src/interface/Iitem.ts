import { Iarticle } from "./Iarticle";
import { Isort } from "./Isort";

export interface Iitem {
  _id: string;
  name: string;
  category: Iarticle;
  numberInStock: number;
  price: number;
  isFavorite?: boolean;
}

export interface ITableBody {
  allItems: Iitem[];
  sortColumn: Isort;
  onDelete: (id: string) => void;
  onFavor: (id: string) => void;
  onSort: (sortColumn: Isort) => void;
}

export interface Iitemitem extends Iitem {
  onDelete: (id: string) => void;
  onFavor: (id: string) => void;
}

export default Iitem;
