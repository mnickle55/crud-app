import { useEffect, useState,useRef } from "react";
import Form  from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

const Inventory = () => {

  const [data,setData] = useState(null)
  const searchRef = useRef(null);
  
  //brought over from mini-app one -needs refactor
  const [filter,setFilter] = useState({"query":null,"watched":null})

  //brought over from mini-app one -needs refactor
  const handleKeyDown = (e) => {
    if(e.key === 'Backspace' && (searchRef.current.firstElementChild.value.length===1 || searchRef.current.firstElementChild.value.length===0)){
      setFilter({
        ...filter,
        query: null,
      })
    }
    if(e.key === 'Enter'){
      e.preventDefault();
      handleSearch();
    }
  }

  //brought over from mini-app one -needs refactor
  const handleSearch = () => {
    let query = searchRef.current.value;
    setFilter({
      ...filter,
      query: query,
    })
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
}, [])


  
  return ( data && 
    <>
      <Form className="d-flex" ref={searchRef} onKeyDown={(e)=>handleKeyDown(e)} >
            <Form.Control 
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark" onClick={()=>handleSearch()}>Search</Button>
          </Form>
      <ul>
      {data.map(item =>
        <>
          <li>{item.name}</li>
          <li>{item.description}</li>
        </>
      )}
      </ul>
    </>
   );
}
 
export default Inventory;