import { useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import slider from './slider.jpg';
import slider2 from './slider2.png';
import slider3 from './slider3.jpg';
import slider4 from './slider4.jpg';
import slider5 from './slider5.png';

import Carousel from 'react-bootstrap/Carousel';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Lutin</title>
      </Helmet>
      <Carousel style={{ paddingBottom: '90px' }}>
        <Carousel.Item interval={800}>
          <img
            style={{ height: '500px', width: '100%' }}
            src={slider}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            style={{ height: '500px', width: '100%' }}
            src={slider2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            style={{ height: '500px', width: '100%' }}
            src={slider3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            style={{ height: '500px', width: '100%' }}
            src={slider4}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            style={{ height: '500px', width: '100%' }}
            src={slider5}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <h1 style={{ paddingBottom: '20px', textAlign: 'center' }}>
        Our Products
      </h1>

      <div style={{ paddingBottom: '80px' }} className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col
                style={{ paddingBottom: '40px', paddingRight: '100px' }}
                key={product.slug}
                sm={6}
                md={4}
                lg={3}
                className="mb-3"
              >
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}
export default HomeScreen;
