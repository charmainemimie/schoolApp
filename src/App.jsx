import './App.css'
import { BrowserRouter,Routes,Route,} from 'react-router-dom'
import MainArea from './Components/Layout/MainArea'
import Landing from './Pages/Landing'
import Notes from './Pages/Notes'
import Assignments from './Pages/Assignments'
import Calendar from './Pages/Calendar'
function App() {
  
  return (
    <>
        <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MainArea />} > */}
          <Route index element={<Landing />} />
          <Route path="/notes" element={<Notes/>} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/calendar" element={<Calendar />} />
        
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
