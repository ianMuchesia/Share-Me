import { LoginType, RegisterType } from "@/@types/auth";
import { FieldError, UseFormRegister } from "react-hook-form";

interface InputProps{
    input?: {
        id: number;
        placeholder: string;
        type: string;
        name: string;
        label: string;
    };
    register: UseFormRegister<RegisterType>;
    error?: FieldError;
    registerName: keyof RegisterType;
    
}
const Input = ({input,register,error,registerName}:InputProps) => {
  return (
    <div className="mb-5">
      <label
        className="font-semibold text-sm text-gray-400 pb-1 block"
        htmlFor={input?.label}
      >
        {input?.name}
      </label>
      <input
        className="border rounded-lg px-3 py-2 mt-1  text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
        type={input?.label}
        {...register(registerName, { required: `${input?.name} is required`})}
        placeholder={input?.placeholder}

        id={input?.label}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  )
}

export default Input