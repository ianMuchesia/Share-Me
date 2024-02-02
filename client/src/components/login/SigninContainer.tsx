import Link from "next/link"
import GoogleAuth from "./GoogleAuth"
import InputForm from "./InputForm"
import { signinInputs } from "@/lib/AuthData"

const SigninContainer = () => {
  return (
    <div className="gradient-bg-artworks p-10">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    <div
      className="relative px-4 py-10 bg-gray-800 opacity-90 mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
    >
      <div className="max-w-md mx-auto text-white">
        <div className="flex items-center space-x-5 justify-center">
         <h1 className="text-3xl font-bold">Welcome Back</h1>
        </div>
        <div className="mt-5">
            {
                signinInputs.map((input)=>(
                    <InputForm key={input.id} placeholder={input.placeholder} type={input.type} value={input.value} name={input.name} label={input.label}/>
                ))
            }
         
        
        
        </div>
        <div className="text-right mb-4">
          <Link
            className="text-xs font-display font-semibold text-gray-500 hover:text-gray-400 cursor-pointer"
            href="#"
          >
            Forgot Password?
          </Link>
        </div>
       <GoogleAuth/>
        <div className="mt-5">
          <button
            className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            type="submit"
          >
            Log in
          </button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          <Link
            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            href="/signup"
            >or sign up</Link>
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default SigninContainer