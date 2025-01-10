import React from 'react'
import { Dialog ,Box} from '@mui/material';


const dialogStyle={
    height:'96%',
    maxWidth:'60%',
    marginTop:'12%',
    width:'60%',
    boxShadow:'none'
}

const LoginDialog = () => {
    return (    
     <Dialog open={true}
      PaperProps={{sx:dialogStyle}}
     >
        <Box>
           <Box>

           </Box>
           <Box>
            
           </Box>
        </Box>

        
          Hello
     </Dialog>
     

);
};



export default LoginDialog;

