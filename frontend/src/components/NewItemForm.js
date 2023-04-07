import { Row,Col, Button } from "react-bootstrap";
import { useContext,useRef,useState } from "react";
import './NewItemForm.css'
import { UserContext } from "../App";
import Form from 'react-bootstrap/Form';
import {GrClose} from 'react-icons/gr'


const NewItemForm = ({setTrigger,trigger,setActiveCreateForm}) => {
  const {user, setUser} = useContext(UserContext);
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const quantityRef = useRef(null);
  const [validated, setValidated] = useState(false);

  const handleClose = () => {
    setActiveCreateForm(false)
  }

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    if(nameRef.current.value==='' || descriptionRef.current.value==='' || quantityRef.current.value==='' || parseInt(quantityRef.current.value)>=1000000 || parseInt(quantityRef.current.value)<=0){
      setValidated(true)
      return
    }
    e.preventDefault();
    handleClose();
    fetch('http://localhost:5000/items', {
      method: "POST",
      body: JSON.stringify({
        name: nameRef.current.value,
        description: descriptionRef.current.value,
        quantity: quantityRef.current.value,
        user_id: user.id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res=>{
      let newTrigger = !trigger
      setTrigger(newTrigger)
      return res.json()})
    nameRef.current.value =''
    descriptionRef.current.value=''
    quantityRef.current.value=''
  };

    return ( 
    <Row className='item-row-highlight py-1 my-1 rounded'>
      <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
        <Row className="mb-1">
          <Form.Group as={Col} md="4" lg="5" controlId="validationCustom01">
            <Form.Label>Item name</Form.Label>
            <Form.Control
              ref={nameRef}
              required
              type="text"/>
          </Form.Group>
          <Col className='text-end'>
            <Button className='close-btn' onClick={()=>handleClose()} type="button" variant="light"><GrClose/></Button>
          </Col>
        </Row>
        <Row className="mb-1">
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Item Description</Form.Label>
            <Form.Control
              ref={descriptionRef}
              required
              as="textarea"
              rows={3} />
              <Form.Control.Feedback type="invalid">
              Please provide a valid description that is no longer than 400 characters.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Quantity</Form.Label>
            <Form.Control 
            type="number" 
            ref={quantityRef}
            min="1"
            max='1000000'
            required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid quantity greater than 0 and less than 1 million.
            </Form.Control.Feedback>
          </Form.Group>
          <Col className='d-flex align-items-end mx-2'>
            <Button type="submit" variant="success">Create</Button>
          </Col>
        </Row>
      </Form>
    </Row>
  );
}

export default NewItemForm;