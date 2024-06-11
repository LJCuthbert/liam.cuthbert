import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import { ThemeProvider } from "./components/theme/ThemeContext.tsx";
import ConQuestPage from "./pages/projects/ConQuestPage.tsx";
import Header from "./components/header/Header.tsx";
import { useWindowSize } from "usehooks-ts";
import CustomCursor from "./components/effects/CustomCursor.tsx";

function App() {
    const { width } = useWindowSize();
    console.log(width);
    return (
        <ThemeProvider>
            <div className="App">
                <Header />
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/projects/conquest"
                            element={<ConQuestPage />}
                        />
                    </Routes>
                </Router>
                {width && width > 768 && <CustomCursor />}
            </div>
        </ThemeProvider>
    );
}

export default App;
