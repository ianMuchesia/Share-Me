import Link from "next/link";
import GoogleAuth from "./GoogleAuth";
import { useForm } from "react-hook-form";
import { LoginType, RegisterType } from "@/@types/auth";
import { useLoginMutation } from "@/store/services/authApi";
import { toast } from "react-toastify";
import Input from "./Input";
import { signinInputs } from "./AuthData";
import PasswordInput from "./PasswordInput";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/store/hooks";
import { login } from "@/store/features/authSlice";

const SigninContainer = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //this is to handle the login mutation
  const [handleLogin, { isLoading, error }] = useLoginMutation();

  //this is to redirect the user to the page they were trying to access before they were redirected to the login page
  const redirect = Array.isArray(router.query.redirect)
    ? router.query.redirect[0]
    : router.query.redirect;

  const onSubmit = async (data: LoginType) => {
    try {
      const res = await handleLogin(data).unwrap();

      dispatch(
        login({
          username: res.username,
          email: res.email,
          profilepic: res.profilepic,
        })
      );
      localStorage.setItem("token", JSON.stringify(res));

      toast.success("Sign in was successful");
      router.push(redirect || "/");
    } catch (error: any) {
      if (error?.data?.message) {
        toast.error(error?.data?.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="gradient-bg-artworks md:p-10">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative px-4 py-10 bg-gray-800 opacity-90 mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
        >
          <div className="max-w-md mx-auto text-white">
            <div className="flex items-center space-x-5 justify-center">
              <h1 className="text-3xl font-bold">Welcome Back</h1>
            </div>
            <div className="mt-5">
              <Input
                register={register}
                registerName="email"
                input={signinInputs[0]}
                error={errors.email}
              />
              <PasswordInput
                register={register}
                registerName="password"
                input={signinInputs[1]}
                error={errors.password}
              />
            </div>
            <div className="text-right mb-4">
              <Link
                className="text-xs font-display font-semibold text-gray-500 hover:text-gray-400 cursor-pointer"
                href="#"
              >
                Forgot Password?
              </Link>
            </div>
            <GoogleAuth />
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
              >
                or sign up
              </Link>
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninContainer;
