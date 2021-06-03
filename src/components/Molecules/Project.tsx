import React from "react"
import { ProjectProps } from "@types"

const Project = ({ title, description, link }: ProjectProps) => {
  return (
    <div className="flex flex-col w-full pt-2 pb-2 space-y-2">
      <div className="flex flex-row space-x-2">
        <p className="text-white">{title}</p>
      </div>
      <p className="text-xs">{description}</p>
    </div>
  )
}

export default Project
