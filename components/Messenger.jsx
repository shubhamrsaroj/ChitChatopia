import React, { useState } from 'react';
import{AppBar,Toolbar,styled,Box,Typography} from '@mui/material';
import LoginDialog from './accounts/LoginDialog';
import ChatDialog from './chat/ChatDialog';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';


const Messenger = () => {
    
    const LoginHeader=styled(AppBar)`height:220px; background-color:#00bfa5 ;box-shadow:none`;

    const Header=styled(AppBar)`height:125px; background-color:#00bfa5 ;box-shadow:none`;

    const {account}=useContext(AccountContext);

    const Component=styled(Box)`height:100vh;background:#DCDCDC`;
    return (
        <Component>
        {account ?
        
        (<>
 
            <Header>
              <Toolbar>

              </Toolbar>
            </Header>

            <ChatDialog/>
            </>
        ):
        (
            <div>
        <LoginHeader>
         <Toolbar>
            <Typography style={{fontFamily:'inherit',fontSize:'70px',marginLeft:'500px',color:'white'}}>
                ChitChatopia
            </Typography>
 
         </Toolbar>

        </LoginHeader>    
            <LoginDialog/>
            </div>
        )
        }
        
        </Component>
       
    );
};

export default Messenger;