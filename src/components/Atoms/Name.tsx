import React from "react"
import { Link } from "gatsby"

const Name = () => (
  <Link to="/">
    <h1 className="hover:opacity-80">
      <span className="border-none text-accent "> {"<"}</span>teo nys
      <span className="border-none text-accent">{"/>"}</span>
    </h1>
  </Link>
)

export default Name
