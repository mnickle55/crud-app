import { useEffect, useState,useRef,useContext } from "react";
import Form  from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import { Container,Row,Col } from "react-bootstrap";
import Item from "./Item";
import NewItemForm from "./NewItemForm";
import { UserContext } from "../App";

const Inventory = () => {
  const [data,setData] = useState(null)
  const searchRef = useRef(null);
  const {user, setUser} = useContext(UserContext);
  const [filter,setFilter] = useState({"query":null});
  const [selectedItemID,setSelectedItemID] = useState(null);
  const [trigger,setTrigger] = useState(false)
  const [activeCreateForm,setActiveCreateForm] = useState(false)

  const handleChange = (e) => {
    setFilter({
      ...filter,
      query: searchRef.current.value,
    })
  }

  const handleCreateForm = () => {
    let newState = !activeCreateForm
    setActiveCreateForm(newState)
  }

  useEffect(() => {
    const controller = new AbortController()
    fetch('http://localhost:5000/items', {
        signal: controller.signal,
    })
        .then(res => res.json())
        .then(data => {
          setData(data)}
          )
        .catch(error => {
            if (error.name !== 'AbortError') {
                console.error(error.message)
            }
        })

    return () => controller.abort()
}, [trigger])

  return ( data && 
    <Container className='px-4 py-2'>
      <Row>
        <Col>
          <Form className="d-flex" onChange={(e) => handleChange(e)} >
            <Form.Control  ref={searchRef}
              type="search"
              placeholder="Begin typing to search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Col>
        <Col>
          <h4>Filters</h4>
        </Col>
        <Col>
        {user && <Button onClick={()=>handleCreateForm()} variant="primary">+ New</Button> }
          
        </Col>
      </Row>
        
      <Row>
        <Col>
          <h5>Item ID</h5>
        </Col>
        <Col>
          <h5>Create Date</h5>
        </Col>
        <Col>
          <h5>Update Date</h5>
        </Col>
        <Col>
          <h5>Name</h5>
        </Col>
        <Col xl={3} lg={3} md={3}>
          <h5>Description</h5>
        </Col>
        <Col>
          <h5>Quantity</h5>
        </Col>
        <Col>
          <h5>Manager</h5>
        </Col>
      </Row>
      {activeCreateForm && <NewItemForm/>}
      {data.map((item,index)=><Item key={index} trigger={trigger} setTrigger={setTrigger} setSelectedItemID={setSelectedItemID} selectedItemID={selectedItemID} filter={filter} item={item}/>)}
    </Container>
   );
}
 
export default Inventory;