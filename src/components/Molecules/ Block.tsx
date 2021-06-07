import React from "react"
import { BlockProps } from "@types"
import { Link } from "gatsby"

const Block = ({ title, description, link }: BlockProps) => {
  return (
    <Link to={link ? link : "/"}>
      <div className="flex pt-2 pb-2 flex-col space-y-1 rounded-md cursor-pointer hover:opacity-70">
        <p className="text-white text-m">{title}</p>
        <p className="text-xs">{description}</p>
      </div>
    </Link>
  )
}
export default Block
