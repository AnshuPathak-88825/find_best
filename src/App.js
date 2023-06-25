import "./App.css";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Areas from "./pages/Areas.jsx";
import SearchPage from "./pages/SearchPage.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/search-page" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;