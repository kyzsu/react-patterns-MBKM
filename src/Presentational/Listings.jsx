import React from "react"
import { withStyles } from "../HOC/withStyles"
import { Listing } from "./Listing"
import { ListingsGrid } from "./ListingsGrid"

export default function Listings({ listings }) {
  // const Text = () => <p style={{ fontFamily: "Inter" }}>Hello world!</p>
  const Title = withStyles(() => (
    <p style={{ fontFamily: "Inter" }}>Hello world!</p>
  ))

  return (
    <div>
      <Title />
      <ListingsGrid>
        {listings.listings.map((listing) => (
          <Listing key={listing.id} listing={listing} />
        ))}
      </ListingsGrid>
    </div>
  )
}
