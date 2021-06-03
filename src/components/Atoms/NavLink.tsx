import { Link as GatsbyLink } from "gatsby"
import tw from "twin.macro"

const Link = tw(
  GatsbyLink
)`h-5 text-sm text-secondary hover:text-accent hover:border-b-2 hover:border-accent cursor-pointer`

export default Link
