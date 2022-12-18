import React,{ useState } from 'react'

function Login(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    return(

        <div className="container">
            <div>
                <input 
                    className="email" 
                    type="email"  
                    placeholder="Enter email"
                    value={email} 
                    onChange={(event)=> setEmail(event.target.value)} />
                <input 
                    className="password" 
                    type="password"  
                    placeholder="Enter password"
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                    
                    />
                <button>Login</button>
                <br />
                <p>OR</p>
                <button>SignUp With Google</button>
                <button>register</button>
            </div>

        </div>
    )
}

export default Login;