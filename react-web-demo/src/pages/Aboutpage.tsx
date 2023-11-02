import NavbarDark from "../components/navbar";
import Footer from "../components/footer";
import { Container } from "react-bootstrap";
import AboutContent from "../components/pagecontent/about-content";
function AboutPage() {
  return (
    <>
      <NavbarDark />
      <Container>
        <AboutContent />
      </Container>
      <Footer />
    </>
  );
}
export default AboutPage;