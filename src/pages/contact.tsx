import React from "react"
import { Layout } from "~/components"

const Contact = () => {
  return (
    <Layout>
      <div className="mb-5 space-y-2">
        <p className="text-xl text-white">
          teonys:<span className="border-none text-accent">contact</span>
        </p>
        <p className="text-md text-white text-secondary">
          I'm always looking for new opportunities and connections. Wether you
          want to collaborate or just want to say Hello, I'll Try my best to get
          back to you!
        </p>
      </div>
      <div className="h-40 flex flex-col justify-center">
        <p className="text-primary text-lg">😔 Under Development</p>
      </div>
    </Layout>
  )
}

export default Contact
