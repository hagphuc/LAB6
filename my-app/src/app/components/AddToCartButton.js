"use client";
import { useState } from "react";
import { Button, Modal, Backdrop, Fade, Box, Typography } from "@mui/material";
import Link from "next/link";
import { addToCart } from "../utils/LocalStorage";

const AddToCartButton = ({ product }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddToCart = () => {
    addToCart(product);
    handleOpen();
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleAddToCart}>
        Add to Cart
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {product.name} added to Cart!
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              You can continue shopping or proceed to checkout.
            </Typography>
            <Box mt={2} display="flex" justifyContent="space-between">
              <Button variant="contained" color="primary" onClick={handleClose}>
                Continue Shopping
              </Button>
              <Link href="/carts" passHref>
                <Button variant="outlined" color="primary">
                  Go to Cart
                </Button>
              </Link>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default AddToCartButton;
