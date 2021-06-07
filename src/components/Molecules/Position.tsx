import React from "react"
import { PositionProps } from "@types"

const Position = ({ company, role, range }: PositionProps) => {
  return (
    <div className="flex flex-col w-full pt-2 pb-2 space-y-2">
      <p className="text-white">
        {role} <span className="border-none text-secondary">{company}</span>
      </p>
      <p className="text-xs">{range}</p>
    </div>
  )
}

export default Position
