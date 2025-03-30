export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  tag: string[];
}

export default function Card({ book }: { book: CardProps }) {
  return (
    <div className="basis-[calc(20%-0.5rem)] flex flex-col border rounded h-[300px]">
      <img
        src={book.imageUrl}
        alt={book.title}
        className="w-full h-[150px] object-cover rounded-t"
      />
      <div className="p-2 flex flex-col justify-between h-full">
        <h3 className="text-lg font-bold">{book.title}</h3>
        <p className="text-sm text-gray-600">{book.description}</p>
        <p className="text-sm text-gray-500">by {book.author}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {book.tag.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
