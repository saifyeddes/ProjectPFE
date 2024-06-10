import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';
import '../css/All.css';
function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <Card className='Cardcss'>
      <Link to={`/product/${product.slug}`}>
        <img          style={{ width: '200px', height: '200px' }}
  src={product.image} className="card-img-top" alt={product.name} />
      
      </Link>
      <Card.Body style={{textAlign: 'center'}}>
        <Link to={`/product/${product.slug}`} style={{color:'black' , textDecoration:'none' , fontSize: '15px' , fontWeight: 'bold'}}>
          {product.name}
        </Link>
        <Card.Text className='product_desc' >${product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button className='Buttoncss' onClick={() => addToCartHandler(product)}>Add to cart</Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default Product;
