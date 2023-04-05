import './App.css'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from './pages/home/Home';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
