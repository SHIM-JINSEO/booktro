interface FeaturedBookProps {
  image: string;
  title: string;
  tags: string[];
  author: string;
  description: string;
}

export default function FeaturedBook({
  image,
  title,
  tags,
  author,
  description,
}: FeaturedBookProps) {
  return (
    <div className="my-6 border-b pb-6">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="rounded-md border overflow-hidden h-[200px] w-[150px]">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">{title}</h2>
              <div className="flex gap-1">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 px-2 py-0.5 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-700 font-medium">{author}</p>
            <p className="text-gray-600 mt-2">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
