import React ,{useState} from "react";
import { Link,useLoaderData,Form, redirect,useActionData } from "react-router-dom";
import "./login.css"
import { loginUser } from "./api";

export function loader({request}){
    return new URL(request.url).searchParams.get("message")
}

export async function action({request}){
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try{
        const data = await loginUser({email,password})
        localStorage.setItem("loggedin",true)
        const response = redirect("/host")
        response.body = true
        return response
    }
    catch(err){
        return err.message
    }
}

export default function Login(){
    const message = useLoaderData()
    const errorMessage = useActionData()
    
    // function handleSubmit(e){
    //     e.preventDefault();
    //     // console.log(loginData)
    // }

    return(
        <div className="login-container">        
            <div className="login-form">
                <h1>Sign in to your account</h1>
                {message && <h3 className="alert-message">{message}</h3>}
                {errorMessage && <h3 className="alert-message">{errorMessage}</h3>}
                <Form method="post" className="login-form" replace >
                    <input
                        name="email"
                        type="email"
                        placeholder="Email address"
                        // value={loginData.email}
                        // onChange={handleChange}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        // value={loginData.password}
                        // onChange={handleChange}
                    />
                    <button>Log in</button>
                    <p >Don't have an account? <Link to='signup' >Create one now</Link></p>
                </Form>
            </div>
            <img className="login-img" src="src/assets/images/login-page.jpg" />

        </div>
        
    )
}