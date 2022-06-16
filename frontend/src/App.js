import { Container, Button, Box, Image, Heading, Text } from '@chakra-ui/react';
import Login from './component/Login'
import Register from './component/Register'
import LandingPage from './component/Landing-page';

function App() {
  return (
    <>
      <Login />
      <Register />
      <LandingPage />
    </>
  );
}

export default App;
