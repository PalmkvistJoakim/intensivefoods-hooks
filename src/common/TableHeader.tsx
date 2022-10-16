import { useContext } from "react";
import ItemContext from "../context/ItemContext";
import { ITableBody } from "../interface/Iitem";

function TableHeader() {
  const { onSort, sortColumn } = useContext(ItemContext) as ITableBody;

  const raiseSort = (path: string) => {
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "desc" ? "asc" : "desc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    onSort(sortColumn);
  };

  return (
    <thead>
      <tr>
        <th onClick={() => raiseSort("name")}>Name</th>
        <th onClick={() => raiseSort("category.name")}>Category</th>
        <th onClick={() => raiseSort("numberInStock")}>Stock</th>
        <th onClick={() => raiseSort("price")}>Price</th>
        <th />
        <th />
      </tr>
    </thead>
  );
}

export default TableHeader;
