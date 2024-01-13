
import { Button,Card } from 'react-bootstrap'
import { useShoppingCart } from './ShoppingCartContext'

const StoreElm = ( {id,name,price,imgUrl}) => {
    const { getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart} =useShoppingCart()
    const quantity=getItemQuantity(id)
    
   
  return (
    <Card className="h-100">
    <Card.Img height='200px' style={{objectFit:'cover'}} variant="top" src={imgUrl}/>
    <Card.Body className="d-flex justify-content-between align-items-baseline mb-4">
      <Card.Title className="fs-2">{name}</Card.Title>
      <Card.Text className="ms-2 text-muted">{price}</Card.Text>
    </Card.Body>
    <div >
        {quantity===0? 
          (<Button className="w-100" onClick={()=> increaseCartQuantity(id)}>+ Add To Cart</Button>)
        :
        <div className="d-flex flex-column align-items-center justify-content-center"
              style={{gap:'.5rem'}}>
            <div className="d-flex align-items-center justify-content-center"
              style={{gap:'.5rem'}}>
              <Button onClick={()=>decreaseCartQuantity(id)}>-</Button>
              <span className="fs-3">{quantity} <span className="fs-5">in cart</span></span>
              <Button onClick={()=>increaseCartQuantity(id)}>+</Button>
            </div>
            <Button variant="danger" size="sm" onClick={()=>removeFromCart(id)}>Remove</Button>
        </div>}
      </div>
  </Card>
  )
}

export default StoreElm