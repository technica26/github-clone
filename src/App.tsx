import React, { useEffect, useState } from "react";
//import logo from './logo.svg';
import "./App.css";
import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import Repository from "./repository";

// 1. import `ChakraProvider` component
//import { ChakraProvider } from '@chakra-ui/react'



function App() {
  const [data, setdata] = useState<any>()
  useEffect(()=>{
    fetch('https://api.github.com/users/technica26/repos')
  .then(response => response.json())
  .then(data => setdata(data));
  },[]
  )
  // 2. Wrap ChakraProvider at the root of your app
  return (
    //<div className="App">
    //<Button colorScheme='blue'>Button</Button>
    //</div>
    <>
      <Box bg="#D9D9D9" w="100%" p={4} color="black" height="50px">
        <Text fontSize="16px" fontWeight="700">
          GitHub Repositories
        </Text>
      </Box>

      <Box
        w="100%"
        color="black"
        marginTop="26px"
        marginLeft="20px"
        marginBottom="42px"
      >
        <Text fontSize="16px" fontWeight="700">
          SwftAlpcのリポジトリ一覧
        </Text>
      </Box>

      
      {data?.map((item:any)=>{
        return (
          <Repository>{item.name}</Repository>
        )
      })}
      
    </> //フラグメント
  );
}

export default App;
