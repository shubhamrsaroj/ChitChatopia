import React from 'react'
import { useContext } from 'react'
import { Box,styled } from '@mui/material'
import MessageIcon from '@mui/icons-material/Message';
import { AccountContext } from '../../../context/AccountProvider'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';

const Component=styled(Box)`
 height:44px;
 background:#ededed;
 padding:8px 16px;
 display:flex
`
const Image=styled('img')({
    height:40,
    width:40,
    borderRadius:'50px'
})

const Wrapper=styled('Box')`
  margin-left:auto;
  & > *{
    margin-left:2px;
    padding:10px;
    color:#000
  };
  &:second-child{
    font-size:22px;
    marginRight:7px;
    margin-Top:2px
  };
     &:third-child{
    font-size:22px;
    marginRight:7px;
    margin-Top:2px
  }
`;
const Header = () => {

  
    const {account}=useContext(AccountContext); 
     return (
    <>
       <Component>
         <Image style={{borderRadius:'50px'}}   src={account.picture}></Image>
        
        <Wrapper>
        
        <HistoryToggleOffIcon/>

        <MessageIcon  > </MessageIcon>
         
        <MoreVertIcon  > </MoreVertIcon>
        
       
        </Wrapper>
       </Component>
    
    
    </>
  )
}

export default Header