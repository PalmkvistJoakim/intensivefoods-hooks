import { useContext } from "react";
import { ITableBody } from "../interface/Iitem";
import ItemContext from "../context/ItemContext";
import Item from "../Item";

function TableBody() {
  const { allItems, onDelete, onFavor } = useContext(ItemContext) as ITableBody;

  return (
    <tbody>
      {allItems.map((item) => (
        <tr key={item._id}>
          <Item onDelete={onDelete} onFavor={onFavor} {...item} />
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
