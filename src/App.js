import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './Components/NavbarComponent/Navbar';
import MainPage from './Components/MainPageComponent/MainPage'
import NavPlayer from './Components/NavPlayerComponent/NavPlayer'
function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
      <NavPlayer/>
    </BrowserRouter>
  )
}

export default App;
