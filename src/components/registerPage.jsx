import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/registerPage.css'


function RegisterPage (){


    
    const [username,setUsername] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setconfirmPassword] = useState('');

    const navigate = useNavigate()

    const handleCreateAccountButtonClick = async() =>{

        if(password !==confirmPassword) alert('password and confirmpassword are not same')


        const data = await axios.post('http://localhost:4000/profile/',{
            name,username,email, password
        });
        
        navigate('/')

    }

    

    return(
        <div className='container1'>
            <div className='register'>
            <h1>Instagram</h1>
            <h3 id="text">Sign up to see photos and videos from your friends.</h3>
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
            <h6 id="footer">By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</h6>
            <button onClick={handleCreateAccountButtonClick} className="signUpButton">Create Account</button>

            </div>
            

        </div>
    )
}

export default RegisterPage;