import "./App.css";

import HomePage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import ErrorPage from "./pages/Error404";
import Contacts from "./pages/Contacts";
import { INDEX_PATH, ABOUT_PATH, CONTACT_PATH, NOT_FOUND_PATH } from './constants/paths'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path={INDEX_PATH} element={<HomePage />}/>
      <Route path={ABOUT_PATH} element={<AboutPage />}/>
      <Route path={CONTACT_PATH} element={<Contacts />}/>
      <Route path={NOT_FOUND_PATH} element={<ErrorPage />}/>
    </Routes>

    </>
  );
}

export default App;