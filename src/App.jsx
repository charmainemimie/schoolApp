import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainArea from "./Components/Layout/MainArea";
import Landing from "./Pages/Landing";
import Notes from "./Pages/Notes";
import Assignments from "./Pages/Assignments";
import Calendar from "./Pages/Calendar";
import Home from "./Pages/Home";
import Tutorials from "./Pages/Tutorials";
import Settings from "./Pages/Settings";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route index element={<Landing />} />
          <Route path="/" element={<MainArea />}>
            <Route path="/notes" element={<Notes />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
