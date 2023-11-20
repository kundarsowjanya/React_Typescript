type StyleProps={
    styles:React.CSSProperties
}
export const Container=({styles}:StyleProps)=>{
    return(
      <div style={styles}>
          Text Content goes here
      </div>
    )
}