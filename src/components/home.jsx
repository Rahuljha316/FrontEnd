import CenteredTabs from "./tab";
import '../css/home.css'

import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import axios from "axios";
import FadeMenu from "./settingMenu";


const Home = () =>{



    const handlePostClick = async() => {

        const data = await axios.post()

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
            <div><FadeMenu /></div>

            <CenteredTabs />

        </div>
    )
}

export default Home;