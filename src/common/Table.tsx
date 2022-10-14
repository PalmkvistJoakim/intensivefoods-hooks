import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function Table() {
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
