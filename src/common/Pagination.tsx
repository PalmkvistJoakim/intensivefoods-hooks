interface Props {
  pageSize: number;
  selectedPage: number;
  itemCount: number;
}

function Pagination({ pageSize, selectedPage, itemCount }: Props) {
const pageCount = itemCount / pageSize



  return (
    <div>
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link">1</button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
