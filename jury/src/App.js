import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes } from 'react-router-dom';
import AdminEditJury from './pages/AdminEditJury';
import AdminEditMeet from './pages/AdminEditMeet';
import AdminAddJury from './pages/AdminAddJury';
import AdminEditProject from './pages/AdminEditProject';
import Navbar from './components/navbar/Navbar';
import Authorization from './pages/Authorization';
import PasswordRecovery from './pages/PasswordRecovery';



function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/AdminEditProject' element={<AdminEditProject/>}/>
        <Route path='/AdminEditJury' element={<AdminEditJury />} />
        <Route path='/AdminAddJury' element={<AdminAddJury />} />
        <Route path='/AdminEditMeet' element={<AdminEditMeet />} />
      </Routes>
    </>
  );
}

export default App;
