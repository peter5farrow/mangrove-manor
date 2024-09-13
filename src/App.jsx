import { Outlet } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <div id="bg-img-cont">
        <Container id="title-bar-cont">
          <h1>Mangrove Manor</h1>
        </Container>

        <Container id="outlet-cont">
          <Outlet />
        </Container>
      </div>
    </>
  );
}

export default App;
