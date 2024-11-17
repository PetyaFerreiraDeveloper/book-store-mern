import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import { getImgUrl } from "../../utils/getImgUrl"
import { BsCart3 } from "react-icons/bs"
import Button from "../../components/Button"

const BookCard = ({
  book: { coverImage, description, newPrice, oldPrice, title, _id },
}) => {
  return (
    <article className="flex flex-col gap-10 md:gap-0 md:flex-row md:items-end">
      <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
        <Link to={`/books/${_id}`}>
          <img
            src={`${getImgUrl(coverImage)}`}
            alt={title}
            className="object-cover w-full hover:scale-105 transition-all duration-300"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-6 items-start mb-10 px-4">
        <div className="flex flex-col gap-4">
          <Link to={`/books/${_id}`}>
            <h3 className="font-semibold mb-4 line-clamp-1 hover:text-blue-500">{title}</h3>
            <p className="text-sm line-clamp-2 text-slate-600">{description}</p>
          </Link>
          <div className="flex gap-2">
            <span className="py-2 pr-2">{newPrice}</span>
            <span className="py-2 px-1 line-through">{oldPrice}</span>
          </div>
        </div>

        <Button title="Add to cart" icon={<BsCart3 className="w-5 h-5" />} />
      </div>
    </article>
  )
}

BookCard.propTypes = {
  book: PropTypes.shape({
    category: PropTypes.string, 
    coverImage: PropTypes.string,
    description: PropTypes.string,
    newPrice: PropTypes.number,
    oldPrice: PropTypes.number,
    title: PropTypes.string, 
    trending: PropTypes.bool, 
    _id: PropTypes.number.isRequired,
  }),
}

export default BookCard
