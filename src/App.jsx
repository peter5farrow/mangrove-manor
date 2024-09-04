import { Outlet } from "react-router-dom";
import TitleBar from "./components/TitleBar";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <>
      <Container id="title-bar">
        <Row>
          <TitleBar />
        </Row>
      </Container>
      <Container id="outlet">
        <Row>
          <Outlet />
        </Row>
      </Container>
    </>
  );
}

export default App;
