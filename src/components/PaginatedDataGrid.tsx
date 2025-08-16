import type { ReactNode } from "react";
import { Paper } from "./Paper";
import { Button } from "./Button";
import { useSearchParams } from "react-router";

interface PaginatedDataGridProps<T> {
  items: T[];
  renderRow: (item: T) => ReactNode;
  getItemId: (item: T) => string | number;
  title?: string;
  totalItems: number;
}

export function PaginatedDataGrid<T>({
  items,
  renderRow,
  getItemId,
  title,
  totalItems,
}: PaginatedDataGridProps<T>) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");
  const pageSize = parseInt(searchParams.get("pageSize") || "10");

  const handleNextPage = () => {
    const newPage = page + 1;
    if (newPage > Math.ceil(totalItems / pageSize)) return;
    updateSearchParams(newPage, pageSize);
  };

  const handlePrevPage = () => {
    const newPage = page - 1;
    if (newPage < 1) return;
    updateSearchParams(newPage, pageSize);
  };

  // const handlePageSizeChange = (newValue: number) => {
  //   updateSearchParams(page, newValue);
  // };

  const updateSearchParams = (page: number, pageSize: number) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("page", String(page));
      newParams.set("pageSize", String(pageSize));
      return newParams;
    });
  };

  return (
    <Paper className="p-2">
      <h2>{title}</h2>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div key={getItemId(item)}>{renderRow(item)}</div>
        ))}
      </div>
      <div className="flex items-center p-2 gap-4">
        <p>
          Página {page} de {Math.ceil(totalItems / pageSize)}
        </p>
        <Button
          variant="contained"
          className="rounded-lg hover:bg-hover-secondary"
          noFocusRing
          onClick={handlePrevPage}
        >
          {"<"}
        </Button>
        <Button
          variant="contained"
          className="rounded-lg hover:bg-hover-secondary"
          noFocusRing
          onClick={handleNextPage}
        >
          {">"}
        </Button>
      </div>
    </Paper>
  );
}
