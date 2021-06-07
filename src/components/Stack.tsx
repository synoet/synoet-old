import React from "react"

const Stack = ({ children, direction }: any) => {
  return (
    <div
      className={`flex mb-2 flex-${direction} space-${
        direction === "col" ? "y" : "x"
      }-2`}
    >
      {children}
    </div>
  )
}

export const HStack = ({ children }: any) => (
  <Stack direction="row">{children}</Stack>
)

export const VStack = ({ children }: any) => (
  <Stack direction="col">{children}</Stack>
)
