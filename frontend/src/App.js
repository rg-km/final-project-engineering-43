import { Container, Button, Box, Image, Heading, Text } from '@chakra-ui/react';
import Login from './component/Login'
import Register from './component/Register'
import LandingPage from './component/Landing-page';
import TeacherDashboard from './component/Teacher-dashboard';
import FormAddProfesi from './component/Form-addProfesi'

function App() {
  return (
    <>
      <Login />
      <Register />
      <LandingPage />
      <TeacherDashboard/>
      {/* <FormAddProfesi/> */}
    </>
  );
}

export default App;
