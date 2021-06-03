import React from "react"
import { Layout } from "@components"
import { Title } from "@atoms"

const About = () => {
  return (
    <Layout>
      <div className="mb-5 space-y-2">
        <p className="text-xl text-white">
          teonys:<span className="border-none text-accent">about</span>
        </p>
        <p className="text-md text-white text-secondary">
          Who am I? What do I do?
        </p>
      </div>
      <div className="flex flex-col w-full space-y-10">
        <div>
          <Title>BIO</Title>
          <p>Hello there, I'm Teo, a senior studying Computer Science at NYU</p>
        </div>
        <div>
          <Title>EDUCATION/PASSION</Title>
          <p>
            I have a passion for building beautiful and impactful apps {`&`}{" "}
            websites.
          </p>
        </div>
        <div>
          <Title>HOBBIES</Title>
          <p>
            When I'm not working I love to go on walks, water my plants, and
            play with my dog <span>Korra</span>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
