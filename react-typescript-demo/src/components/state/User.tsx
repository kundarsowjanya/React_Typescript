import { useState } from "react"

type AuthUser={
    name:string,
    email:string
}

export const User = () => {
    const [user,setUser]=useState<null|AuthUser>(null)
    const handleLogin = () => { 
        setUser({
        name:"Sowjanya",
        email:"sowj.com"
    }) 
}
    const handleLogout = () => { setUser(null) }
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User is name is {user?.name} </div>
        <div>User is email is {user?.email} </div>
    </div>
}