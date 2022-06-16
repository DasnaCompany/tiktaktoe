// ** User Components
import OfflinePlay from "./components/OfflinePlay";
import TopNav from "./components/TopNav";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// ** Style Imports
import "./App.css";
import PlayHistory from "./components/PlayHistory";

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
            <Route path="/online" element={<></>} />
            <Route path="/history" element={<PlayHistory />} />
            <Route path="/login" element={<></>} />
            <Route path="/register" element={<></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
