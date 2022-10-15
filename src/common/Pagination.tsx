import _ from "lodash";

interface Props {
  pageSize: number;
  selectedPage: number;
  itemCount: number;
  onSelect: (page: number) => void;
}

function Pagination({ pageSize, selectedPage, itemCount, onSelect }: Props) {
  const pageCount = Math.ceil(itemCount / pageSize);

  const pages = _.range(1, pageCount + 1);

  if (pageCount === 1) return null;

  return (
    <div>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={selectedPage === page ? "page-item active" : "page-item"}
          >
            <button className="page-link" onClick={() => onSelect(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
