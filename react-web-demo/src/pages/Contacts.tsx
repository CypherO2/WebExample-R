import NavbarDark from "../components/navbar";
import Footer from "../components/footer";
import { Container } from "react-bootstrap";
import ContactContent from "../components/pagecontent/contact-content";
function Contacts() {
  return (
    <>
      <NavbarDark />
      <Container>
        <ContactContent />
      </Container>
      <Footer />
    </>
  );
}
export default Contacts;