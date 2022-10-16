import Table from "./common/Table";
import { Icolumn, Icolumnkey } from "./interface/Icolumn";

function ItemTable() {
  const columns: Icolumn[] | Icolumnkey[] = [
    { label: "Name", path: "name" },
    { label: "Category", path: "category.name" },
    { label: "Stock", path: "numberInStock" },
    { label: "Price", path: "price" },
    { key: "Favorite" },
    { key: "Delete" },
  ];

  return (
    <div>
      <Table columns={columns} />
    </div>
  );
}

export default ItemTable;
