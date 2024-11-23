import { IoSearchSharp } from "react-icons/io5"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useState } from "react"

gsap.registerPlugin(useGSAP)

const SearchNavbar = () => {
  const [searchValue, setSearchValue] = useState("")
  const onInputFocus = () => {
    gsap.to(".searchLabel", { y: -35 })
    gsap.to(".searchLabel", { x: -35 })
  }

  const onInputBlur = () => {
    if (searchValue === "") {
      gsap.to(".searchLabel", { y: 0 })
      gsap.to(".searchLabel", { x: 0 })
    }
  }

  return (
    <form className="flex items-center gap-2 relative bg-gray px-2 rounded-xl w-64">
      <button>
        <IoSearchSharp className=" " />
      </button>
      <div className="relative">
        <label htmlFor="search" className="searchLabel absolute top-2">
          What are you looking for?
        </label>
        <input
          name="search"
          id="search"
          type="text"
          value={searchValue}
          className="p-2 bg-gray w-64 rounded-xl"
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </form>
  )
}

export default SearchNavbar
