import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  totalPages: number
  currentPage: number
}

export default function Pagination({ totalPages, currentPage }: PaginationProps) {
  // Function to generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = []

    // Always show first page
    pages.push(1)

    // Current page and surrounding pages
    const rangeStart = Math.max(2, currentPage - 1)
    const rangeEnd = Math.min(totalPages - 1, currentPage + 1)

    // Add ellipsis after first page if needed
    if (rangeStart > 2) {
      pages.push("...")
    }

    // Add pages in range
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i)
    }

    // Add ellipsis before last page if needed
    if (rangeEnd < totalPages - 1) {
      pages.push("...")
    }

    // Always show last page if it's not the first page
    if (totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className="flex justify-center items-center my-8 border-t pt-6">
      <div className="flex items-center gap-2">
        <button className="p-2 border rounded-md hover:bg-gray-100">
          <ChevronLeft className="h-4 w-4" />
        </button>

        {pageNumbers.map((page, index) => (
          <button
            key={index}
            className={`h-8 w-8 flex items-center justify-center rounded-md ${
              page === currentPage ? "bg-gray-800 text-white" : "hover:bg-gray-100"
            } ${page === "..." ? "cursor-default" : ""}`}
          >
            {page}
          </button>
        ))}

        <button className="p-2 border rounded-md hover:bg-gray-100">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
