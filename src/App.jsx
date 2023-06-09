import './App.css'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import {
	BrowserRouter as Router,
	Routes,
	Route,
  Navigate,
} from "react-router-dom";
import Home from './pages/home/Home';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Charts from './pages/Charts/Charts';
import Documentation from './pages/Documentation/Documentation';
import FormsElements from './pages/FormsElements/FormsElements';
import IconsPage from './pages/IconsPage/IconsPage';
import Tables from './pages/Tables/Tables';
import UiElements from './pages/UiElements/UiElements';
import UserPage from './pages/UsersPage/UserPage';
import Navbar from './components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster/>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={localStorage.getItem("token")?<Home/>:<Navigate to="/login"/>}/>
          <Route path="/login" element={!localStorage.getItem("token")?<Login/>:<Navigate to="/"/>}/>
          <Route path="/signup" element={!localStorage.getItem("token")?<Signup/>:<Navigate to="/"/>}/>
          <Route path="/resetpassword" element={<ForgotPassword/>}/>
          <Route path="/charts" element={<Charts/>}/>
          <Route path="/documentation" element={<Documentation/>}/>
          <Route path="/tables" element={<Tables/>}/>
          <Route path="/uielements" element={<UiElements/>}/>
          <Route path="/usersPage" element={<UserPage/>}/>
          <Route path="/iconspage" element={<IconsPage/>}/>
          <Route path="/formselements" element={<FormsElements/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
