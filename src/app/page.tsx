import { Search } from "lucide-react";
import BookGrid from "../Components/book-grid";
import FeaturedBook from "../Components/featured-book";
import Pagination from "../Components/pagination";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4">
        {/* Header */}
        <header className="flex items-center justify-between border-b pb-4">
          <h1 className="text-2xl font-bold underline">Booktro</h1>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search books..."
                className="rounded-md border pl-8 pr-4 py-2 w-[200px] focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <button className="ml-2">
              <div className="flex flex-col gap-1">
                <div className="h-0.5 w-6 bg-black"></div>
                <div className="h-0.5 w-6 bg-black"></div>
                <div className="h-0.5 w-6 bg-black"></div>
              </div>
            </button>
          </div>
        </header>

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
    </main>
  );
}
