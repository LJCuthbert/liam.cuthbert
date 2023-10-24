
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage.tsx";
function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </div>
        </Router>
    </div>
  )
}

export default App
