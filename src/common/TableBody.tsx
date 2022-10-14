import { useContext } from "react";
import { IitemsArray } from "../interface/Iitems";
import ItemContext from "../context/ItemContext";
import Item from "../Item";

function TableBody() {
  const { items, onDelete, onFavor } = useContext(ItemContext) as IitemsArray;

  return (
    <tbody>
      {items.map((item) => (
        <tr key={item._id}>
          <Item onDelete={onDelete} onFavor={onFavor} {...item} />
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
