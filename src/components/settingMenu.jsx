import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
// import { SettingsApplications } from '@mui/icons-material';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function FadeMenu() {

  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 
  
  const handleLogOutButtonClick = () => {
    localStorage.clear('token');
    
    navigate('/')
  };

  const handleEditClick = async() =>{
    try{
           
        const data = await axios.put('http://localhost:4000/profile/',{
            
        });
        console.log(data);   
        navigate('/home'  )         
    }
    catch(error){
        alert('')
    }
  }

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
            <div><SettingsApplicationsIcon/></div>
       
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleEditClick}>Edit</MenuItem>
        <MenuItem onClick={handleLogOutButtonClick}>Logout</MenuItem>
      </Menu>
    </div>
  );
}