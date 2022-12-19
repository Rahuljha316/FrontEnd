import axios from 'axios';
import React,{useState} from 'react'

function RegisterPage (){

    
    const [username,setUsername] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setconfirmPassword] = useState('');

    const handleCreateAccountButtonClick = async() =>{
        const data = await axios.post('http://localhost:4000/profile/',{
            name,username,email, password
        })

    }

    

    return(
        <div>
            <input 
                    className="username" 
                    type="username"  
                    placeholder="Enter username"
                    value={username} 
                    onChange={(event)=> setUsername(event.target.value)} 
                />
            <input 
                    className="name" 
                    type="name"  
                    placeholder="Enter name"
                    value={name} 
                    onChange={(event)=> setName(event.target.value)} 
                />
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

            <button onClick={handleCreateAccountButtonClick}>Create Account</button>

        </div>
    )
}

export default RegisterPage;