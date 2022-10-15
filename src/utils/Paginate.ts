import Iitem from "../interface/Iitem";

export function Paginate(
  items: Iitem[],
  pageSize: number,
  selectedPage: number
) {
  const startIndex = (selectedPage - 1) * pageSize;
  const endIndex = selectedPage * pageSize;
  return items.slice(startIndex, endIndex);
}
