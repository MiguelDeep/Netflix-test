import React, { ComponentProps } from "react";


interface PropsButton extends ComponentProps<"button">{
  title?:string
}
export default function Button({title,...props}:PropsButton) {
  return (
    <button
      type="submit"
    {...props}
    >
      {title || ""}
    </button>
  );
}
