import { BsCart3 } from "react-icons/bs"
import { HiOutlineMenuAlt1 } from "react-icons/hi"
import { IoSearchSharp } from "react-icons/io5"
import { IoPersonOutline } from "react-icons/io5"
import { IoHeartOutline } from "react-icons/io5"
import { Link } from "react-router-dom"

const Navbar = () => {
  const currentUser = false
  return (
    <header className="flex justify-between xl:justify-start xl:gap-24 items-center px-6 xl:px-24 pt-9 pb-5 w-full">
      <Link className="p-2" to="/">
        <HiOutlineMenuAlt1 className="w-6 h-6" />
      </Link>

      <div className="flex items-center gap-4 relative bg-gray px-4 py-2 rounded-xl">
        <button>
          <IoSearchSharp className=" " />
        </button>
        <input
          type="text"
          placeholder="What are you looking for?"
          className="bg-gray placeholder:text-sm"
        />
      </div>

      <nav className="flex xl:ml-auto gap-8">
        <button className="hidden xl:block">
          <div>
            {currentUser ? (
              <>
              <button>
                <img src="" alt="avatar" />
              </button>
              </>
            ) : (
              <Link to="/login">
                <IoPersonOutline className="w-6 h-6" />
              </Link>
            )}
          </div>
        </button>
        <button className="hidden xl:block">
          <IoHeartOutline className="w-6 h-6" />
        </button>
        <button className="lg:hidden p-2">
          <BsCart3 className="w-6 h-6" />
        </button>
        <div className="hidden lg:block">
          <button className="btn-primary flex items-center gap-5">
            <BsCart3 className="w-6 h-6" />
            <span className="font-semibold">0</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
