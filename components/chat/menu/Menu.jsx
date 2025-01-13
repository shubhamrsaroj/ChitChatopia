import React, { useState } from 'react'
import { Box } from '@mui/material';
import Header from './Header';
import Search from './Search';

const Menu = () => {


    const[text,setText]=useState('');

  return (
    <Box>
        <Header/>
        <Search setText={setText} ></Search>
    </Box>
  )
}

export default Menu;