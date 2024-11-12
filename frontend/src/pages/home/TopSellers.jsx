import { useEffect, useState } from "react"

const categories = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Non-Fiction",
  "Science",
  "Technology",
]

const TopSellers = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data))
  }, [])

  console.log(books)

  return (
    <div className="py-10 flex flex-col justify-start gap-5">
      <h2 className="font-semibold text-3xl">Top Sellers</h2>
      <div>
        <select name="category" id="category">
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default TopSellers
