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

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={localStorage.getItem("token")?<Home/>:<Navigate to="/login"/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/resetpassword" element={<ForgotPassword/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
