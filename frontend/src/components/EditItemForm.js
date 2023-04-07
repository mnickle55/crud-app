import { Row, Col, Button } from "react-bootstrap";
import { useContext, useRef, useState } from "react";
import './EditItemForm.css'
import { UserContext } from "../App";
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const EditItemForm = ({ setTrigger, trigger, item, setEditItem }) => {
  const { user, setUser } = useContext(UserContext);
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
    if(nameRef.current.value==='' || descriptionRef.current.value==='' || quantityRef.current.value===''){
      setValidated(true)
      return
    }
    e.preventDefault();
    setEditItem(null)
    fetch('http://localhost:5000/items', {
      method: "PATCH",
      body: JSON.stringify({
        id: item.id,
        name: nameRef.current.value,
        description: descriptionRef.current.value,
        quantity: quantityRef.current.value,
        user_id: user.id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => {
        let newTrigger = !trigger
        setEditItem(false)
        setTrigger(newTrigger)
        return res.json()
      })
  };

  const handleDelete = (e,id) => {
    e.stopPropagation()
    fetch(`http://localhost:5000/items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res=>{
      let newTrigger = !trigger
      setTrigger(newTrigger)
      return res.json()})
    .catch(err=>console.log(err))
  }

  const handleClose = () => {
    setEditItem(null)
  }

  return (
    <Row className='item-row-highlight py-1 my-1 rounded'>
      <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
        <Row className="mb-1">
          <Form.Group as={Col} md="4" lg="4">
            <Form.Label>Item ID</Form.Label>
            <Form.Control
              ref={nameRef}
              required
              defaultValue={item.id}
              disabled
              type="text" />
          </Form.Group>
          <Form.Group as={Col} md="4" lg="4">
            <Form.Label>Create Date</Form.Label>
            <Form.Control
              ref={nameRef}
              required
              defaultValue={item.created_at.slice(0, 10)}
              disabled
              type="text" />
          </Form.Group>
          <Form.Group as={Col} md="4" lg="4" >
            <Form.Label>Update Date</Form.Label>
            <Form.Control
              ref={nameRef}
              required
              defaultValue={item.updated_at.slice(0, 10)}
              disabled
              type="text" />
          </Form.Group>
        </Row>
        <Row className="mb-1">
          <Form.Group as={Col} md="4" lg="5" controlId="validationCustom01">
            <Form.Label>Item name</Form.Label>
            <Form.Control
              ref={nameRef}
              required
              defaultValue={item.name}
              type="text" />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              ref={quantityRef}
              defaultValue={item.quantity}
              min="1"
              required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid quantity.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-1">
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Item Description</Form.Label>
            <Form.Control
              ref={descriptionRef}
              required
              defaultValue={item.description}
              as="textarea"
              rows={3} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid description that is no longer than 400 characters.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-2 my-2">
          <Stack direction="horizontal" gap={3}>
            <Button variant="success" type="submit">Save</Button>
            <Button onClick={(e) => handleDelete(e, item.id)} variant="danger">Delete</Button>
            <Button onClick={() => handleClose()} variant="light" type="button">Close</Button>
          </Stack>
        </Row>
      </Form>
    </Row>
  );
}

export default EditItemForm;