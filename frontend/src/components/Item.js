import { Row,Col, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import './Item.css'
import { UserContext } from "../App";
import EditItemForm from "./EditItemForm";
import {MdModeEditOutline} from 'react-icons/md'


const Item = ({item,filter,selectedItemID,setSelectedItemID,setTrigger,trigger}) => {
  const {user, setUser} = useContext(UserContext);
  const [editItem,setEditItem] = useState(null)

  const handleClick = (id) => {
    if(id===selectedItemID){
      setSelectedItemID(null)
    } else {
      setSelectedItemID(id)
    }
  }



  const handleEdit = (e,id) => {
    e.stopPropagation()
    setEditItem(id)
  }

  let joined = `${item.description}${item.name}${item.first_name}${item.last_name}`
  if(filter.query){
    if(joined.toLowerCase().includes(filter.query.toLowerCase())){
      if(editItem){
        return (
          <EditItemForm setEditItem={setEditItem} trigger={trigger} setTrigger={setTrigger} item={item}/>
        )
      }
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
            <Col className="item-description" xl={3} lg={3} md={3}>
              {item.description}
            </Col>
          } 
          {selectedItemID !== item.id && item.description.length>100 &&
            <Col className="item-description" xl={3} lg={3} md={3}>
              {item.description.slice(0,100).concat('...')}
            </Col>
          } 
          {selectedItemID !== item.id && item.description.length<100 &&
            <Col className="item-description" xl={3} lg={3} md={3}>
              {item.description}
            </Col>
          } 
          <Col>
            {item.quantity}
          </Col>
          {user && user.id === item.user_id &&
            <Col>
              <Row>
                <p className='me-text'>Me</p>
              </Row>
              <Row>
                <Col>
                  <Button className='edit-btn' onClick={(e) => handleEdit(e, item.id)}><MdModeEditOutline/></Button>
                </Col>
              </Row>
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
    if(editItem){
      return (
        <EditItemForm setEditItem={setEditItem} trigger={trigger} setTrigger={setTrigger} item={item}/>
      )
    }
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
            <Col className="item-description" xl={3} lg={3} md={3}>
              {item.description}
            </Col>
          } 
          {selectedItemID !== item.id && item.description.length>100 &&
            <Col className="item-description" xl={3} lg={3} md={3}>
              {item.description.slice(0,100).concat('...')}
            </Col>
          } 
          {selectedItemID !== item.id && item.description.length<100 &&
            <Col className="item-description" xl={3} lg={3} md={3}>
              {item.description}
            </Col>
          } 
        <Col>
          {item.quantity}
        </Col>
        {user && user.id===item.user_id && 
          <Col>
          <Row>
            <Col>
              <p className='me-text'>Me</p>
            </Col>
            <Col className='p-0 m-0 d-flex align-items-start'>
              <Button className='edit-btn' onClick={(e)=>handleEdit(e,item.id)} variant="light"><MdModeEditOutline/></Button>
            </Col>
            
            
          </Row>
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