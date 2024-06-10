import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'mouayaid',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'saif',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'four1',
      slug: 'four1',
      category: 'four',
      image: '/images/four1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'DYSIS',
      rating: 4.5,
      numReviews: 10,
      description: 'Four électrique',
    },
    {
      name: 'four2',
      slug: 'four2',
      category: 'four',
      image: '/images/four2.jpg',
      price: 250,
      countInStock: 20,
      brand: 'pwc',
      rating: 4.0,
      numReviews: 10,
      description: 'Four électrique',
    },
    {
      name: 'four3',
      slug: 'four3',
      category: 'four',
      image: '/images/four3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'KPMG',
      rating: 4.5,
      numReviews: 14,
      description: 'Four électrique',
    },
    
  ],

};
export default data;
