import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  
import Home from './components/Home';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import Contact from './components/contact';  
import UserProfile from './components/UserProfile';
import CreateMeeting from './components/CreateMeeting'; // Import CreateMeeting
import LoginPageDashboard from './components/LoginPageDashboard';
import ToDoList from './components/ToDoList'; // Import ToDoList component
import Counter from './components/Counter';   // Import Counter component
import ClientList from './components/ClientList'; // Import ClientList component
import MeetingList from './components/MeetingList'; // Import MeetingList component
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <h1 className="main-title">Client Management Application</h1>

        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create-meeting" element={<CreateMeeting />} /> {/* Route for Create Meeting */}
          <Route path="/loginpagedashboard" element={<LoginPageDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

