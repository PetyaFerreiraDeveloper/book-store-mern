import Hero from "./Hero"
import News from "./News"
import Recommended from "./Recommended"
import TopSellers from "./TopSellers"

const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <TopSellers />
      <Recommended />
      <News />
    </div>
  )
}

export default Home
