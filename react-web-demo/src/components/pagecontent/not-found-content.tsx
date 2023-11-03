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
          <h1 className="text-center fs-1">
            <b>Error 404:</b>
          </h1>
          <h2 className="text-muted text-center">Page Not Found</h2>
        </Col>
        <Col>
          <p className="text-light"> </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-light">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-light">.</p>
        </Col>
        <Col>
          <p className="text-center fs-1">
            <b>URL not found.</b>
          </p>
        </Col>
        <Col>
          <p className="text-light"> </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-light"> </p>
        </Col>
        <Col>
          <p className="text-center fs-4">
            About{" "}
            <a href="https://kb.iu.edu/d/bfrc">
              Common
              <br />
              HTML Errors.
            </a>
          </p>
        </Col>
        <Col>
          <p className="text-light"> </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-light">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </p>
        </Col>
      </Row>
    </>
  );
}
export default ErrorContent;
