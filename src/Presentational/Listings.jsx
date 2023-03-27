import React from "react"
import { withStyles } from "../HOC/withStyles"
import { Listing } from "./Listing"
import { ListingsGrid } from "./ListingsGrid"
import { ThemeContext } from "../Provider/ThemeToggle"

export default function Listings({ listings }) {
  const Text = (props) => (
    <p style={{ fontFamily: "Inter", ...props.style }}>Hello world!</p>
  )
  const Title = withStyles(Text)

  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <div>
          <Title />
          <button onClick={() => setTheme(!theme)}>Change Theme</button>
          <ListingsGrid>
            {listings.listings.map((listing) => (
              <Listing key={listing.id} listing={listing} />
            ))}
          </ListingsGrid>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
