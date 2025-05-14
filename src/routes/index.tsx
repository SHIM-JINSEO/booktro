import { createFileRoute } from "@tanstack/react-router";
import FeaturedBook from "../Components/featured-book";
import BookGrid from "../Components/book-grid";
import Pagination from "../Components/pagination";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      {/* Featured Book */}
      <FeaturedBook
        image="/placeholder.svg?height=200&width=150"
        title="The Great Adventure"
        tags={["Fiction", "Adventure"]}
        author="Jane Doe"
        description="A thrilling journey through uncharted territories, where danger lurks at every corner and friendship is tested to its limits."
      />

      {/* Book Grid */}
      <BookGrid />

      {/* Pagination */}
      <Pagination totalPages={210} currentPage={1} />
    </div>
  );
}
