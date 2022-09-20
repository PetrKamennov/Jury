import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes } from 'react-router-dom';
import AdminEditJury from './pages/AdminEditJury';
import AdminEditMeet from './pages/AdminEditMeet';
import AdminMain from './pages/AdminMain';
import AdminMeet from './pages/AdminMeet';
import JuryMeet from './pages/JuryMeet';
import AdminAddJury from './pages/AdminAddJury';
import AdminEditProject from './pages/AdminEditProject';
import Navbar from './components/navbar/Navbar';
import Authorization from './pages/Authorization';
import PasswordRecovery from './pages/PasswordRecovery';
import Start from './pages/Start';
import JuryHistory from './pages/JuryHistory';
import JuriProfile from './pages/JuriProfile';
import JuryVote from "./pages/JuryVote";



function App() {
  return (
    <>
      <Routes>
        <Route path='/jury_meets' element={<JuryMeet />} />
        <Route path='/history' element={<JuryHistory />} />
        <Route path='/profile' element={<JuriProfile />} />
        <Route path='/' element={<Start />}/>
        <Route path='/AdminEditProject' element={<AdminEditProject/>}/>
        <Route path='/AdminEditJury' element={<AdminEditJury />} />
        <Route path='/AdminAddJury' element={<AdminAddJury />} />
        <Route path='/AdminEditMeet' element={<AdminEditMeet />} />
        <Route path='/AdminMain' element={<AdminMain />} />
        <Route path='/AdminMeet' element={<AdminMeet />} />
        <Route path='/JuryVote' element={<JuryVote />} />
      </Routes>
    </>
  );
}

export default App;
