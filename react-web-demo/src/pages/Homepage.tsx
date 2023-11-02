import NavbarDark from "../components/navbar";
import Footer from "../components/footer";
import { Container } from "react-bootstrap";
import HomeContent from "../components/pagecontent/home-content";

function HomePage() {
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
export default HomePage;