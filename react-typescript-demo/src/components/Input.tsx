import React from "react"

type InputProps={
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void,
    value:string
}

export const  Input=({handleChange,value}:InputProps)=>{
   return(
       <input type="text" value={value} onChange={handleChange}/>
   )
}