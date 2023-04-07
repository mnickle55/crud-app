import { useEffect, useState, useRef, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import { Row, Col } from "react-bootstrap";
import Item from "./Item";
import NewItemForm from "./NewItemForm";
import { UserContext } from "../App";
import './Home.css'
import Spinner from "react-bootstrap/Spinner";

const Inventory = () => {
  const [data, setData] = useState(null)
  const searchRef = useRef(null);
  const { user, setUser } = useContext(UserContext);
  const [filter, setFilter] = useState({ "query": null,"user":null });
  const [selectedItemID, setSelectedItemID] = useState(null);
  const [trigger, setTrigger] = useState(false)
  const [activeCreateForm, setActiveCreateForm] = useState(false)
  const [loading,setLoading] = useState(false)

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

  const handleShowUserInventory = () => {
    if(user.id===filter.user){
      setFilter({
        ...filter,
        user: null
      })
    } else {
      setFilter({
        ...filter,
        user: user.id
      })
    }
  }

  //create loading effect for inventory data
  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const controller = new AbortController()
    fetch('http://localhost:5000/items', {
      signal: controller.signal,
    })
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
      .catch(error => {
        if (error.name !== 'AbortError') {
          console.error(error.message)
        }
      })

    return () => controller.abort()
  }, [trigger])

  return (data &&
    <div fluid className='px-4 py-2 inventory-container'>
      <Row className='mb-4'>
        <h1>Inventory</h1>
        <Col className='mb-2'>
          <Form className="d-flex" onChange={(e) => handleChange(e)} >
            <Form.Control ref={searchRef}
              type="search"
              placeholder="Begin typing to search..."
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Col>
        <Col>
        {user && user.id === filter.user && <Button onClick={()=>handleShowUserInventory()} variant="secondary">Show All Inventory</Button>
        }
        {user && user.id !== filter.user && <Button onClick={()=>handleShowUserInventory()} variant="dark">Show My Inventory</Button>
        }
        </Col>
        <Col className='text-end mb-3'>
          {user && <Button onClick={() => handleCreateForm()} variant="primary">+ New Item</Button>}
        </Col>
        <hr></hr>
      </Row>
      {activeCreateForm &&
        <>
          <h4>Create New Inventory Item</h4>
          <NewItemForm setActiveCreateForm={setActiveCreateForm} trigger={trigger} setTrigger={setTrigger} />
          <hr></hr>
        </>
      }
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
      <hr></hr>
      {loading && <Spinner/>}
      {!loading && <>
        {data.map((item, index) => 
        <Item key={index} trigger={trigger} setTrigger={setTrigger} setSelectedItemID={setSelectedItemID} selectedItemID={selectedItemID} filter={filter} item={item} />)}
      </> }
      
    </div>
  );
}

export default Inventory;