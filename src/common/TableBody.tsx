import { useContext } from "react";
import { ITableBody } from "../interface/Iitem";
import ItemContext from "../context/ItemContext";
import Favorite from "./Favorite";

function TableBody() {
  const { allItems, onDelete, onFavor } = useContext(ItemContext) as ITableBody;

  return (
    <tbody>
      {allItems.map((item) => (
        <tr key={item._id}>
          <td>{item.name}</td>
          <td>{item.category.name}</td>
          <td>{item.numberInStock}</td>
          <td>{item.price}</td>
          <td>
            <Favorite
              onFavor={onFavor}
              isFavorite={item.isFavorite}
              _id={item._id}
            />
          </td>
          <td>
            <button
              onClick={() => onDelete(item._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
