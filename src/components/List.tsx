import React from 'react'


interface PropsList {
  title?:string
  children?:React.ReactNode
}
export default function List({title,children}:PropsList) {
  return (
   <li className="px-4 py-2 hover:bg-white/10 cursor-pointer flex items-center gap-4">
    {title || ""}
    {children}
  </li>
  )
}
