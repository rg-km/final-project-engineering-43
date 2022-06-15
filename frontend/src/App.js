import { Container, Button, Box, Image, Heading, Text } from '@chakra-ui/react';
import Navbar from './component/Navbar';
import Login from './component/Login'
import Register from './component/Register'

function App() {
  return (
    <>
      <Navbar />
      {/* <Login /> */}
      <Register />
    </>
  );
}

export default App;
