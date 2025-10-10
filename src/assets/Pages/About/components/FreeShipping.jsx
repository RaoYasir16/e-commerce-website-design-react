import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

const FreeShipping = () => {
  const items = [
    {
      icon: <LocalShippingOutlinedIcon fontSize="large" />,
      title: "Free Shipping",
      desc: "When ordering over $100",
    },
    {
      icon: <RefreshOutlinedIcon fontSize="large" />,
      title: "Free Return",
      desc: "Get free return in 30 days",
    },
    {
      icon: <LockOutlinedIcon fontSize="large" />,
      title: "Secure Payment",
      desc: "100% secure payment",
    },
    {
      icon: <EmojiEventsOutlinedIcon fontSize="large" />,
      title: "Best Quality",
      desc: "Premium products only",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          maxWidth: "100%",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#FFBB38",
          p: 3,
        }}
      >
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2}}>
              {item.icon}
              <Box>
                <Typography
                  sx={{ fontWeight: 600, color: "black", fontSize: "18px" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: 400, color: "black" }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FreeShipping;
