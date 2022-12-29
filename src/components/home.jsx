import CenteredTabs from "./tab";
import '../css/home.css'

import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';


const Home = () =>{

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
            

            <div><SettingsApplicationsIcon/></div>


            
            <CenteredTabs />

        </div>
    )
}

export default Home;