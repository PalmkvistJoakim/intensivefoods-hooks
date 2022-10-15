import Favorite from "./common/Favorite";
import { Iitemitem } from "./interface/Iitem";

function Item({
  _id,
  name,
  category,
  numberInStock,
  price,
  isFavorite,
  onFavor,
  onDelete,
}: Iitemitem) {
  return (
    <>
      <td>{name}</td>
      <td>{category.name}</td>
      <td>{numberInStock}</td>
      <td>{price}</td>
      <td>
        <Favorite onFavor={onFavor} isFavorite={isFavorite} _id={_id} />
      </td>
      <td>
        <button onClick={() => onDelete(_id)} className="btn btn-danger">
          Delete
        </button>
      </td>
    </>
  );
}

export default Item;
