import { RegisterType } from '@/@types/auth';
import React from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form';


interface PasswordInputProps {
    input: {
        id: number;
        placeholder: string;
        type: string;
        name: string;
        label: string;
    };
    register: UseFormRegister<RegisterType>;
    error?: FieldError;
    registerName:keyof RegisterType;
}

const PasswordInput = ({input,register,error,registerName}:PasswordInputProps) => {
    if (input.name === "Password" || input.name === "Confirm Password") {
        return (
          <>
            <label
              className="font-semibold text-sm text-gray-400 pb-1 block"
              htmlFor={input.label}
            >
              {input.name}
            </label>
            <input
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
              type={input.type}
              id={input.label}
              {...register(registerName, { required: `${input?.name} is required` })}
    
            />
            {error && <p className="text-red-500 text-sm">{error.message}</p>}
    
          </>
        );
    }

    return null
}

export default PasswordInput