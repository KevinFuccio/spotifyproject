import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./Components/NavbarComponent/Navbar";
import MainPage from "./Components/MainPageComponent/MainPage";
import NavPlayer from "./Components/NavPlayerComponent/NavPlayer";
import AlbumPage from "./Components/AlbumPageComponent/AlbumPage";
import ArtistPage from "./Components/ArtistPageComponent/ArtistPage";
import Library from "./Components/LibraryComponent/Library";
function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/album/:id" element={<AlbumPage />} />
        <Route path="/artist/:id" element={<ArtistPage />} />
        <Route path="/your-library" element={<Library />} />
      </Routes>
      <NavPlayer />
    </BrowserRouter>
  );
}

export default App;
