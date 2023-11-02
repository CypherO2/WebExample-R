import NavbarDark from "../components/navbar";
// import Footer from "../components/footer";
import { Container } from "react-bootstrap";
import ErrorContent from "../components/pagecontent/not-found-content";
function ErrorPage() {
  return (
    <>
      <NavbarDark />
      <Container>
        <ErrorContent />
      </Container>
    </>
  );
}
export default ErrorPage;