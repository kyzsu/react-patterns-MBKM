export function withStyles(Component) {
  return (props) => {
    const style = {
      color: "white",
      fontSize: "36px",
      // Merge props
      ...props.style,
    }

    return <Component {...props} style={style} />
  }
}
