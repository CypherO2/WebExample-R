import "./App.css";
import NavbarDark from "./components/navbar";
import Footer from "./components/footer";
import { Container } from "react-bootstrap";
import HomeContent from "./components/home-content";

function App() {
  return (
    <>
      <NavbarDark />
      <Container>
        <HomeContent />
      </Container>
      <Footer />
    </>
  );
}

export default App;