import "./App.css";
import NavbarDark from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/Aboutpage";
import ErrorPage from "./pages/Error404";
import Contacts from "./pages/Contacts";
import UserPage from "./pages/Userpage";
import {
  INDEX_PATH,
  ABOUT_PATH,
  CONTACT_PATH,
  NOT_FOUND_PATH,
  USER_PATH,
} from "./constants/paths";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <NavbarDark />
      <Container>
        <Routes>
          <Route path={INDEX_PATH} element={<HomePage />} />
          <Route path={ABOUT_PATH} element={<AboutPage />} />
          <Route path={CONTACT_PATH} element={<Contacts />} />
          <Route path={USER_PATH} element={<UserPage />}/>
          <Route path={NOT_FOUND_PATH} element={<ErrorPage />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
