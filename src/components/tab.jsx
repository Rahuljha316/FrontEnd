import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';




const CreateButtonClick = () =>{
    return (
        <button>Create A New Button</button>
    )

}

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);
//   const [post,setPost] = useState(0)

  const handleAllPostTabClick = () => {
    setValue(0)
    
  }

  const handleCreateANewPostTabClick = () => {
    setValue(1)
   
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