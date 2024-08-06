import { Route, Routes } from "react-router-dom";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import Bonus from "./pages/Bonus";
import DataTables from "./pages/DataTables";
import MonthlyRank from "./pages/MonthlyRank";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Invite from "./pages/Invite";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/dashboard/mt" element={<MonthlyRank />} />
        <Route exact path="/dashboard/dt" element={<DataTables />} />
        <Route exact path="/dashboard/bonus" element={<Bonus />} />
        <Route exact path="/dashboard/profile" element={<Profile />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/invite" element={<Invite />} />
      </Routes>
    </>
  );
}

export default App;
