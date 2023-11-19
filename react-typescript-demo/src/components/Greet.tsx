type GreetProps={
    name:string,
    messageCount:number,
    isLoggedIn:boolean
}
export const Greet=({name,messageCount,isLoggedIn}:GreetProps)=>{
    return(
        <>
        <h2>{isLoggedIn? `Welcome ${name} ! you have ${messageCount} unread messages`:"Welcome Guest"}</h2>
        </>
    )
}