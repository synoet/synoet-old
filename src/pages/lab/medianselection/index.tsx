import React from "react"
import { Layout } from "~/components"

const MedianSelection = () => {
  return (
    <Layout>
      <div className="mb-5 space-y-2">
        <p className="text-xl text-white">
          teonys:<span className="border-none text-accent">lab</span>:
          <span className="border-none text-tertiary">medianselection</span>
        </p>
        <p className="text-md text-white text-secondary">
          Visualization for Median of Median Algorithm
        </p>
      </div>
      <div className="h-full w-full border-2 border-tertiary p-4 flex flex-col justify-center items-center">
        <p className="text-primary text-lg">😔 Under Development</p>
      </div>
    </Layout>
  )
}

export default MedianSelection
