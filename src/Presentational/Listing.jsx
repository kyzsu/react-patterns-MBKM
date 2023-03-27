import React from "react"
import { useHover } from "../Hooks/useHover"
import { ThemeContext } from "../Provider/ThemeToggle"

export const Listing = ({ listing }) => {
  const [ref, isHovering] = useHover()

  return (
    <ThemeContext.Consumer>
      {(theme) => {
        return (
          <div ref={ref} className="flex flex-col h-full rounded-md">
            <div>
              <img
                alt={listing.title}
                src={listing.image}
                className="rounded-xl object-cover h-52 w-52"
              />
            </div>
            <div className="m-1">
              <h3 className="font-bold text-xs">{listing.name}</h3>
              <span className="font-light text-xs">
                {listing.city},{listing.state}
              </span>
              <h3 className="font-light text-xs">
                <span className="font-bold">
                  ${new Intl.NumberFormat("en-US").format(listing.price)}
                </span>{" "}
                night
              </h3>
              <span className="font-light text-xs">
                {listing.floors} floor, {listing.rooms} rooms, {listing.sqft}ft
              </span>
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}
