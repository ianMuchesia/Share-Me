import React from "react";

interface InputFormProps {
  placeholder: string;
  type: string;
  value: string;
  name: string;
  label: string;
}

const InputForm = (props: InputFormProps) => {
  if (props.name === "Password" || props.name === "Confirm Password") {
    return (
      <>
        <label
          className="font-semibold text-sm text-gray-400 pb-1 block"
          htmlFor={props.label}
        >
          {props.name}
        </label>
        <input
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
          type={props.type}
          id={props.label}
        />
      </>
    );
  }
  return (
    <>
      <label
        className="font-semibold text-sm text-gray-400 pb-1 block"
        htmlFor={props.label}
      >
        {props.name}
      </label>
      <input
        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
        type={props.label}
        id="login"
      />
    </>
  );
};

export default InputForm;
