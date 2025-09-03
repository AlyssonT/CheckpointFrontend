import { type ReactNode } from "react";
import { Paper } from "./Paper";
import { Button } from "./Button";
import { useSearchParams } from "react-router";
import { PiGreaterThan, PiLessThan } from "react-icons/pi";

interface PaginatedDataGridProps<T> {
  items: T[];
  renderRow: (item: T) => ReactNode;
  getItemId: (item: T) => string | number;
  title?: string;
  totalItems: number;
  divided?: boolean;
}

export function PaginatedDataGrid<T>({
  items,
  renderRow,
  getItemId,
  title,
  totalItems,
  divided = false,
}: PaginatedDataGridProps<T>) {
  if (items.length === 0) return null;

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
          <div key={getItemId(item)}>
            {renderRow(item)}
            {divided && <div className="w-full h-[1px] bg-secondary" />}
          </div>
        ))}
      </div>
      <div className="flex items-center p-2 gap-4">
        <p>
          Page {page} of {Math.ceil(totalItems / pageSize)}
        </p>
        <Button
          variant="contained"
          className="rounded-lg hover:bg-hover-secondary flex justify-center items-center"
          noFocusRing
          onClick={handlePrevPage}
        >
          <PiLessThan />
        </Button>
        <Button
          variant="contained"
          className="rounded-lg hover:bg-hover-secondary flex justify-center items-center"
          noFocusRing
          onClick={handleNextPage}
        >
          <PiGreaterThan />
        </Button>
      </div>
    </Paper>
  );
}
