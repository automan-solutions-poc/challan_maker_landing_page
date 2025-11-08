import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BookDemoPage from "./pages/BookDemoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/book-demo" element={<BookDemoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
