import { Iarticles } from "./Iarticles";

export interface Iitems {
  _id: string;
  name: string;
  category: Iarticles;
  numberInStock: number;
  price: number;
  isFavorite?: boolean;
}

export interface IitemsArray {
  items: Iitems[];
  onDelete: (id: string) => void;
  onFavor: (id: string) => void;
}

export interface IitemsObject extends Iitems {
  onDelete: (id: string) => void;
  onFavor: (id: string) => void;
}

export default Iitems;
