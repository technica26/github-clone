import React from "react";
//import logo from './logo.svg';
import "./App.css";
import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import Repository from "./repository";

// 1. import `ChakraProvider` component
//import { ChakraProvider } from '@chakra-ui/react'

function App() {
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

      <Box
        bg="#FFFFFF"
        w="1134px"
        pl="26px"
        py="57px"
        mx="73px"
        mb="26px"
        color="black"
        height="133px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      >
        <Text fontSize="16px" fontWeight="700">
          リポジトリ1
        </Text>
      </Box>

      <Repository>リポジトリ2</Repository>
    </> //フラグメント
  );
}

export default App;
