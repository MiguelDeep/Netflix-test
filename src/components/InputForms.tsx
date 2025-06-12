import React, { ComponentProps } from "react";


interface PropsInputs extends ComponentProps<'input'>{
  type?:string
}
export default function Inputs({...props}:PropsInputs) {
  return (
    <input
      className="md:p-5 p-6 space-x-8 rounded bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-white"
      {...props}
    />
  );
}
