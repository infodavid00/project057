import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Support from "./pages/Support";
import News from "./pages/News";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/dashboard/support" element={<Support />} />
        <Route exact path="/dashboard/news" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
