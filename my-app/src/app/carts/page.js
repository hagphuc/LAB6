"use client";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  Button,
} from "@mui/material";
import Layout from "../components/Layout"; // Ensure you're importing your layout
import { getCart, removeFromCart } from "../utils/LocalStorage";
import { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const deliveryFee = 35.0;
  const total = subtotal + deliveryFee;

  const handleRemove = (id) => {
    removeFromCart(id);
    setCart(getCart());
  };
  return (
    <Layout>
      <Container>
        <Box py={4}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Shopping Cart
          </Typography>
          {cart.length === 0 ? (
            <Typography variant="h6" align="center">
              Your cart is empty
            </Typography>
          ) : (
            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                {cart.map((item) => (
                  <Card
                    key={item.id}
                    className="shadow-lg mb-4"
                    style={{ marginBottom: "20px" }}
                  >
                    <Grid container>
                      <Grid item xs={12} md={4}>
                        <CardMedia
                          component="img"
                          height="200"
                          image={item.image}
                          alt={item.name}
                          style={{ width: "100%", objectFit: "cover" }}
                        />
                      </Grid>
                      <Grid item xs={12} md={8}>
                        <CardContent>
                          <Typography variant="h5" component="div">
                            {item.name}
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            ${item.price.toFixed(2)}
                          </Typography>
                          <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => handleRemove(item.id)}
                          >
                            Remove
                          </Button>
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Card>
                ))}
              </Grid>
              <Grid item xs={12} md={4}>
                <Card className="shadow-lg">
                  <CardContent>
                    <Typography variant="h6" component="div" gutterBottom>
                      Order Summary
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Subtotal: ${subtotal.toFixed(2)}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Delivery Fee: ${deliveryFee.toFixed(2)}
                    </Typography>
                    <Typography variant="h5" component="div" gutterBottom>
                      Total: ${total.toFixed(2)}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                      style={{ marginTop: "16px" }}
                    >
                      Checkout
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      size="large"
                      style={{ marginTop: "8px" }}
                    >
                      Checkout with PayPal
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}
        </Box>
      </Container>
    </Layout>
  );
}
