import "./App.css";
import DragbleComponent from "./component/DragbleComponent";
import SelectList from "./component/SelectList";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("Circle");

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col md={{ span: 4, offset: 8 }}>
            <SelectList setSelected={setSelected} />
          </Col>
        </Row>
        <div style={{ top: "45%", position: "absolute", left: "45%" }}>
          <DragbleComponent selected={selected} />
        </div>
      </Container>
    </div>
  );
}

export default App;
