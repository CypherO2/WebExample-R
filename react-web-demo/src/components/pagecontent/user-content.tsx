import { Row, Col, Accordion, Button, Form } from "react-bootstrap";
import FormGroup from "../form";
import UserImg from "../../assets/user-img.png";
function UserContent() {
  return (
    <>
      <Row className="my-5" />
      <Row className="my-5" />

      <Row>
        <Col />
        <Col xs={6} className="border-bottom border-dark">
          <h2 className="text-center">
            <b>Login/ Sign Up</b>
          </h2>
        </Col>
        <Col />
      </Row>
      <Row className="my-5" />
      <Row className="my-5" />
      <Row className="my-5" />
      <Row className="mt-5 mb-5">
        <Col className="mt-5 mb-5">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Login</Accordion.Header>
              <Accordion.Body>
                {" "}
                <Row className="mt-5">
                  <Col />
                  <Col className="mt-5 ">
                    <img
                      alt="user-img"
                      className="img-fluid mx-auto d-block roundedCircle"
                      src={UserImg}
                    />
                  </Col>
                  <Col />
                </Row>
                <Row>
                  <FormGroup />
                </Row>
                <Row className="mb-5">
                  <Col />
                  <Col xs={1} md={0}>
                    <Button type="submit" variant="outline-dark" size="lg">
                      Login
                    </Button>
                  </Col>
                  <Col />
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Sign Up / Register</Accordion.Header>
              <Accordion.Body>
                <Row className="mt-5">
                  <Col />
                  <Col className="mt-5 ">
                    <img
                      alt="user-img"
                      className="img-fluid mx-auto d-block roundedCircle"
                      src={UserImg}
                    />
                  </Col>
                  <Col />
                </Row>
                <Row className="mt-5">
                  <Form.Floating className="mb-3">
                    <Form.Control
                      id="floatingInputCustom"
                      type="email"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInputCustom"> Email address</label>
                  </Form.Floating>
                  <Form.Floating>
                    <Form.Control
                      id="floatingPasswordCustom"
                      type="password"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPasswordCustom"> Password</label>
                  </Form.Floating>
                  <Form.Floating className="mt-3">
                    <Form.Control
                      id="floatingPasswordCustom"
                      type="password"
                      placeholder="Confirm Password"
                    />
                    <label htmlFor="floatingPasswordCustom">
                      Confirm Password
                    </label>
                  </Form.Floating>
                  <Row className="mb-5">
                    <Col />
                    <Col xs={1} md={0} className="mt-5">
                      <Button type="submit" variant="outline-dark" size="lg">
                        Login
                      </Button>
                    </Col>
                    <Col />
                  </Row>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
      <Row className="my-5" />

      <Row className="my-5" />
      <Row className="my-5" />
      <Row className="my-5" />
      <Row className="my-5" />
      <Row className="my-5" />
    </>
  );
}
export default UserContent;
