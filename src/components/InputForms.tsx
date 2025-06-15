"use client";
import React from "react";

interface Props {
  type: string;
  placeholder: string;
  name?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputForms({
  type,
  placeholder,
  name,
  required,
  value,
  onChange,
}: Props) {
  const [touched, setTouched] = React.useState(false);

  const hasError = touched && value.trim() === "";

  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        onBlur={() => setTouched(true)}
        className={`
          peer w-full px-4 pt-6 pb-2 text-white bg-zinc-800 rounded border 
          ${hasError ? "border-red-600" : "border-zinc-600"}
          focus:outline-none focus:border-2 focus:border-white
        `}
        placeholder=" "
      />
      <label
        className={`
          absolute left-4 top-2 text-zinc-400 text-sm transition-all
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
          peer-placeholder-shown:text-zinc-500
          peer-focus:top-2 peer-focus:text-sm peer-focus:text-white
        `}
      >
        {placeholder}
      </label>

      {hasError && (
        <p className="mt-1 text-red-600 text-sm">
          Please enter a valid {placeholder.toLowerCase()}.
        </p>
      )}
    </div>
  );
}
