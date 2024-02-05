import Link from "next/link";
import GoogleAuth from "./GoogleAuth";
import { useState } from "react";
import UploadImage from "./UploadImage";
import { useForm } from "react-hook-form";
import { RegisterType } from "@/@types/auth";
import Input from "./Input";
import PasswordInput from "./PasswordInput";
import { signupInputs } from "./AuthData";
import { useRegisterMutation } from "@/store/services/authApi";
import { toast } from "react-toastify";

const SignupContainer = () => {
  //react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    defaultValues: {
      email: "",
      password: "",
      username: "",
      profilepic: "",
    },
  });

  const [handleRegister,{isLoading,error}] = useRegisterMutation()

  const [imgBase64, setImgBase64] = useState<null | string>(null);
  const [fileUrl, setFileUrl] = useState("");

  const changeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
        if (readerEvent.target?.result) {
          setImgBase64(readerEvent.target.result.toString());
          const fileUrl = URL.createObjectURL(file);
          setFileUrl(fileUrl);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async(data: RegisterType) => {
    
    try {

      const res = await handleRegister(data).unwrap()
      console.log(res)
      
    } catch (error) {
      console.log(error)
      toast.error("An error occurred")
      
    }
  };

  return (
    <div className="gradient-bg-artworks p-10">
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
              <UploadImage changeImage={changeImage} imgBase64={imgBase64} />

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
