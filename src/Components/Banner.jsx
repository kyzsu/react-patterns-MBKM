const Banner = ({ theme, children }) => {
  return (
    <div
      className={`${
        theme
          ? "bg-gradient-to-r from-violet-500 to-fuchsia-500"
          : "bg-gradient-to-r from-cyan-500 to-blue-500"
      } h-28  justify-center text-center`}
    >
      {children}
    </div>
  )
}

export default Banner
