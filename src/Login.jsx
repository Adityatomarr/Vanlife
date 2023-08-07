import React ,{useState} from "react";

export default function Login(){
    const [loginData, setLoginData] = useState({email:"" , password: ""})
    
    function handleChange(e){
        const {name , value} = e.target
        setLoginData(prevState => ({
            ...prevState,
            [name] : value
        }) )
        console.log(loginData)
    }
    function handleSubmit(e){
        e.preventDefault();
        // console.log(loginData)
    }

    return(
        <div className="login-container">
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
            </form>

        </div>
        
    )
}