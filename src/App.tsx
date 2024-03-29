import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import { ThemeProvider } from "./components/Theme/ThemeContext.tsx";

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <Router>
                    <>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                        </Routes>
                    </>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
