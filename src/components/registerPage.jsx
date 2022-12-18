import React,{useState} from 'react'

function RegisterPage (){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setconfirmPassword] = useState('');


    return(
        <div>
            <input 
                    className="email" 
                    type="email"  
                    placeholder="Enter email"
                    value={email} 
                    onChange={(event)=> setEmail(event.target.value)} 
                />

                <input 
                    className="password" 
                    type="password"  
                    placeholder="Enter password"
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                    
                />
                
                <input 
                    className="ConfirmPassword" 
                    type="ConfirmPassword"  
                    placeholder="Confirm  Password"
                    value={confirmPassword}
                    onChange={(event)=>setconfirmPassword(event.target.value)}
                    
                />

            <button>Create Account</button>

        </div>
    )
}

export default RegisterPage;