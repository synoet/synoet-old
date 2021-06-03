import React from "react"
import { Helmet } from "react-helmet"
import { SEOMetaProps } from "@types"

const SEO = ({ meta: { title, description } }: SEOMetaProps) => {
  return (
    <Helmet
      title={title}
      meta={[{ name: "description", content: description }]}
    />
  )
}

export default SEO
