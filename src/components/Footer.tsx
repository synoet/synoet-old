import React from "react"
import { VStack, HStack } from "@components"
import { Title, Link } from "@atoms"
const Footer = () => {
  return (
    <div className="w-4/5 text-sm grid grid-cols-3">
      <VStack>
        <Title>SOCIAL</Title>
        <VStack>
          <Link>Github</Link>
          <Link>LinkedIn</Link>
          <Link>Twitter</Link>
        </VStack>
      </VStack>
      <VStack>
        <Title>CONTACT</Title>
        <VStack>
          <Link>Email</Link>
          <Link>Phone Number</Link>
        </VStack>
      </VStack>
      <VStack>
        <Title>DESCRIPTION</Title>
        <p className="text-white">Built By Teo Nys 2021</p>
      </VStack>
    </div>
  )
}

export default Footer
