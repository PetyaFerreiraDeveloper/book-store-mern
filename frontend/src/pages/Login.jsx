import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useState } from "react"
import { IoEyeOffOutline, IoEyeOutline, IoLogoGoogle } from "react-icons/io5"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

gsap.registerPlugin(useGSAP)

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" })

  const onSubmit = (data) => {
    console.log("data:", data)
    console.log("errors:", errors)
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

  const onInputBlur = (e) => {
    const inputName = e.target.name

    if (inputName === "email") {
      gsap.to(".emailLabel", { y: 0, x: 0 })
    }
    if (inputName === "password") {
      gsap.to(".passwordLabel", { y: 0, x: 0 })
    }
    console.log("errors:", errors)
  }

  const handleGoogleSignIn = () => {}

  return (
    <div className="flex flex-col gap-20 justify-center items-center h-full">
      <h1 className="text-xl font-bold">Please Login</h1>
      <form
        className="flex flex-col gap-10 items-start md:p-10 rounded-lg md:shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative w-full">
          <label htmlFor="email" className="emailLabel absolute top-2 left-4">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className=" border border-slate-300 shadow-lg rounded-lg px-4 py-2 w-full"
            onFocus={onInputFocus}
            {...register("email", {
              required: "Email is required",
              onBlur: (e) => onInputBlur(e),
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="relative w-full">
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
            className="border border-slate-300 shadow-lg rounded-lg px-4 py-2 w-full"
            onFocus={onInputFocus}
            {...register("password", {
              required: "Password is required",
              onBlur: (e) => onInputBlur(e),
            })}
          />
          <button
            onClick={handleTogglePasswordVisibility}
            className="absolute top-3 right-3"
          >
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </button>

          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          className={`bg-primary text-darkBg rounded-lg px-4 py-2 hover:bg-darkBg hover:text-primary transition-all duration-200 `}
        >
          Login
        </button>
      </form>
      <p className="">
        <span className="mr-1">Don&apos;t have an account? Please</span>
        <span className="text-blue-700">
          <Link to="/register">Register Here</Link>
        </span>
      </p>
      <button
        className="flex gap-4 items-center w-full justify-center bg-googleBlue text-white py-2 rounded-lg"
        onClick={handleGoogleSignIn}
      >
        <IoLogoGoogle />
        <span>Sign in with Google</span>
      </button>
    </div>
  )
}

export default Login
