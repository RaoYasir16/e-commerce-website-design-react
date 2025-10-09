import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Navbar() {
  const [open, setOpen] = useState(false);

  // check screen size (mobile < 600px)
  const isMobile = useMediaQuery("(max-width:600px)");

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Left side - Logo */}
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{ height: 40, cursor: "pointer" }}
        />

        {/* Right side */}
        {isMobile ? (
          <>
            {/* Mobile - Hamburger Menu */}
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
              <List sx={{ width: 200 }}>
                {navLinks.map((item) => (
                  <ListItem
                    button
                    key={item.title}
                    component={Link}
                    to={item.path}
                    onClick={() => setOpen(false)}
                  >
                    <ListItemText primary={item.title} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          /* Desktop - Normal Buttons */
          <Box>
            {navLinks.map((item) => (
              <Button
                key={item.title}
                sx={{ color: "white" }}
                component={Link}
                to={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
