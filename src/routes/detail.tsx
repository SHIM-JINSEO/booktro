import { createFileRoute } from "@tanstack/react-router";

const book = {
  title: "Book Title",
  tags: ["tag1", "tag2"],
  author: "Author Name",
  authorImage: "/placeholder.svg?height=100&width=100",
  authorBio: "Introduction about author",
  coverImage: "/placeholder.svg?height=300&width=200",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
};

export const Route = createFileRoute("/detail")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      {/* Book Title and Tags */}
      <div className="mt-6">
        <h1 className="text-4xl font-bold">
          <span className="text-gray-700">#</span> {book.title}
        </h1>
        <div className="flex gap-2 mt-2">
          {book.tags.map((tag, index) => (
            <span key={index} className="text-sm text-gray-600">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Author Section */}
      <div className="mt-6 border rounded-lg p-4">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <div className="h-16 w-16 rounded-full overflow-hidden border">
              <img
                src={book.authorImage || "/placeholder.svg"}
                alt={book.author}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="font-semibold">{book.author}</h3>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-700">{book.authorBio}</p>
      </div>

      {/* Book Content */}
      <div className="mt-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 w-full md:w-64">
            <div className="border rounded-md overflow-hidden">
              <img
                src={book.coverImage || "/placeholder.svg"}
                alt={book.title}
                className="w-full h-auto"
              />
            </div>
            <div className="text-center mt-2">
              <span className="text-sm">Image About Book</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-gray-700 whitespace-pre-line">
              {book.description}
            </p>
          </div>
        </div>
      </div>

      {/* Additional Book Description */}
      <div className="mt-6">
        <p className="text-gray-700">
          {book.description} {book.description}
        </p>
      </div>

      {/* More Book Description */}
      <div className="mt-6 mb-10">
        <p className="text-gray-700">
          {book.description} {book.description}
        </p>
      </div>
    </div>
  );
}
