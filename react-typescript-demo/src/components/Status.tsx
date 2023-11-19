import { stat } from "fs";
import { Heading } from "./Heading";

type statusProps={
    status:'loading' | 'error' | 'success'
}
export const  Status=({status}:statusProps)=>{
    let message;
    if(status==="loading"){
        message="Loading..."
    }else if(status==="success"){
        message="Data fetched sucessfully"
    }else if(status==="error"){
        message="Error fetching Data"
    }
  return(
      <div>
          <h2>Status - {message}</h2>
        
      </div>
  )
}