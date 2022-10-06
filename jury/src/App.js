import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from "react";
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
import ChangePassword from './pages/ChangePassword';
import EmailChange from './pages/EmailChange';

function App() {
  const [getId1, setgetId1] = useState('');
  const getId2 = (EventIds) =>{
    setgetId1(EventIds)
  }
  return (
    <>
      <Routes>
        <Route path='/jury_meets' element={<JuryMeet />} />
        <Route path='/history' element={<JuryHistory />} />
        <Route path='/profile' element={<JuriProfile />} />
        <Route path='/' element={<Authorization/>}/>
        <Route path='/AdminEditProject' element={<AdminEditProject EventId={getId1}/>}/>
        <Route path='/AdminEditJury' element={<AdminEditJury EventId={getId1} />} />
        <Route path='/AdminAddJury' element={<AdminAddJury EventId={getId1} />} />
        <Route path='/AdminEditMeet' element={<AdminEditMeet EventId={getId1} />} />
        <Route path='/AdminMain' element={<AdminMain getidPZDC={getId2} />} />
        <Route path='/AdminMeet' element={<AdminMeet EventId={getId1} />} />
        <Route path='/ChangePassword' element={<ChangePassword/>} />
        <Route path='/EmailChange' element={<EmailChange />} />
      </Routes>
    </>
  );
}

export default App;
