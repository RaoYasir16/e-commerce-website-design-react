import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import product_img1 from "../../../images/product-img-1.jpg";
import product_img2 from "../../../images/product-img-2.jpg";
import product_img3 from "../../../images/product-img-3.jpg";
import product_img4 from "../../../images/product-img-4.jpg";
import product_img5 from "../../../images/product-img-5.jpg";
import product_img6 from "../../../images/product-img-6.jpg";
import product_img7 from "../../../images/product-img-7.jpg";

import add_4 from "../../../images/ads-4.png";

const HomeAppliance = () => {
  const newArrival = [
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
      img: product_img3,
      firtPrice: "$9000",
      secondPrice: "$7999",
    },
  ];
  return (
    <>
      <Box>
        <Box sx={{ mb: "30px", p: "30px", background: "#FFFAEF" }}>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "600",
              fontFamily: "Inter, sans-serif",
              color: "black",
              textAlign: "center",
            }}
          >
            Home Appliance
          </Typography>
        </Box>

        <Box
          sx={{
            m: "30px auto",
            maxWidth: "80%",
            textAlign: "center",
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            {newArrival.map((item, index) => (
              <Grid size={{ xs: 6, md: 4 }} key={index}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: { xs: "400px", md: "300px" },
                    width: { xs: "80%", md: "200px" },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: { xs: 2, md: 5 },
                    border: "2px solid gray",
                    m: "10px auto",
                    textAlign: "center",
                  }}
                >
                  {/* Image */}
                  <Box
                    component="img"
                    src={item.img}
                    alt="Product"
                    sx={{
                      width: "100px",
                      height: "auto",
                      mb: 2,
                    }}
                  />
                  <Box sx={{ textAlign: "center", color: "#000" }}>
                    <Rating
                      name="custom-rating"
                      value={item.rating}
                      readOnly
                      sx={{
                        "& .MuiRating-iconFilled": {
                          color: "orange",
                        },
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", gap: 1 }}
                  >
                    <Typography
                      sx={{
                        textDecoration: "line-through",
                        color: "gray",
                        fontSize: "14px",
                      }}
                    >
                      {item.firtPrice}
                    </Typography>
                    <Typography sx={{ color: "red", fontSize: "14px" }}>
                      {item.secondPrice}
                    </Typography>
                  </Box>

                  <Box>
                    <Button
                      sx={{
                        mt: 2,
                        background: "orange",
                        color: "black",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                      variant="contained"
                      startIcon={<ShoppingCartIcon />}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box marginTop={"30px"}>
            <Box
              sx={{ height: "100%", width: "100%" }}
              component={"img"}
              src={add_4}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomeAppliance;
