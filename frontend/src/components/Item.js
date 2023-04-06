import { Row,Col, Button } from "react-bootstrap";
import { useContext } from "react";
import './Item.css'
import { UserContext } from "../App";

const Item = ({item,filter,selectedItemID,setSelectedItemID,setTrigger,trigger}) => {
  const {user, setUser} = useContext(UserContext);

  const handleClick = (id) => {
    if(id===selectedItemID){
      setSelectedItemID(null)
    } else {
      setSelectedItemID(id)
    }
  }

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

  let joined = `${item.description}${item.name}${item.first_name}${item.last_name}`
  if(filter.query){
    if(joined.toLowerCase().includes(filter.query.toLowerCase())){
      return ( 
        <Row onClick={()=>handleClick(item.id)} key={item.id} className='item-row py-1 my-1 rounded'>
          <Col>
            {item.id}
          </Col>
          <Col>
            {item.created_at.slice(0,10)}
          </Col>
          <Col>
            {item.updated_at.slice(0,10)}
          </Col>
          <Col>
            {item.name}
          </Col>
          {selectedItemID === item.id &&
            <Col xl={3} lg={3} md={3}>
              {item.description}
            </Col>
          } 
          {selectedItemID !== item.id &&
            <Col xl={3} lg={3} md={3}>
              {item.description.slice(0,100).concat('...')}
            </Col>
          } 
          <Col>
            {item.quantity}
          </Col>
          {user && user.id === item.user_id &&
            <Col>
              Me
              <Button onClick={(e)=>handleDelete(e,item.id)} variant="danger">Delete</Button>
              <Button variant="primary">Edit</Button>
            </Col>
          }
          {(!user || user.id !== item.user_id) &&
            <Col>
              {item.first_name} {item.last_name}
            </Col>
          }
        </Row>
      );
    }
  } else {
    return ( 
      <Row onClick={()=>handleClick(item.id)} key={item.id} className='item-row py-1 my-1 rounded'>
        <Col>
          {item.id}
        </Col>
        <Col>
          {item.created_at.slice(0,10)}
        </Col>
        <Col>
          {item.updated_at.slice(0,10)}
        </Col>
        <Col>
          {item.name}
        </Col>
        {selectedItemID === item.id &&
            <Col xl={3} lg={3} md={3}>
              {item.description}
            </Col>
          } 
          {selectedItemID !== item.id &&
            <Col xl={3} lg={3} md={3}>
              {item.description.slice(0,100).concat('...')}
            </Col>
          } 
        <Col>
          {item.quantity}
        </Col>
        {user && user.id===item.user_id && 
          <Col>
            Me
            <Button onClick={(e)=>handleDelete(e,item.id)} variant="danger">Delete</Button>
            <Button variant="primary">Edit</Button>
          </Col>
        }
        {(!user || user.id !== item.user_id) &&
        <Col>
          {item.first_name} {item.last_name}
        </Col>
        }
      </Row>
     );
  }
}
 
export default Item;