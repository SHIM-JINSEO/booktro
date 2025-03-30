import "./App.css";
import Nav from "./Components/nav";
import Focus from "./Components/focus";
import PaginationGroup from "./Components/PaginationGroup";
import Card from "./Components/card";
import { CardProps } from "./Components/card";
const books: CardProps[] = [
  {
    title: "The Great Gatsby",
    description:
      "A novel by F. Scott Fitzgerald, set in the Jazz Age on Long Island.",
    imageUrl: "https://example.com/gatsby.jpg",
    author: "F. Scott Fitzgerald",
    tag: ["Classic", "Fiction", "Literature"],
  },
  {
    title: "To Kill a Mockingbird",
    description:
      "A gripping story of racial injustice and moral growth in the deep South.",
    imageUrl: "https://example.com/mockingbird.jpg",
    author: "Harper Lee",
    tag: ["Classic", "Historical", "Drama"],
  },
  {
    title: "1984",
    description:
      "A dystopian novel by George Orwell that explores the dangers of totalitarianism.",
    imageUrl: "https://example.com/1984.jpg",
    author: "George Orwell",
    tag: ["Dystopian", "Science Fiction", "Political"],
  },
  {
    title: "Pride and Prejudice",
    description:
      "A romantic novel by Jane Austen that critiques the British landed gentry.",
    imageUrl: "https://example.com/prideandprejudice.jpg",
    author: "Jane Austen",
    tag: ["Romance", "Classic", "Social Commentary"],
  },
  {
    title: "The Catcher in the Rye",
    description:
      "A novel by J.D. Salinger about a disillusioned teenager's journey through New York City.",
    imageUrl: "https://example.com/catcherintherye.jpg",
    author: "J.D. Salinger",
    tag: ["Classic", "Young Adult", "Fiction"],
  },
  {
    title: "The Hobbit",
    description:
      "A fantasy novel by J.R.R. Tolkien about the adventures of Bilbo Baggins.",
    imageUrl: "https://example.com/hobbit.jpg",
    author: "J.R.R. Tolkien",
    tag: ["Fantasy", "Adventure", "Classic"],
  },
  {
    title: "The Da Vinci Code",
    description:
      "A mystery thriller by Dan Brown that explores religious symbols and secrets.",
    imageUrl: "https://example.com/davinci.jpg",
    author: "Dan Brown",
    tag: ["Mystery", "Thriller", "Adventure"],
  },
];

function App() {
  return (
    <div className="flex flex-col items-center">
      <Nav />
      <main className="flex flex-col max-w-[1000px]">
        <Focus />
        <div className="flex flex-wrap gap-2">
          {books.map((book) => (
            <Card book={book} />
          ))}
        </div>
      </main>
      <PaginationGroup />
    </div>
  );
}

export default App;
