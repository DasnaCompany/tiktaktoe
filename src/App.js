// ** User Components
import OfflinePlay from "./components/OfflinePlay";
import TopNav from "./components/TopNav";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// ** Style Imports
import "./App.css";
import PlayHistory from "./components/PlayHistory";
import Login from "./components/Login";
import Register from "./components/Register";
import OnlinePlay from "./components/OnlinePlay";

// ** Main App Component
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TopNav />
                <Outlet />
              </>
            }
          >
            <Route index element={<OfflinePlay />} />
            <Route path="/online" element={<OnlinePlay />} />
            <Route path="/history" element={<PlayHistory />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
