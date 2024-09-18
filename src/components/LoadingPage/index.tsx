import React from 'react'
import { Box, Spinner, Text, Center } from '@chakra-ui/react'

const LoadingPage = () => {
  return (
    <Center height='100vh' width='100vw' bg='gray.100'>
      <Box textAlign='center'>
        <Spinner
          size='xl'
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
        />
        <Text mt={4} fontSize='lg' color='gray.600'></Text>
      </Box>
    </Center>
  )
}

export default LoadingPage
