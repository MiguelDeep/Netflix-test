import React from 'react'

interface PropsFooter {
  children:React.ReactNode
}
export default function FooterContactsLinks({children}:PropsFooter) {
  return (
     <div className="grid gap-6">
        {children}
     </div>
  )
}
