// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./components/Header";
import Joblist from "./components/Jobs/Joblist";
import JobDetails from "./components/Job-details/JobDetails";
import {Routes, Route, Navigate } from 'react-router-dom';
// import './assets/react.svg' from '/src/App.jsx';
function App() {

  return(
    <div>
      <Header/>
       <Routes>
        <Route path='/' element={<Navigate to='/Jobs'/>} />
        <Route path='/jobs' element={<Joblist/>} />
        <Route path='/jobs/:position' element={<JobDetails/>} />

       </Routes>
    </div>
  );
}

export default App
