import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import My from './pages/My';
import Recharge from './pages/Recharge';
import Invite from './pages/Invite';
import Parity30 from './sub-pages/Prarity-30Sec';
const App = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={userInfo ? <Home /> : <Navigate to="/login" replace />} />
        <Route path="/my" element={userInfo ? <My /> : <Navigate to="/login" replace />} />
        <Route path="/recharge" element={userInfo ?<Recharge />: <Navigate to="/login" replace />} />
        <Route path="/invite" element={userInfo ? <Invite />: <Navigate to="/login" replace />} />
        <Route path="/parity-30" element={userInfo ? <Parity30 />: <Navigate to="/login" replace />} />
        <Route path="/*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
