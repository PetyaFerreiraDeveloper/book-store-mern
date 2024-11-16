import { useEffect, useState } from "react"
import BookCard from "../books/BookCard"

const categories = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
]

const TopSellers = () => {
  const [books, setBooks] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre")

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data))
  }, [])

  const filteredBook =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter((book) => book.category === selectedCategory.toLowerCase())
  console.log(filteredBook)

  return (
    <div className="py-10 flex flex-col justify-start gap-5">
      <h2 className="font-semibold text-3xl">Top Sellers</h2>
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border border-red-300 rounded-md px-4 py-2 focus:outline-none bg-gray"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <section className="flex flex-col items-center gap-10 md:grid md:grid-cols-2 xl:grid-cols-3">
        {filteredBook.map((book, index) => (
          <BookCard book={book} key={index} />
        ))}
      </section>
    </div>
  )
}

export default TopSellers
