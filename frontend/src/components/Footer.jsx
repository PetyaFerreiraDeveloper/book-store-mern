import { Link } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa"
import { FaGoogle } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import footerLogo from "../assets/footer-logo.png"
import Button from "./Button"

const Footer = () => {
  return (
    <footer className="bg-darkBg text-white p-6 xl:px-24 flex flex-col gap-10">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end">
        <nav className="flex flex-col gap-10">
          <div className="w-24">
            <img src={footerLogo} alt="logo showing books" />
          </div>
          <ul className="flex gap-4 items-center">
            <li>
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="">
                Features
              </Link>
            </li>
            <li>
              <Link to="/" className="">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/" className="">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/" className="">
                Team
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col gap-10">
          <p className="flex flex-col">
            <span>
              Subscribe to stay tuned for new product and latest updates.
            </span>
            <span>Let’s do it!</span>
          </p>
          <div className="flex items-stretch ">
            <input
              type="text"
              placeholder="Enter your email address"
              className="px-4 rounded-l-lg"
            />
            <Button title="Subscribe" className={"rounded-none rounded-r-lg"} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 items-end md:flex-row md:justify-between md:items-center">
        <div className="flex gap-10 items-center">
          <Link to="/" className="">
            Privacy Policy
          </Link>
          <Link to="/" className="">
            Terms of Use
          </Link>
        </div>
        <div className="flex gap-10">
          <Link to="/" className="">
            <FaInstagram />
          </Link>
          <Link to="/" className="">
            <FaGoogle />
          </Link>
          <Link to="/" className="">
            <FaFacebookF />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
