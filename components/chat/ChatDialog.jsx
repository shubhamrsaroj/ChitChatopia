import { Dialog } from '@mui/material';
import React from 'react'
import{Box} from '@mui/material';

const dialogStyle={
  height:'96%',
  maxWidth:'100%',
  marginTop:'20px',
  width:'100%',
  boxShadow:'none',
  overflow:'hidden',
  borderRadius:0  
}

const ChatDialog = () => {
  return (
    <Dialog open="true"
    
    PaperProps={{sx:dialogStyle}}
    hideBackdrop={true}
    >
     <Box>
      <Box>
        <Box>

        </Box>
      </Box>
     </Box>


    </Dialog>
  )
}

export default ChatDialog;