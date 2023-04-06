import { Row,Col, Button } from "react-bootstrap";
import { useContext,useRef,useState } from "react";
import './NewItemForm.css'
import { UserContext } from "../App";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const NewItemForm = () => {
  const {user, setUser} = useContext(UserContext);
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const quantityRef = useRef(null);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };

    return ( 
    <Row className='item-row py-1 my-1 rounded'>
      <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
        <Row className="mb-1">
          <Form.Group as={Col} md="4" lg="5" controlId="validationCustom01">
            <Form.Label>Item name</Form.Label>
            <Form.Control
              required
              type="text"/>
          </Form.Group>
        </Row>
        <Row className="mb-1">
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Item Description</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3} />
              <Form.Control.Feedback type="invalid">
              Please provide a valid description that is no longer than 300 characters.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="number" min="0" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid quantity.
            </Form.Control.Feedback>
          </Form.Group>
          <Col>
            <Button type="submit">Create</Button>
          </Col>
        </Row>
        
      </Form>
    </Row>
  );
}

export default NewItemForm;