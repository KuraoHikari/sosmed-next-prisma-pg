"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,

  required,
  register,
  errors,
}) => {
  return (
    <div className=" relative w-full">
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`
          bg-white 
          border-2
          font-light 
          outline-none
          p-4
          peer 
          pl-4
          pt-6
          rounded-md
          transition
          w-full 

          dark:bg-slate-700
          dark:text-white
          disabled:opacity-70
          disabled:cursor-not-allowed

          ${errors[id] ? "border-rose-500" : "border-slate-400"}
          ${
            errors[id]
              ? "focus:border-rose-500"
              : "focus:border-black dark:focus:border-neutral-400"
          }
        `}
      />
      <label
        className={`
            absolute 
            duration-150 
            left-4
            origin-[0] 
            text-md
            top-5
            transform 
            -translate-y-3 
            z-10 
            
          
            peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0 
            peer-focus:scale-75
            peer-focus:-translate-y-4
            ${errors[id] ? "text-rose-500" : "text-zinc-400"}
          `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
