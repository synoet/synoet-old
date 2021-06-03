import React from "react"
import { SkillProps } from "@types"

const Skill = ({ name, level }: SkillProps) => {
  return (
    <div className="flex items-center flex-row w-full space-x-2 mt-5">
      <p className="text-primary text-sm">{name}</p>
      {level && <p>/</p>}
      {level && <p className="text-sm text-secondary">{level}</p>}
    </div>
  )
}

export default Skill
