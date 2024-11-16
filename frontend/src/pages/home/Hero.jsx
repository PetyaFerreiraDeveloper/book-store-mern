import bannerImage from "../../assets/banner.png"
import Button from "../../components/Button"

const Hero = () => {
  return (
    <section className="py-10 flex flex-col justify-between items-center md:flex-row-reverse gap-10">
      <div className="w-full md:w-1/2 flex items-center justify-end">
        <img src={bannerImage} alt="cover of book" />
      </div>
      <div className="flex flex-col gap-8 w-full md:w-1/2">
        <h1 className="text-2xl md:text-5xl font-medium">New Releases This Week</h1>
        <p>
          It&apos;s time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week&apos;s new releases offer something
          for everyone.
        </p>
        <Button title="Subscribe" className="w-fit px-14 text-black font-bold" />
      </div>
    </section>
  )
}

export default Hero
