import React from "react"

type BlockProps = {
  title: string
  description: string
}

const Block = ({ title, description }: BlockProps) => {
  return (
    <div className="flex pt-2 pb-2 flex-col space-y-1 rounded-md cursor-pointer hover:opacity-70">
      <p className="text-white text-m">{title}</p>
      <p className="text-xs">{description}</p>
    </div>
  )
}
export default Block
