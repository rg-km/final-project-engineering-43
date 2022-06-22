import LandingPage from './pages/Landing-page';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Maintener from './pages/Maintener-dashboard';
import Teacher from './pages/Teacher-dashboard';
import Detail from "./pages/Detail-course";
import ListCourse from "./pages/List-course";
import AddMateri from './pages/Form-addMateri';
// import AddProfesi from './pages/Form-addProfesi'
import ListRoadmap from './pages/List-roadmap';
import DetailRoadmap from './pages/Detail-roadmap';
import DetailMaintener from './pages/Detail-maintener';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<LandingPage />} />
        <Route path="dashboard">
          <Route path="maintener" element={<Maintener />}/>
          <Route path='detail' element={<DetailMaintener/>}/>
          <Route path="teacher" element={<Teacher />} />
        </Route>
        <Route path="roadmap">
          <Route path="list" element={<ListRoadmap />} />
          <Route path="detail" element={<DetailRoadmap />} />
        </Route>
        <Route path='form'>
          <Route path='addMateri' element={<AddMateri />}/>
          {/* <Route path='addProfesi' element={<AddProfesi />}/> */}
        </Route>
      </Route>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/course" element={<Detail />} />
      <Route path="/listcourse" element={<ListCourse />} />
    </Routes>
  );
}

export default App;
