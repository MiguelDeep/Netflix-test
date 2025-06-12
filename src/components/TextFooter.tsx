import React, { ComponentProps } from 'react'


interface PropsText extends ComponentProps<"h1"> {
  text:string
}
export default function TextFooter({text,...props}:PropsText) {
  return (
    <h1 {...props} className="text-white p-2 ">
      {text || "vazio" }
    </h1>
  )
}
