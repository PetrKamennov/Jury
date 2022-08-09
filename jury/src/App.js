import React from 'react';
import ReactDOM from 'react-dom/client';
import AdminAddJury from './pages/AdminAddJury';
import JuryMeet from "./pages/JuryMeet";
import {Route, Routes, useLocation} from "react-router-dom";
import {useTransition, animated} from "react-spring";
import JuryHistory from "./pages/JuryHistory";



function App() {

  return (
      <>
         <JuryMeet/>
        <Routes>
          <Route path="/aboba" element={<JuryHistory/>} />
        </Routes>
      </>
  );
}

export default App;
