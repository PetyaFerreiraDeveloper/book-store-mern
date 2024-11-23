import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useState } from "react"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5"

gsap.registerPlugin(useGSAP)

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Email:", email)
    console.log("Password:", password)
  }

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState)
  }

  const onInputFocus = (e) => {
    if (e.target.name === "password") {
      gsap.to(".passwordLabel", { y: -35 })
      gsap.to(".passwordLabel", { x: -16 })
    }
    if (e.target.name === "email") {
      gsap.to(".emailLabel", { y: -35 })
      gsap.to(".emailLabel", { x: -16 })
    }
  }

  const onInputBlur = () => {
    if (email === "") {
      gsap.to(".emailLabel", { y: 0 })
      gsap.to(".emailLabel", { x: 0 })
    }
    if (password === "") {
      gsap.to(".passwordLabel", { y: 0 })
      gsap.to(".passwordLabel", { x: 0 })
    }
  }

  return (
    <div className="flex flex-col gap-20 justify-center items-center h-full">
      <h1 className="text-xl font-bold">Please Login</h1>
      <form
        className="flex flex-col gap-10 items-start"
        onSubmit={handleSubmit}
      >
        <div className="relative">
          <label htmlFor="email" className="emailLabel absolute top-2 left-4">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            className=" border border-slate-300 shadow-lg rounded-lg px-4 py-2 w-64"
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative">
          <label
            htmlFor="password"
            className="passwordLabel absolute top-2 left-4"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            className="border border-slate-300 shadow-lg rounded-lg px-4 py-2 w-64"
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleTogglePasswordVisibility} className="absolute top-3 right-3">
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </button>
        </div>
        <button className="bg-primary text-darkBg rounded-lg px-4 py-2 hover:bg-darkBg hover:text-primary transition-all duration-200">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
