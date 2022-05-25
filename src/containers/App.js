import React from 'react'
import './App.css'
import Routes from '../components/Routes'

import { ChakraProvider } from '@chakra-ui/react'

const App = () => (
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
)

export default App;
