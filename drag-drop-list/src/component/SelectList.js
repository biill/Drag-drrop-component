import * as React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const SelectList = ({ setSelected }) => {
  return (
    <ListGroup
      onClick={(e) => {
        setSelected(e.target.value);
      }}
      defaultActiveKey={"Circle"}
    >
      <ListGroup.Item action variant="secondary" value={"Square"}>
        Square
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary" value={"Rectangular"}>
        Rectangular
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary" value={"Circle"}>
        Circle
      </ListGroup.Item>
      <ListGroup.Item action variant="secondary" value={"Oval"}>
        Oval
      </ListGroup.Item>
    </ListGroup>
  );
};

export default SelectList;
