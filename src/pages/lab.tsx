import React from "react"
import { Layout } from "~/components"
import { Block } from "@molecules"
import { Title } from "@atoms"
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
      <div className="w-full flex flex-col justify-center mt-10 space-y-5">
        <Title>RECENT LAB PROJECTS</Title>
        <div className="grid grid-cols-2 gap-2">
          <Block
            title="File Store"
            description="CRUD for files in database"
            link="/lab/filestore"
          />
          <Block
            title="Median Algorithm"
            description="Median of Medians Visualization"
            link="/lab/medianselection "
          />
        </div>
      </div>
    </Layout>
  )
}

export default Lab
