import { useState, useEffect } from "react";
import { getFoods } from "./services/fakeFoodService";
import Table from "./common/Table";
import Pagination from "./common/Pagination";
import Iitems from "./interface/Iitems";
import ItemContext from "./context/ItemContext";

function Items() {
  const [items, setItems] = useState<Iitems[]>([]);
  const [pageSize, setPageSize] = useState(4);
  const [selectedPage, setSelectedPage] = useState(1);

  useEffect(() => {
    setItems(getFoods());
  }, []);

  const { length: count } = items;

  const handleDelete = (id: string) => {
    const filteredItems = items.filter((f) => f._id !== id);
    setItems(filteredItems);
  };

  const handleFavorite = (id: string) => {
    const newItems = items.map((item) => {
      if (item._id === id) {
        item.isFavorite = !item.isFavorite;
      }
      return item;
    });
    setItems(newItems);
  };

  if (count === 0) return <p>There are no foods in the database</p>;
  return (
    <>
      <div className="container">
        <p>Showing {count} foods in the database</p>
        <ItemContext.Provider
          value={{
            items,
            onDelete: handleDelete,
            onFavor: handleFavorite,
          }}
        >
          <Table />
        </ItemContext.Provider>
        <Pagination
          pageSize={pageSize}
          selectedPage={selectedPage}
          itemCount={count}
        />
      </div>
    </>
  );
}

export default Items;
