import Draggable from "react-draggable";
import { Card } from "react-bootstrap";
const DragbaleComponent = ({ selected }) => {
  const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

  const handleDrag = () => {
    const card = document.getElementsByClassName("card");
    card[0].style.backgroundColor = "#" + randomColor();
    console.log(card[0]);
  };

  switch (selected) {
    case "Circle":
      return (
        <Draggable onDrag={handleDrag}>
          <Card
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "black",
              borderRadius: "50%",
            }}
          ></Card>
        </Draggable>
      );
    case "Square":
      return (
        <Draggable onDrag={handleDrag}>
          <Card
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "black",
            }}
          ></Card>
        </Draggable>
      );
    case "Rectangular":
      return (
        <Draggable onDrag={handleDrag}>
          <Card
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "black",
            }}
          ></Card>
        </Draggable>
      );

    case "Oval":
      return (
        <Draggable onDrag={handleDrag}>
          <Card
            style={{
              width: "200px",
              height: "100px",
              backgroundColor: "black",
              borderRadius: "100px/50px",
            }}
          ></Card>
        </Draggable>
      );
    default:
      return (
        <Draggable onDrag={handleDrag}>
          <Card
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: "black",
              borderRadius: "50%",
            }}
          ></Card>
        </Draggable>
      );
  }
};

export default DragbaleComponent;
