import {  Col, Row } from "react-bootstrap"
import storeItems from "../data/items.json"
import StoreElm from "../components/StoreElm"



const Store = () => {
  
  return (
    <>
    <div>Store</div>
    <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item)=>(
          <Col key={item.id}>
             <StoreElm {...item}/>   
          </Col>

        ))}
    </Row>
    </>
  )
}

export default Store