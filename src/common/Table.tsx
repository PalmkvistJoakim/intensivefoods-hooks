import { Icolumn, Icolumnkey } from "../interface/Icolumn";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

interface Props {
  columns: Icolumn[] | Icolumnkey[];
}

function Table(columns: Props) {
  return (
    <div>
      <table className="table">
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
}

export default Table;
