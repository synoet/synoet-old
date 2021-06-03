import React from "react"
import { Nav, Footer } from "@components"

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col p-5 w-full min-h-screen bg-background relative space-y-20">
      <div className="flex mt-72 flex-col w-full justify-center items-center h-full ">
        <div className="flex flex-col justify-center items-start space-y-10 w-full max-w-screen-lg h-full">
          <div className="grid grid-cols-5 w-full h-full">
            <div className="col-span-1">
              <Nav />
            </div>
            <div className="col-span-4">
              {children}
              <div className="mt-10">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
