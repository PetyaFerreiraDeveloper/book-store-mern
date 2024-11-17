import { Link } from "react-router-dom"
import { getNewsImgUrl } from "../../utils/getImgUrl"
import PropTypes from "prop-types"

const NewsCard = ({ news: { description, image, title } }) => {
  return (
    <article className="flex flex-col-reverse gap-10 md:flex-row md:justify-between md:items-center md:pr-4">
      <div className="p-4 max-w-96">
        <Link to="/news">
          <h3 className="font-semibold mb-4 line-clamp-1 hover:text-blue-500">{title}</h3>
        </Link>
        <div className="mb-6 bg-primary w-12 h-1"></div>
        <p className="text-sm line-clamp-4">{description}</p>
      </div>
      <div className="flex-shrink-0">
        <img
          src={`${getNewsImgUrl(image)}`}
          alt="article highlight image"
          className="w-full object-cover"
        />
      </div>
    </article>
  )
}

NewsCard.propTypes = {
  news: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
}

export default NewsCard
