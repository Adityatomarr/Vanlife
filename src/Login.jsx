import React ,{useState} from "react";
import { Link } from "react-router-dom";
import "./login.css"

export default function Login(){
    const [loginData, setLoginData] = useState({email:"" , password: ""})
    console.log(loginData)
    function handleChange(e){
        const {name , value} = e.target
        setLoginData(prevState => ({
            ...prevState,
            [name] : value
        }) )
        
    }
    function handleSubmit(e){
        e.preventDefault();
        // console.log(loginData)
    }

    return(
        <div className="login-container">        
            <div className="login-form">
                <h1>Sign in to your account</h1>
                <form onSubmit={handleSubmit} className="login-form" >
                    <input
                        name="email"
                        type="email"
                        placeholder="Email address"
                        value={loginData.email}
                        onChange={handleChange}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={loginData.password}
                        onChange={handleChange}
                    />
                    <button>Log in</button>
                    <p >Don't have an account? <Link to='signup' >Create one now</Link></p>
                </form>
            </div>
            <img className="login-img" src="src/assets/images/login-page.jpg" />

        </div>
        
    )
}