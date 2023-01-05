import CenteredTabs from "./tab";
import '../css/home.css'
import axios from "axios";
import FadeMenu from "./settingMenu";
import UserDetails from "./userDetail";
import userDetails from "./userDetail";
import { useEffect,useState } from "react";




const Home = () =>{

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    useEffect(()=>{
        const user = userDetails();
        setUsername(user.username)
        setEmail(user.email);

    },[]);

      
    const handlePostClick = () => {
     
       
     
    }

    const handleFollowersClick = () => {

    }

    const handleFollowingClick = () => {
    
    }


    
    return(
        <div className="Post">
            <div className="header">
                <div onClick={handlePostClick} >posts</div>
                <div onClick={handleFollowingClick} >following</div>
                <div onClick={handleFollowersClick} >followers</div>

            </div>
            {/* <div>{username}</div> */}
            <div>{username}<FadeMenu /></div>

            <CenteredTabs />

        </div>
    )
}

export default Home;