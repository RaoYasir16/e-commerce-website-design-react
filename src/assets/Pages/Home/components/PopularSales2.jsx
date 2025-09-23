import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Button, InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

import product_img1 from "../../../images/product-img-1.jpg";
import product_img2 from "../../../images/product-img-2.jpg";
import product_img3 from "../../../images/product-img-3.jpg";
import product_img4 from "../../../images/product-img-4.jpg";
import product_img5 from "../../../images/product-img-5.jpg";
import product_img6 from "../../../images/product-img-6.jpg";
import product_img7 from "../../../images/product-img-7.jpg";

import discount_img1 from "../../../images/discount-banner-1.jpg"

const PopularSales2 = () => {
  const popularPrd = [
    {
      rating: 4,
      text: "Galaxy Z Fold3 5G 3 colors in 512GB",
      img: product_img1,
      firtPrice: "$1200",
      secondPrice: "$999",
    },
    {
      rating: 3,
      text: "Unisure aliqua repreh ex cupt qui elit officia",
      img: product_img2,
      firtPrice: "$1500",
      secondPrice: "$1399",
    },
    {
      rating: 5,
      text: "Kenegy consectetur id ex nulla in adipisicing deserunt",
      img: product_img3,
      firtPrice: "$9000",
      secondPrice: "$7999",
    },
    {
      rating: 5,
      text: "Kenegy consectetur id ex nulla in adipisicing deserunt",
      img: product_img4,
      firtPrice: "$9000",
      secondPrice: "$7999",
    },
    {
      rating: 5,
      text: "Kenegy consectetur id ex nulla in adipisicing deserunt",
      img: product_img5,
      firtPrice: "$9000",
      secondPrice: "$7999",
    },
    {
      rating: 5,
      text: "Kenegy consectetur id ex nulla in adipisicing deserunt",
      img: product_img6,
      firtPrice: "$9000",
      secondPrice: "$7999",
    },
    {
      rating: 5,
      text: "Kenegy consectetur id ex nulla in adipisicing deserunt",
      img: product_img7,
      firtPrice: "$9000",
      secondPrice: "$7999",
    },
    {
        rating: 3,
        text: "Unisure aliqua repreh ex cupt qui elit officia",
        img: product_img2,
        firtPrice: "$1500",
        secondPrice: "$1399",
      },
      {
        rating: 5,
        text: "Kenegy consectetur id ex nulla in adipisicing deserunt",
        img: product_img3,
        firtPrice: "$9000",
        secondPrice: "$7999",
      },
  ];


  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribed with:", email);
  };

  return (
    <>
    <Box sx={{ mt: "30px", mb: "30px" }}>
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "600",
          fontFamily: "Inter, sans-serif",
          color: "black",
          mb: 3,
          textAlign: "left",
        }}
      >
        Popular Sales
      </Typography>

      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >

        {popularPrd.map((item,index)=>(
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
              gap: 2,
              height:"90px"
            }}
          >
            <Box
              sx={{ width: "30%" }}
              component={"img"}
              src={item.img}
            />
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "600",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {item.text}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                <Typography
                  sx={{
                    textDecoration: "line-through",
                    color: "gray",
                    fontSize: "18px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight:"600"
                  }}
                >
                 {item.firtPrice}
                </Typography>
                <Typography
                  sx={{
                    color: "red",
                    fontSize: "18px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight:"600"
                  }}
                >
                  {item.secondPrice}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        ))}
      </Grid>
    </Box>
    
    </>
  );
};

export default PopularSales2;
