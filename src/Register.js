import {useState} from "react"
import {Link} from "react-router-dom"
import {auth} from "./firebase"


export default function Register(){
    const [email,setEmail] =useState("")
    const [password, setPassword] =useState("")
    const [name,setName] =useState("")

    const handleRegister=(event)=>{
        event.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then(auth=>{
                alert("Registered Successfully")
                 console.log(email)
                 console.log(password)
                 console.log(name)
            })
            .catch(error=>{
                alert(error.message)
                console.log(error)
            })        
        
     }

    return(
        <div className="auth-form">
        <form className="form" onSubmit={handleRegister}>
            <label className="label">Full Name:</label>
            <input
                className="input" 
                type="name"
                value={name}
                placeholder="Your Name"
                onChange={(event)=>setName(event.target.value)}
            />
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
            <button className="button">Register</button>
        </form>
        <Link to="/">
        <button className="btn-link">Already have an account? Login here</button>
        </Link>

        </div>
        
    )
}