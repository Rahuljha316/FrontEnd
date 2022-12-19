import axios from 'axios';
import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
            console.log('catch');
            alert('username or password incorrect')
        }
    }
    const registerButtonClick = () =>{
        navigate('/')

    }


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
                <button onClick={handleLoginClick}>Login</button>
                <br />
                <p>OR</p>
                <button>SignUp With Google</button>
                <button onClick={registerButtonClick}>register</button>
            </div>

        </div>
    )
}

export default Login;