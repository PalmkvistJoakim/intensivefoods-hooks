import { Iarticle } from "./Iarticle";

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
  onDelete: (id: string) => void;
  onFavor: (id: string) => void;
}

export interface Iitemitem extends Iitem {
  onDelete: (id: string) => void;
  onFavor: (id: string) => void;
}

export default Iitem;
