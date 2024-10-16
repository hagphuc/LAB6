import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Container from "@mui/material/Container";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <AppBar sx={{ bgcolor: "success.main" }} position="static">
        <Toolbar className="container mx-auto flex justify-between">
          <Box display="flex" alignItems="center">
            <Link href="/" passHref>
              <IconButton
                edge="start"
                color="warning"
                aria-label="home"
                sx={{ mr: 2 }}
              >
                <HomeIcon />
              </IconButton>
            </Link>
          </Box>
          <Typography
            color="warning"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            My Flowers Shop
          </Typography>
          <Box display="flex">
            <Link href="/carts" passHref>
              <Button color="warning" endIcon={<ShoppingCartIcon />}></Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4 mt-4">
        <Container maxWidth="lg">
          <Typography variant="body1" align="center">
            &copy; {new Date().getFullYear()} My Flowers Website
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
