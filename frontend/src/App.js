import LandingPage from './pages/home/Landing-page';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Maintener from './pages/maintener/Maintener-dashboard';
import Teacher from './pages/teacher/Teacher-dashboard';
import Detail from './pages/home/Detail-course';
import AddMateri from './pages/teacher/Form-addMateri';
import ListRoadmap from './pages/List-roadmap';
import DetailRoadmap from './pages/Detail-roadmap';
import FormAddProfesi from './pages/teacher/Form-addProfesi';
import Roadmap from './pages/home/Roadmap';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<LandingPage />} />
        <Route path="dashboard">
          <Route path="maintener" element={<Maintener />} />
          <Route path="teacher">
            <Route index element={<Teacher />} />
            <Route path="tambah-materi" element={<AddMateri />} />
            <Route path=":id/edit-materi" element={<AddMateri />} />
            <Route path="tambah-profesi" element={<FormAddProfesi />} />
            <Route path=":id/edit-profesi" element={<FormAddProfesi />} />
          </Route>
        </Route>
        <Route path="roadmap">
          <Route path="list" element={<ListRoadmap />} />
          <Route path="detail" element={<DetailRoadmap />} />
        </Route>
        <Route path=":id/course" element={<Detail />} />
        <Route path="path" element={<Roadmap />} />
      </Route>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
    </Routes>
  );
}

export default App;
