import {useState} from "react"
import {Link} from "react-router-dom"
import {auth} from "./firebase"


export default function Login(){
    const [email,setEmail] =useState("")
    const [password, setPassword] =useState("")

    const handleSubmit=(event)=>{
        event.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth=>{
            console.log(email)
            console.log(password)
            alert("Login Successfully")
        })
        .catch(error=>{ 
            alert(error.message)
            console.log(error)
        })

     }

    return(
       
        <div className="auth-form">
        <form className="form" onSubmit={handleSubmit}>
            <label className="label">Email Id:</label>
            <input 
                className="input"
                type="email"
                value={email}
                placeholder="youremailid@gmail.com"
                onChange={(event)=>setEmail(event.target.value)}
            />
            <label className="label">Password:</label>
            <input 
                className="input"
                type="password"
                value={password}
                placeholder="password"
                onChange={(event)=>setPassword(event.target.value)}
            />
            <button className="button">Log In</button>
        </form>
        <Link to="/register">
        <button className="btn-link">Don't have an account? Register Here</button>
        </Link>

        </div>
        
    )
}