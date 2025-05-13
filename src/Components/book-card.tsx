interface BookCardProps {
  image: string
  title: string
  tags: string[]
  author: string
}

export default function BookCard({ image, title, tags, author }: BookCardProps) {
  return (
    <div className="flex flex-col border rounded-lg overflow-hidden h-full">
      <div className="relative h-[200px] w-full">
        <img src={image || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-3 flex flex-col gap-1">
        <div className="flex items-start justify-between">
          <h3 className="font-medium text-sm line-clamp-1">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
        <p className="text-xs text-gray-600">{author}</p>
      </div>
    </div>
  )
}
