// Import necessary dependencies
import {
  Container,
  Grid,
  Typography,
  CardMedia,
  Box,
} from "@mui/material";
import Layout from "../../components/Layout"; // Ensure you're importing your layout  
import AddToCartButton from "../../components/AddToCartButton";
const products = [
  {
    id: "1",
    name: "Petite Soleil",
    price: 59,
    image: "/images/product1.jpg",
    description: "Bouquet of 7 roses in a vase",
  },
  {
    id: "2",
    name: "ANASTASIE",
    price: 156,
    image: "/images/product2.jpg",
    description: "Luxury flower arrangement with vase",
  },
  {
    id: "3",
    name: "GEMMA",
    price: 108,
    image: "/images/product3.jpg",
    description: "Elegant bouquet with special packaging",
  },
  {
    id: "4",
    name: "PAULETTE",
    price: 78,
    image: "/images/product4.jpg",
    description: "Charming bouquet with unique vase",
  },
  {
    id: "5",
    name: "Red Flower",
    price: 82,
    image: "/images/product5.jpg",
    description: "Beautiful red flowers in a vase",
  },
  {
    id: "6",
    name: "Pink Flower",
    price: 82,
    image: "/images/product6.jpg",
    description: "Lovely pink flowers in a vase",
  },
];

// Static generation parameters
export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

// Product detail page component
export default function Page({ params }) {
  const { id } = params;
  const product = products.find((p) => p.id === id);

  if (!product) return <div>Product not found</div>;

  return (
    <Layout>
      <Container>
        <Grid container spacing={4} py={4}>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              height="400"
              image={product.image}
              alt={product.name}
              style={{ width: "100%", objectFit: "cover" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h1" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              ${product.price}.00
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {product.description}
            </Typography>
            <Box mt={2} display="flex" justifyContent="flex-start">
              <AddToCartButton product={product} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
