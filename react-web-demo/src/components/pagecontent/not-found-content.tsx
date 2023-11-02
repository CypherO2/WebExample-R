import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Space from "../../assets/Space2.jpeg";

function ErrorContent() {
  return (
    <>
      <Row>
        <Col>
          <p className="text-light">.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-light">.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img alt="logo" src={Space} width="15%" className="rounded" />
        </Col>
        <Col>
          <h1 className="text-center">Error 404: Page Not Found</h1>
        </Col>
        <Col>
          <p className="text-light">.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-light">.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-light">.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-light">.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-light">.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-light">.</p>
        </Col>
        <Col>
          <p className="text-center">
            <b>That URL was not found.</b>
          </p>
        </Col>
        <Col>
          <p className="text-light">.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-light">.</p>
        </Col>
        <Col>
          <p className="text-center">
            About <a href="https://kb.iu.edu/d/bfrc">HTML Errors</a>
          </p>
        </Col>
        <Col>
          <p className="text-light">.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-light">.</p>
        </Col>
      </Row>
    </>
  );
}
export default ErrorContent;