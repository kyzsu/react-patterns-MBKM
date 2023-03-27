export function withStyles(Component) {
  return (props) => {
    const style = {
      color: "red",
      fontSize: "36",
      // Merge props
      ...props.style,
    }

    return <Component {...props} style={style} />
  }
}