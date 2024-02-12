import Link from "next/link";
import GoogleAuth from "./GoogleAuth";
import { useState } from "react";
import UploadImage from "./UploadImage";
import { useForm } from "react-hook-form";
import { RegisterType } from "@/@types/auth";
import Input from "./Input";
import PasswordInput from "./PasswordInput";
import { signupInputs } from "./AuthData";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/store/hooks";
import { baseUrl } from "@/lib/BaseURL";
import axios from "axios";
import { login } from "@/store/features/authSlice";

const SignupContainer = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();
  //react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterType>({
    defaultValues: {
      email: "",
      password: "",
      username: "",
      confirmPassword: "",
    },
  });

  const [fileUpload, setFileUpload] = useState<null | File>(null);

  const onSubmit = async (data: RegisterType) => {
    if (data.confirmPassword !== data.password) {
      toast.error("Password and confirm password does not match");
      return;
    }
    if (!fileUpload) {
      toast.error("Please upload a profile picture");
      return;
    }

    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("profilepic", fileUpload);

    try {
      const { data } = await axios.post(`${baseUrl}/auth/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch(
        login({
          username: data.username,
          email: data.email,
          profilepic: data.profilepic,
        })
      );
      localStorage.setItem("token", JSON.stringify(data));

      reset();
      router.push("/");

      toast.success("Sign up was successful");
    } catch (error: any) {
      console.log(error);
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
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
              <h1 className="text-3xl font-bold">Create Your Account</h1>
            </div>
            <div className="mt-5">
              <UploadImage
                fileUpload={fileUpload}
                setFileUpload={setFileUpload}
              />

              <Input
                register={register}
                registerName="username"
                input={signupInputs[0]}
                error={errors.username}
              />
              <Input
                register={register}
                registerName="email"
                input={signupInputs[1]}
                error={errors.email}
              />
              <PasswordInput
                register={register}
                registerName="password"
                input={signupInputs[2]}
                error={errors.password}
              />
              <PasswordInput
                register={register}
                registerName="confirmPassword"
                input={signupInputs[3]}
                error={errors.confirmPassword}
              />
            </div>

            <GoogleAuth />
            <div className="mt-5">
              <button
                className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="submit"
              >
                Sign up
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <Link
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
                href="/signin"
              >
                or sign in
              </Link>
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupContainer;
