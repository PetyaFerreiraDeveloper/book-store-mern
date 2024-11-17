import { useState, useEffect } from "react"
import { Pagination, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import NewsCard from "../books/NewsCard"

const News = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data))
  }, [])

  console.log(news)

  return (
    <section>
      <h2 className="font-semibold text-3xl mb-5">News</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {news.length > 0 &&
          news.map((currentArticle) => (
            <SwiperSlide key={currentArticle.id}>
              <NewsCard news={currentArticle} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  )
}

export default News
