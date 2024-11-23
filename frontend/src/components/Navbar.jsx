import { useState } from "react"
import { Link } from "react-router-dom"

import { BsCart3 } from "react-icons/bs"
import { HiOutlineMenuAlt1 } from "react-icons/hi"
import { IoPersonOutline } from "react-icons/io5"
import { IoHeartOutline } from "react-icons/io5"

import avatarImg from "../assets/avatar.png"
import Button from "./Button"
import SearchNavbar from "./SearchNavbar"

const navigation = [
  { name: "Dahsboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Checkout", href: "/checkout" },
]

const Navbar = () => {
  const [isDropdpwnOpen, setIsDropdownOpen] = useState(false)

  const currentUser = false

  return (
    <header className="flex justify-between xl:justify-start xl:gap-24 items-center px-6 xl:px-24 pt-9 pb-5 w-full">
      <Link className="p-2" to="/">
        <HiOutlineMenuAlt1 className="w-6 h-6" />
      </Link>

      <SearchNavbar />

      <nav className="flex items-center lg:ml-auto gap-8">
        <div className="hidden lg:block relative">
          {currentUser ? (
            <>
              <button
                className="flex justify-center items-center"
                onClick={() => setIsDropdownOpen(!isDropdpwnOpen)}
              >
                <img
                  src={avatarImg}
                  alt="avatar"
                  className="w-7 h-7 ring-2 rounded-full bg-blue-500"
                />
              </button>
              {isDropdpwnOpen && (
                <div className="absolute right-0 bg-white shadow-lg rounded-md w-48 mt-2 py-4 z-40">
                  <ul className="py-2">
                    {navigation.map((nav) => (
                      <li
                        key={nav.name}
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <Link
                          to={nav.href}
                          className=" block py-2 px-4 hover:bg-slate-300"
                        >
                          {nav.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <Link to="/login">
              <IoPersonOutline className="w-6 h-6" />
            </Link>
          )}
        </div>
        <button className="hidden lg:block">
          <IoHeartOutline className="w-6 h-6" />
        </button>
        <Link to="/cart" className="lg:hidden p-2">
          <BsCart3 className="w-6 h-6" />
        </Link>
        <div className="hidden lg:block">
          <Button title={"0"} icon={<BsCart3 className="w-6 h-6" />} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
