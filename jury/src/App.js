import React from 'react';

import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
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
import CriteriaPool from './components/AdminEditMeet/CriteriaPool';
import RequireAuth from './components/RequireAuth';
import Layout from './pages/Layout';
import NavbarJury from './components/navbar/NavbarJury';
import { useTransition, animated } from 'react-spring';
import IsUser from './components/AdminOrJury/AdminOrJury';



function App() {
  const location = useLocation();
  const transitions = useTransition(location,
    {
      from: {
        transform: 'translateY(100%)',
        position: 'absolute',
        width: '100%',
      },
      enter: { 
        transform: 'translateY(0%)',
        opacity: 1, 
        transition: 'all 0.25s linear 0s'
       },
      leave: {
        transform: 'translateY(-100%)',
        transition: 'all 0.25s linear 0s'
      }
    })   
    const ROLES = {
      'Jury': false,
      'Admin': true
    }
  return transitions((props, item, key) => (
    <>
        <IsUser ROLES={ROLES}/>
        <animated.div key={key} style={props}>
        <Routes location={item}>
          <Route path='/' element={<Layout/>}>
              {/* Жюри */}
              <Route element={<RequireAuth allowedRoles={[ROLES.Jury]} />}>
                <Route path='/jury_meets' element={<JuryMeet />} />
                <Route path='/history' element={<JuryHistory />} />
                <Route path='/profile' element={<JuriProfile />} />
              </Route>
              {/* Админка */}
              <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                <Route path='/AdminEditProject' element={<AdminEditProject />}/>
                <Route path='/AdminEditJury' element={<AdminEditJury  />} />
                <Route path='/AdminAddJury' element={<AdminAddJury  />} />
                <Route path='/AdminEditMeet' element={<AdminEditMeet  />} />
                <Route path='/AdminMain' element={<AdminMain  />} />
                <Route path='/AdminMeet' element={<AdminMeet  />} />
                <Route path='/CriteriaPool' element={<CriteriaPool />} />
              </Route>
              {/* Общее */}
              <Route path='/login' element={<Authorization/>}/>
              <Route path='/ChangePassword' element={<ChangePassword/>} />
              <Route path='/EmailChange' element={<EmailChange />} />

          </Route>
        </Routes>
      </animated.div>
    </>
    )
  );
}

export default App;
