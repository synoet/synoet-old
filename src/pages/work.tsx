import React from "react"
import { Layout, VStack } from "@components"
import { Title } from "@atoms"
import { Position, Project, Skill } from "@molecules"
import { useScreenType } from "@hooks"

const Work = () => {
  const screenType = useScreenType()
  return (
    <Layout>
      <div className="mb-5 space-y-2">
        <p className="text-xl text-white">
          teonys:<span className="border-none text-accent">work</span>
        </p>
        <p className="text-md text-white text-secondary">
          Everything to do with Design {"&"} Development
        </p>
      </div>
      <div
        className={`grid ${
          screenType === "l" || screenType === "xl" || screenType === "m"
            ? "grid-cols-2"
            : "grid-cols-1"
        } w-full`}
      >
        <div className="flex flex-col w-full">
          <Title>POSITIONS</Title>
          <VStack>
            <Position
              company="EPAM Systems"
              role="Full Stack Developer"
              range="June 2021 - Present"
            />
            <Position
              company="EPAM Systems"
              role="Junior Developer"
              range="Nov 2020 - June 2021"
            />
            <Position
              company="Clarissa AI"
              role="Founder/Developer"
              range="Febuary 2019 - April 2020"
            />
            <Position
              company="Juv Consulting"
              role="Creative Director"
              range="Febuary 2019 - April 2020"
            />
          </VStack>
        </div>
        <div className="flex flex-col w-full">
          <Title>PROJECTS</Title>
          <VStack>
            <Project
              title="Aero"
              description="Flight/Travel Application for Databses Class"
            />
            <Project title="thoughtBox" description="Ethical Forum" />
            <Project
              title="Pluto"
              description="Latex Text Editor, Formula Writer"
            />
            <Project
              title="meddit"
              description="Medical Illness Forum for HACK RICE"
            />
          </VStack>
        </div>
      </div>
      <div
        className={`grid ${
          screenType === "l" || screenType === "xl" || screenType === "m"
            ? "grid-cols-2"
            : "grid-cols-1"
        } w-full mt-5`}
      >
        <div className="flex flex-col w-full">
          <Title>LANGUAGES</Title>
          <VStack>
            <Skill name="Javascript" level="Senior" />
            <Skill name="Node.js" level="Mid" />
            <Skill name="Typescript" level="Mid" />
            <Skill name="HTML/CSS" level="Senior" />
            <Skill name="Python" level="Mid" />
            <Skill name="C++" level="Mid" />
          </VStack>
        </div>
        <div className="flex flex-col w-full">
          <Title>FRAMEWORKS</Title>
          <VStack>
            <Skill name="Node.js" level="Senior" />
            <Skill name="React" level="Senior" />
            <Skill name="Gatsby" level="Mid" />
            <Skill name="Flask" level="Mid" />
            <Skill name="Serverless" level="Senior" />
            <Skill name="Express" level="Mid" />
            <Skill name="Next.js" level="Junior" />
          </VStack>
        </div>
      </div>
      <div
        className={`grid ${
          screenType === "l" || screenType === "xl" || screenType === "m"
            ? "grid-cols-2"
            : "grid-cols-1"
        } w-full mt-5`}
      >
        <div className="flex flex-col w-full">
          <Title>AMAZON WEB SERVICES</Title>
          <VStack>
            <Skill name="Lambda" />
            <Skill name="ElasticBeanStalk" />
            <Skill name="EC2" />
            <Skill name="SQS" />
            <Skill name="DynamoDB" />
            <Skill name="APIGateway" />
            <Skill name="S3" />
          </VStack>
        </div>
        <div className="flex flex-col w-full">
          <Title>CREATIVE TOOLS</Title>
          <VStack>
            <Skill name="Figma" level="Senior" />
            <Skill name="Adobe Photoshop" level="Senior" />
            <Skill name="Adobe Illustrator" level="Mid" />
            <Skill name="Sketch" level="Mid" />
          </VStack>
        </div>
      </div>
    </Layout>
  )
}

export default Work
