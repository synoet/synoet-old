import * as React from "react"
import { Layout, VStack } from "@components"
import { Title } from "@atoms"
import { Block } from "@molecules"

const IndexPage = () => {
  return (
    <Layout>
      <div className="mb-10 space-y-2">
        <p className="text-xl text-white">
          Hello, I'm Teo Nys{" "}
          <span className="border-none text-accent">(Фёдор Ныс)</span>
        </p>
        <p className="text-lg text-white text-secondary">
          Computer Science Student <span>@NYU</span> {`&`} Full Stack Software
          Engineer <span>@EPAM</span>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 w-4/5">
        <div className="flex flex-col w-full h-full space-y-10">
          <div>
            <Title>CURRENT EMPLOYMENT</Title>
            <p className="text-lg text-white mt-3"> EPAM Systems</p>
          </div>
          <VStack>
            <Title>LATEST BLOG POSTS</Title>
            <VStack>
              <Block
                title="Websocket with APIGateway"
                description="Websocket connection with AWS APIGateway"
              />
              <Block title="Hello World" description="Mandatory Test Post" />
              <Block
                title="Websocket with APIGateway"
                description="Websocket connection with AWS APIGateway"
              />
              <Block title="Hello World" description="Mandatory Test Post" />
            </VStack>
          </VStack>
        </div>
        <div className="flex flex-col w-full h-full space-y-10">
          <div>
            <Title>CURRENT LOCATION</Title>
            <p className="text-lg text-white mt-3"> New York City</p>
          </div>
          <VStack>
            <Title>LATEST LAB PROJECTS</Title>
            <VStack z>
              <Block
                title="Deterministic Selection"
                description="Algorithm Visualization"
              />
              <Block
                title="Corona Virus World Graph"
                description="Graphing of case Distribution"
              />
              <Block
                title="Profile Pic Generator"
                description="Algorithm Visualization"
              />
              <Block title="Adder" description="Graphing of" />
            </VStack>
          </VStack>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
