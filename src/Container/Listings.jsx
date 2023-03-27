import React, { useEffect, useState } from "react"
import axios from "axios"
import Loading from "./Loading"
import Listings from "../Presentational/Listings"

const ListingsContainer = () => {
  const [listings, setListings] = useState([])

  useEffect(() => {
    getListings()
  }, [])

  async function getListings() {
    try {
      const res = await axios.get(
        "https://house-lydiahallie.vercel.app/api/listings"
      )
      setListings(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  if (listings.length < 1) return <Loading />
  return <Listings listings={listings} />
}

export default ListingsContainer
