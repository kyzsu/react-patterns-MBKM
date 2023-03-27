import React from "react"
import { Listing } from "./Listing"
import { ListingsGrid } from "./ListingsGrid"

export default function Listings({ listings }) {
  console.log(listings)
  return (
    <div>
      <p>Perumahan baru</p>
      <ListingsGrid>
        {listings.listings.map((listing) => (
          <Listing key={listing.id} listing={listing} />
        ))}
      </ListingsGrid>
    </div>
  )
}
