import { Container, Button, Box, Image, Heading, Text } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Navbar from '../component/Navbar';
import Login from '../component/Login'

const Routes = () => {
  // const DashboardRoute = ({ ...props }) => {
  //   if (Cookies.get('token') === undefined) {
  //     return <Redirect to={'/login'} />
  //   } else if (Cookies.get('token') !== undefined) {
  //     return <Route {...props} />
  //   }
  // }

  return (
    <>
      <Navbar />
      {/* <Login /> */}
      {/* <Route path="/register" exact>
      <Register/>
      </Route> */}

      <Login/>
    </>
  );
}

export default Routes;


