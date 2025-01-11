import React from 'react'
import { Dialog ,Box,Typography,List,ListItem,styled} from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { qrCodeImage } from '../constants/data';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';

const dialogStyle={
    height:'96%',
    maxWidth:'60%',
    marginTop:'12%',
    width:'60%',
    boxShadow:'none',
    overflow:'hidden'
    
}



const Component=styled(Box)` display:flex ; overflow:none`;

const Container=styled(Box)`padding: 56px 0 56px 56px`;

const QrCode =styled('img')({
    height:264,
    width:264,
    margin:50,
    marginLeft:100
});

const Typo=styled(Typography)`
  margin-top:40px;
  font-size:26px;
  font-weight:300;
  font-family:inherit;
  margin-bottom:24px
  `;


  const MyList=styled(List)`
    &>li{
        line-height:28px;
        padding:0;
        margin-top:8px;
        font-size:18px;
        color:#4a4a4a
    }
  
  `;

const LoginDialog = () => {

    const {setAccount}=useContext(AccountContext);

    const loginSuccess=(res)=>{
        const decode=jwtDecode(res.credential);
        console.log(decode);
        console.log(decode.name);
        console.log('login success');
       
        setAccount(decode);
    }


    const loginErr=()=>{
        console.log("login failure");
    }
    

  


    return (    
     <Dialog open={true}
      PaperProps={{sx:dialogStyle}}  //it is used to give the style PaperProps
      hideBackdrop={true}
     >
        <Component>
           <Container>
             <Typo>
                To use Whatsapp on your computer:
             </Typo>
             <MyList>
                <ListItem>
                    1. Open Whatsapp on your Phone
                </ListItem>
                <ListItem>
                    2. Top Menu Setting and select Linked Devices
                </ListItem>
                <ListItem>
                    3. Point your phone to capture the code
                </ListItem>
             </MyList>
           </Container>
           <Box>
               <QrCode src={qrCodeImage}/>
               <Box style={{marginTop:'-200px',position:'absolute',left:"567px"}}>
               <GoogleLogin
               
            
               onSuccess={loginSuccess}
               onError={loginErr}
               
               />
               </Box>
           </Box>
        </Component>

        
         
     </Dialog>
     

);
};



export default LoginDialog;

