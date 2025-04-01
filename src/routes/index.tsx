import { createFileRoute } from "@tanstack/react-router";
import books from "../data/books.json";
import Card from "../Components/card";
import Focus from "../Components/focus";
import PaginationGroup from "../Components/PaginationGroup";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Focus />
      <div className="flex flex-wrap gap-2">
        {books.map((book) => (
          <Card book={book} />
        ))}
      </div>
      <PaginationGroup />
    </>
  );
}
