import React from "react"
import { Listing } from "./Listing"
import { ListingsGrid } from "./ListingsGrid"

export default function Listings({ listings }) {
  console.log(listings)
  return (
    <ListingsGrid>
      <p>Perumahan baru</p>
      {listings.listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  )
}
