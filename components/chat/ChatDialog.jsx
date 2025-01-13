import { Dialog } from '@mui/material';
import React from 'react'
import {Box,styled} from '@mui/material';
import Menu from './menu/Menu';
import EmptyChat from './chat/EmptyChat';


const dialogStyle={
  height:'96%',
  maxWidth:'100%',
  marginTop:'20px',
  width:'100%',
  boxShadow:'none',
  overflow:'hidden',
  borderRadius:0  
}


const Component=styled(Box)`
  display:flex;
 
`;


const LeftComponent=styled(Box)`
 min-width:450px;
  background-color:whitesmoke;
`;


const RightComponent=styled(Box)`
width:73%;
 background-color:whitesmoke;
 min-width:300px;
 height:100%
`;



const ChatDialog = () => {
  return (
    <Dialog open="true"
    
    PaperProps={{sx:dialogStyle}}
    hideBackdrop={true}
    maxWidth={'md'}
    >
     <Component>
      
        <LeftComponent>
         <Menu/>
        </LeftComponent>
          
        <RightComponent>
            <EmptyChat/>
          </RightComponent>
     </Component>


    </Dialog>
  )
}

export default ChatDialog;