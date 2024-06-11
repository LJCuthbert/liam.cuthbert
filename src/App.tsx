import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import { ThemeProvider } from "./components/theme/ThemeContext.tsx";
import ConQuestPage from "./pages/projects/ConQuestPage.tsx";

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <Router>
                    <>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route
                                path="/projects/conquest"
                                element={<ConQuestPage />}
                            />
                        </Routes>
                    </>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
