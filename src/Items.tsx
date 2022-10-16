import { useState, useEffect } from "react";
import { getFoods } from "./services/fakeFoodService";
import Pagination from "./common/Pagination";
import Iitem from "./interface/Iitem";
import ItemContext from "./context/ItemContext";
import ListGroup from "./common/ListGroup";
import { Iarticle } from "./interface/Iarticle";
import { getCategories } from "./services/fakeCategoryService";
import { Paginate } from "./utils/Paginate";
import { Isort } from "./interface/Isort";
import _ from "lodash";
import ItemTable from "./ItemTable";

const DEFAULT_ARTICLES = { _id: "", name: "All Categories" };

function Items() {
  const [items, setItems] = useState<Iitem[]>([]);
  const [pageSize, setPageSize] = useState(4);
  const [selectedPage, setSelectedPage] = useState(1);
  const [articles, setArticles] = useState<Iarticle[]>([]);
  const [selectedArticle, setSelectedArticle] =
    useState<Iarticle>(DEFAULT_ARTICLES);
  const [sortColumn, setSortColumn] = useState<Isort>({
    path: "name",
    order: "asc",
  });

  useEffect(() => {
    setItems(getFoods());
    setArticles([DEFAULT_ARTICLES, ...getCategories()]);
  }, []);

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

  const handleSelect = (page: number) => {
    setSelectedPage(page);
  };

  const handleSelectedArticle = (article: Iarticle) => {
    setSelectedArticle(article);
    setSelectedPage(1);
  };

  const handleSort = (sortColumn: Isort) => {
    setSortColumn({ path: sortColumn.path, order: sortColumn.order });
  };

  const filteredItems = selectedArticle._id
    ? items.filter((i) => i.category._id === selectedArticle._id)
    : items;

  const sortedItems = _.orderBy(
    filteredItems,
    [sortColumn.path],
    [sortColumn.order]
  );

  const allItems: Iitem[] = Paginate(sortedItems, pageSize, selectedPage);

  const { length: count } = filteredItems;

  if (count === 0) return <p>There are no foods in the database</p>;
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-2">
            <ListGroup
              articles={articles}
              selectedArticle={selectedArticle}
              onSelectedArticle={handleSelectedArticle}
            />
          </div>
          <div className="col">
            <p>Showing {count} foods in the database</p>
            <ItemContext.Provider
              value={{
                sortColumn,
                allItems,
                onSort: handleSort,
                onDelete: handleDelete,
                onFavor: handleFavorite,
              }}
            >
              <ItemTable />
            </ItemContext.Provider>
            <Pagination
              pageSize={pageSize}
              selectedPage={selectedPage}
              itemCount={filteredItems.length}
              onSelect={handleSelect}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Items;
