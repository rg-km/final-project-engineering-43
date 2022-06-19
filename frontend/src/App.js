import LandingPage from './pages/Landing-page';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Maintener from './pages/Maintener-dashboard';
import Teacher from './pages/Teacher-dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<LandingPage />} />
        <Route path="dashboard">
          <Route path="maintener" element={<Maintener />} />
          <Route path="teacher" element={<Teacher />} />
        </Route>
      </Route>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
    </Routes>
  );
}

export default App;
