import React, { ComponentProps } from 'react'




interface PropsContainerCards extends ComponentProps<"div"> {
  children:React.ReactNode
}


export default function ContainerCards({children, ...props}:PropsContainerCards) {
  return (
     <div {...props} className="flex gap-3 m-4 ">
      {children}
    </div>
  )
}
