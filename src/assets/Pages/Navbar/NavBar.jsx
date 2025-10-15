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
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // For category dropdown

  const isMobile = useMediaQuery("(max-width:600px)");

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Categorys", path: "" },
    { title: "Contact", path: "/contact" },
  ];

  // Categories list
  const categories = [
    { title: "Phone & Tablet", path: "/category/phones" },
    { title: "Gaming & Sports", path: "/category/gaming" },
    { title: "Home Appliance", path: "/category/home-appliance" },
    { title: "Fashion Clothes", path: "/category/fashion" },
  ];

  // Dropdown handlers
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

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
            <IconButton color="inherit" edge="end" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
              <List sx={{ width: 200 }}>
                {navLinks.map((item) =>
                  item.title === "Categorys" ? (
                    <Box key={item.title}>
                      <ListItem>
                        <ListItemText primary="Categorys" />
                      </ListItem>
                      {categories.map((cat) => (
                        <ListItem
                          key={cat.title}
                          button
                          component={Link}
                          to={cat.path}
                          onClick={() => setOpen(false)}
                          sx={{ pl: 4 }}
                        >
                          <ListItemText primary={cat.title} />
                        </ListItem>
                      ))}
                    </Box>
                  ) : (
                    <ListItem
                      button
                      key={item.title}
                      component={Link}
                      to={item.path}
                      onClick={() => setOpen(false)}
                    >
                      <ListItemText primary={item.title} />
                    </ListItem>
                  )
                )}
              </List>
            </Drawer>
          </>
        ) : (
          /* Desktop - Normal Buttons + Dropdown */
          <Box>
            {navLinks.map((item) =>
              item.title === "Categorys" ? (
                <React.Fragment key={item.title}>
                  <Button
                    sx={{ color: "white" }}
                    onClick={handleMenuOpen}
                  >
                    {item.title}
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    {categories.map((cat) => (
                      <MenuItem
                        key={cat.title}
                        component={Link}
                        to={cat.path}
                        onClick={handleMenuClose}
                      >
                        {cat.title}
                      </MenuItem>
                    ))}
                  </Menu>
                </React.Fragment>
              ) : (
                <Button
                  key={item.title}
                  sx={{ color: "white" }}
                  component={Link}
                  to={item.path}
                >
                  {item.title}
                </Button>
              )
            )}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
