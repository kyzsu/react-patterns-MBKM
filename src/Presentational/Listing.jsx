import React from "react"
import { useHover } from "../Hooks/useHover"
import { ThemeContext } from "../Provider/ThemeToggle"

export const Listing = ({ listing, theme }) => {
  const [ref, isHovering] = useHover()

  return (
    <div
      ref={ref}
      className={`${theme ? "" : "bg-black"} flex flex-col h-full rounded-xl`}
    >
      <div>
        <img
          alt={listing.title}
          src={listing.image}
          className="rounded-xl object-cover h-52 w-52"
        />
      </div>
      <div className="m-1">
        <h3
          className={`${theme ? "text-black" : "text-white"} font-bold text-xs`}
        >
          {listing.name}
        </h3>
        <span
          className={`${
            theme ? "text-black" : "text-white"
          } font-light text-xs`}
        >
          {listing.city},{listing.state}
        </span>
        <h3
          className={`${
            theme ? "text-black" : "text-white"
          } font-light text-xs`}
        >
          <span className={`${theme ? "text-black" : "text-white"} font-bold`}>
            ${new Intl.NumberFormat("en-US").format(listing.price)}
          </span>{" "}
          night
        </h3>
        <span
          className={`${
            theme ? "text-black" : "text-white"
          } font-light text-xs`}
        >
          {listing.floors} floor, {listing.rooms} rooms, {listing.sqft}ft
        </span>
      </div>
    </div>
  )
}
