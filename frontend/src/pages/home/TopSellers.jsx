import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "../../App.css"

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

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {filteredBook.length > 0 &&
          filteredBook.map((book) => (
            <SwiperSlide key={book._id}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default TopSellers
