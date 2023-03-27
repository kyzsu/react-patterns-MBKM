import React, { useEffect, useState } from "react"
import axios from "axios"
import Loading from "./Loading"
import Listings from "../Presentational/Listings"

const ListingsContainer = () => {
  const [listings, setListings] = useState([])
  const [loading, setLoading] = useState(false)

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

  if (loading) return <Loading />
  return <Listings listings={listings} />
}

export default ListingsContainer
