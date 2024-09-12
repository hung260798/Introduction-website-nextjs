"use client"

import Error500 from "@/components/v2/Page/Error500"

export default function Error({error, reset}) {
  return (
    <div>
      <Error500 />
    </div>
  )
}