import React from "react"
import { Layout } from "~/components"

const Lab = () => {
  return (
    <Layout>
      <div className="mb-5 space-y-2">
        <p className="text-xl text-white">
          teonys:<span className="border-none text-accent">lab</span>
        </p>
        <p className="text-md text-white text-secondary">
          This is were I put the useless stuff I make
        </p>
      </div>
      <div className="h-40 flex flex-col justify-center">
        <p className="text-primary text-lg">😔 Under Development</p>
      </div>
    </Layout>
  )
}

export default Lab
