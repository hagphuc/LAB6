'use client'
import Link from 'next/link';
import { Card, CardContent, Typography, Button, CardMedia, Grid, Box, Container } from '@mui/material';
import Layout from './components/Layout';
import AddToCartButton from './components/AddToCartButton'; 

const products = [
  { id: 1, name: 'FELICE', price: 82, image: '/images/product1.jpg' },
  { id: 2, name: 'ANASTASIE', price: 156, image: '/images/product2.jpg' },
  { id: 3, name: 'GEMMA', price: 108, image: '/images/product3.jpg' },
  { id: 4, name: 'PAULETTE', price: 78, image: '/images/product4.jpg' },
  { id: 5, name: 'Red Flower', price: 82, image: '/images/product5.jpg' },
  { id: 6, name: 'Pink Flower', price: 82, image: '/images/product6.jpg' },
];

export default function Home() {
  return (
    <Layout>
      <Container>
        <Box py={4}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Fresh Flower
          </Typography>
          <Grid container spacing={4}>
            {products.map(product => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card className="shadow-lg">
                  <Link href={`/products/${product.id}`} passHref>
                      <CardMedia
                        component="img"
                        height="200"
                        image={product.image}
                        alt={product.name}
                        style={{ width: '100%', objectFit: 'cover' }}
                      />
                  </Link>
                  <CardContent>
                    <Typography variant="h5" component="div" align="center">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                      Price ${product.price}
                    </Typography>
                  </CardContent>
                  <Box display="flex" justifyContent="center" pb={2}>
                    <Box mr={1}>
                      <AddToCartButton product={product} />
                    </Box>
                    <Box ml={1}>
                      <Link href={`/products/${product.id}`} passHref>
                        <Button variant="outlined" color="primary">
                          View Details
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
