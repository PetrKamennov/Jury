import React from 'react';
import ReactDOM from 'react-dom/client';
import AdminAddJury from './pages/AdminAddJury';
import JuryMeet from "./pages/JuryMeet";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import {useTransition, animated} from "react-spring";
import JuryHistory from "./pages/JuryHistory";
import JuriProfile from "./pages/JuriProfile";
import {useState} from "react";
import "./App.css";



function App() {

    const [meetlink,setLineMeet] = useState("jury_meet_button")
    const [historylink,setLineHistory] = useState("jury_meet_button")
    const [profilelink,setLineProfile] = useState("jury_meet_button")

    const setMeetLine = () => {
        setLineMeet("jury_meet_button activeBTN")
        setLineHistory("jury_meet_button")
        setLineProfile("jury_meet_button")
    }
    const setHistoryLine = () => {
        setLineMeet("jury_meet_button")
        setLineHistory("jury_meet_button activeBTN")
        setLineProfile("jury_meet_button")
    }
    const setProfileLine = () => {
        setLineMeet("jury_meet_button")
        setLineHistory("jury_meet_button")
        setLineProfile("jury_meet_button activeBTN")
    }


    return (
      <>
          <div className="buttons_jury_meet">
              <Link onClick={setMeetLine} to="/jury_meets"  className={meetlink}>Текущие мероприятия</Link>
              <Link onClick={setHistoryLine} to="/history" className={historylink}>История</Link>
              <Link onClick={setProfileLine}  to="/profile" className={profilelink}>Профиль</Link>
          </div>

        <Routes>
            <Route path="/jury_meets" element={<JuryMeet/>} />
          <Route path="/history" element={<JuryHistory/>} />
          <Route path="/profile" element={<JuriProfile/>} />
        </Routes>
      </>
  );
}

export default App;
