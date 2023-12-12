
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage.tsx";
import {ThemeProvider} from "./components/Util/ThemeContext.tsx";

function App() {
  return (
    <ThemeProvider>
        <div className="App">
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    </ThemeProvider>

  )
}

export default App
