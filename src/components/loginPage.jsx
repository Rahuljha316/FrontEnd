import axios from 'axios';
import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/loginPage.css'

function Login(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate()

    const handleLoginClick = async()=>{

        
        try{
           
            const data = await axios.post('http://localhost:4000/profile/signIn',{
                email,password
            });
            console.log(data);   
            navigate('/home')         
        }
        catch(error){
            alert('username or password incorrect')
        }
    }
    const registerButtonClick = () =>{
        navigate('/Register')

    }


    return(

        <div className="container">
            <div className='container1'>
            <h1>Instagram</h1>
                <input 
                    className="email" 
                    id="email"
                    type="email"  
                    placeholder="Enter email or username"
                    value={email} 
                    onChange={(event)=> setEmail(event.target.value)} />
                <br />
                <input 
                    className="password" 
                    id="password"
                    type="password"  
                    placeholder="Enter password"
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                    
                    />
                <br />
                <button className='loginButton' onClick={handleLoginClick}>Login</button>
                <br />
                <p>OR</p>
                <button id="signUp">SignUp With Google</button>


            </div>
               
                <br />

                <div className='container2'>Don't have an account?<button className='registerButton' onClick={registerButtonClick}>Register</button>
                </div>
                
            

        </div>
    )
}

export default Login;