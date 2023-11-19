type nameListProps={
  names:{
    first:string,
    last:string
  }[]
}

export const PersonList=({names}:nameListProps)=>{
    return(
        <div>
         {
           names.map((name)=>{
               return(
                   <h2 key={name.first}>{name.first} {name.last}</h2>
               )
           })
         }
        </div>
    )
}