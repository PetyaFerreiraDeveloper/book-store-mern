import { getNewsImgUrl } from "../../utils/getImgUrl"

const NewsCard = () => {
  return (
    <article>
      <div>
        <h3>Title</h3>
        <div>yellow line</div>
        <p>description</p>
      </div>
      <div>
        <img src={getNewsImgUrl("news-1.png")} alt="" />
      </div>
    </article>
  )
}

export default NewsCard
