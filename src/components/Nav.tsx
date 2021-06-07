import React from "react"
import { Name, NavLink } from "@atoms"
const Nav = () => {
  let path: string = '/'
  if (typeof window !== `undefined`){
    path =  window ? window.location.pathname : '/'
  }

  
  return (
    <div className="fixed flex flex-col text-white justify-between space-y-4">
      <Name />
      <div className="flex flex-col items-end space-y-2 w-full">
        <NavLink to="/work">
          <span className={path !== "/work" ? "border-none" : ""}>work</span>
        </NavLink>
        <NavLink to="/lab">
          <span className={path !== "/lab" ? "border-none" : ""}>lab</span>
        </NavLink>
        <NavLink to="/blog">
          <span className={path !== "/blog" ? "border-none" : ""}>blog</span>
        </NavLink>
        <NavLink to="/about">
          <span className={path !== "/about" ? "border-none" : ""}>about</span>
        </NavLink>
        <NavLink to="/contact">
          <span className={path !== "/contact" ? "border-none" : ""}>
            contact
          </span>
        </NavLink>
      </div>
    </div>
  )
}

export default Nav
