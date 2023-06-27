import { Routes, Route } from "react-router-dom";
import SignupPage from "./Components/SignUp";
import UserProfile from "./Components/UserProfile";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import Login from './Components/Login'

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname == '/signin' || location.pathname === '/login';
  return (
    <div className="App">
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/signin" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<UserProfile name={'ashish'} email={'ashish'} dateOfBirth={'1999'} />} />
      </Routes>
    </div>
  );
}

export default App;
