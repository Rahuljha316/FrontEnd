import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import axios from 'axios';
import { Button } from '@mui/material';


const CreateButtonClick = () =>{

    const [selectedFile, setSelectedFile]= useState(null);

    const handleFileChange = (event) =>{
      setSelectedFile(event.target.selectedFile[0])
    }
    
    const handleCreatePostClick = async() => {
      let formData = new FormData();
      formData.append('selectedFile', selectedFile)
      const token = localStorage.getItem('token')

      console.log(token);


      try{
        const response = await axios.post('http://localhost:4000/post/',{formData,
          headers:{
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization':`Bearer ${token}`,
          }
        
      });
      

      }
      catch(error){
        console.log(error);

      }
      

    };
    return (
        // <button>Create A New Post</button>
        <div>  
          <input
              style={{ display: "none" }}
              id="contained-button-file"
              type="file" onChange={handleFileChange}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span" onClick={handleCreatePostClick}>
                Create a New Post
              </Button>
          </label>
          </div>
    )

};

export default function CenteredTabs() {

  const [value, setValue] = React.useState(0);

  const handleAllPostTabClick = () => {
    setValue(0)
    
  }

  const handleCreateANewPostTabClick = async() => {
    setValue(1)

    const post = await axios.post('http://localhost:4000/post/',{
      
    })
   
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="All Post"  onClick={handleAllPostTabClick} />
        <Tab label="Create New Post"  onClick={handleCreateANewPostTabClick} />
        
      </Tabs>
      {value ===1 && <CreateButtonClick />}
    </Box>
  );
}