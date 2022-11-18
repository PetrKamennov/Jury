import React from 'react';

import { useState, useEffect } from "react";
import CriteriaPool from './components/AdminEditMeet/CriteriaPool';
import { Route, Routes, useLocation } from 'react-router-dom';
import AdminEditJury from './pages/AdminEditJury';
import AdminEditMeet from './pages/AdminEditMeet';
import AdminMain from './pages/AdminMain';
import AdminMeet from './pages/AdminMeet';
import JuryMeet from './pages/JuryMeet';
import AdminAddJury from './pages/AdminAddJury';
import AdminEditProject from './pages/AdminEditProject';
import Authorization from './pages/Authorization';
import JuryHistory from './pages/JuryHistory';
import JuriProfile from './pages/JuriProfile';
import ChangePassword from './pages/ChangePassword';
import EmailChange from './pages/EmailChange';
import RequireAuth from './components/RequireAuth';
import Layout from './pages/Layout';
import JuryVote from './pages/JuryVote';

function App() {
  const ROLES = {
    'Jury': false,
    'Admin': true
  }
  return (
    <>
        <Routes>
          <Route path='/' element={<Layout/>}>
              {/* Жюри */}
              <Route element={<RequireAuth allowedRoles={[ROLES.Jury]} />}>
                <Route path='/jury_meets' element={<JuryMeet />} />
                <Route path='/history' element={<JuryHistory />} />
                <Route path='/profile' element={<JuriProfile />} />
                <Route path='/JuryVote' element={<JuryVote />} />
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
    </>
    )
}

export default App;
