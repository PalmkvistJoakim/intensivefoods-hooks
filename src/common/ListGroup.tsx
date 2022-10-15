import { Iarticle } from "../interface/Iarticle";

interface Props {
  articles: Iarticle[];
  selectedArticle: Iarticle;
  onSelectedArticle: (article: Iarticle) => void;
}

function ListGroup({ articles, selectedArticle, onSelectedArticle }: Props) {
  return (
    <div>
      <ul className="list-group">
        {articles.map((article) => (
          <li
            style={{ cursor: "pointer" }}
            className={
              selectedArticle === article
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onSelectedArticle(article)}
          >
            {article.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
