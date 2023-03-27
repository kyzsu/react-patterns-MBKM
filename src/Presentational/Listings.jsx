import React from "react"
import { withStyles } from "../HOC/withStyles"
import { Listing } from "./Listing"
// import { ListingsGrid } from "./ListingsGrid"
import { ThemeContext } from "../Provider/ThemeToggle"
import SearchBar from "../Components/SearchBar"
import Banner from "../Components/Banner"
import SwitchTheme from "../Components/SwitchTheme"

export default function Listings({ listings }) {
  const Text = (props) => (
    <p style={{ fontFamily: "Inter", ...props.style }}>Hello world!</p>
  )
  const Title = withStyles(Text)

  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <div className="max-w-7xl">
          <Banner theme={theme}>
            <Title />
          </Banner>
          <div className="-mt-5 mx-auto flex justify-center">
            <SearchBar />
          </div>
          <SwitchTheme theme={theme} setTheme={setTheme} />
          {/* <ListingsGrid> */}
          <div className="flex flex-row gap-x-4 m-4">
            {listings.listings.map((listing) => (
              <Listing key={listing.id} listing={listing} theme={theme} />
            ))}
          </div>
          {/* </ListingsGrid> */}
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
