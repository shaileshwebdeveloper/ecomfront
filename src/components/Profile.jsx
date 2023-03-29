import { Box, Img, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

export const Profile = () => {

  const [user, setUser]= useState('')

  
  useEffect(() => {

    axios.get('http://localhost:3001/profile',{
      headers: {
       "Content-Type": "application/json",
       Authorization: `Bearer ${localStorage.getItem("token")}`,
        }})
     .then(r => console.log("response", setUser(r.data)))
     .catch(e =>  console.log("error", e))

  }, [])
  

 
   

   const {firstname, email} = user




  return (
    <Box  w='90%' m='auto' p='1rem'> 
          <Img  src='https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png' m='auto'
          borderRadius={'50%'} w='200px'/>
          <Text fontWeight={'bold'} fontSize='2rem'>Name : {firstname}</Text>
          <Text fontWeight={'bold'} fontSize='2rem'>Email : {email}</Text>      
    </Box>
  )
}