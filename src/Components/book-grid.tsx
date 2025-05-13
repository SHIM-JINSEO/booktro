import BookCard from "./book-card"

// Mock data for books
const books = [
  {
    id: 1,
    image: "/placeholder.svg?height=200&width=150",
    title: "The Hidden Path",
    tags: ["Mystery", "Thriller"],
    author: "Alex Johnson",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=200&width=150",
    title: "Echoes of Tomorrow",
    tags: ["Sci-Fi"],
    author: "Maria Garcia",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=200&width=150",
    title: "The Last Kingdom",
    tags: ["Fantasy", "Adventure"],
    author: "Robert Smith",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=200&width=150",
    title: "Whispers in the Dark",
    tags: ["Horror"],
    author: "Emily Chen",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=200&width=150",
    title: "The Art of Silence",
    tags: ["Drama", "Literary"],
    author: "David Wilson",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=200&width=150",
    title: "Beyond the Horizon",
    tags: ["Adventure"],
    author: "Sarah Adams",
  },
  {
    id: 7,
    image: "/placeholder.svg?height=200&width=150",
    title: "The Forgotten City",
    tags: ["Historical", "Mystery"],
    author: "James Taylor",
  },
  {
    id: 8,
    image: "/placeholder.svg?height=200&width=150",
    title: "Midnight Serenade",
    tags: ["Romance"],
    author: "Lisa Brown",
  },
  {
    id: 9,
    image: "/placeholder.svg?height=200&width=150",
    title: "The Quantum Paradox",
    tags: ["Sci-Fi", "Thriller"],
    author: "Michael Lee",
  },
  {
    id: 10,
    image: "/placeholder.svg?height=200&width=150",
    title: "Shadows of the Past",
    tags: ["Mystery", "Drama"],
    author: "Jennifer White",
  },
  {
    id: 11,
    image: "/placeholder.svg?height=200&width=150",
    title: "The Emerald Forest",
    tags: ["Fantasy", "Adventure"],
    author: "Thomas Green",
  },
  {
    id: 12,
    image: "/placeholder.svg?height=200&width=150",
    title: "Eternal Flames",
    tags: ["Romance", "Fantasy"],
    author: "Olivia Martin",
  },
]

export default function BookGrid() {
  return (
    <div className="my-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} image={book.image} title={book.title} tags={book.tags} author={book.author} />
        ))}
      </div>
    </div>
  )
}
