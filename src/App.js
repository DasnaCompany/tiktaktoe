// Parse for Back4App import
import Parse from "parse";
import { initializeParse } from "@parse/react";

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
import OnlinePlayers from "./components/OnlinePlayers";
import { useEffect, useState } from "react";

// ** Parse registration
const PARSE_APPLICATION_ID = "a9z635ij18Ca5sLNL9MAUOviBp0J9awDuSSk7KjC";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "HscnZoC3EbmLZxOphzqjViSOrdXfWRM6Zwf2Wz6Y";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;
// ** Parse Real-time
initializeParse(
  "http://tictactoe2022.b4a.io",
  "a9z635ij18Ca5sLNL9MAUOviBp0J9awDuSSk7KjC",
  "HscnZoC3EbmLZxOphzqjViSOrdXfWRM6Zwf2Wz6Y"
);

// ** Main App Component
function App() {
  const [online, setOnline] = useState(false);
  const updateUserStatus = async () => {
    const user = await Parse.User.current();
    if (user) {
      user.set("online", true);
      try {
        const res = user.save();
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
    setOnline(true);
  };

  useEffect(() => {
    if (!online) updateUserStatus();
  });
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
            <Route path="/online">
              <Route index element={<OnlinePlayers />} />
              <Route path="/online/play" element={<OnlinePlay />} />
            </Route>
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
