import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


import section_category2 from "../../../images/section-category-2.jpg";
import product_img1 from "../../../images/product-img-1.jpg";
import product_img2 from "../../../images/product-img-2.jpg";
import product_img3 from "../../../images/product-img-3.jpg";

import ads3 from "../../../images/ads-3.png";

const PopularSales = () => {
    const popularPrd = [
        {rating:4,text:"Galaxy Z Fold3 5G 3 colors in 512GB",img:product_img1,firtPrice:'$1200',secondPrice:"$999"},
        {rating:3,text:"Unisure aliqua repreh ex cupt qui elit officia",img:product_img2,firtPrice:'$1500',secondPrice:"$1399"},
        {rating:5,text:"Kenegy consectetur id ex nulla in adipisicing deserunt",img:product_img3,firtPrice:'$9000',secondPrice:"$7999"},
    ]
  return (
    <>
      <Box sx={{ paddingTop: 3, mb: 2 }}>
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "600",
            fontFamily: "Inter, sans-serif",
            mb: 2,
          }}
        >
          Popular Sales
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid size={{xs:6,md:3}}>
            <Box
              sx={{
                backgroundImage: `url(${section_category2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: 300,
                width: { xs: "80%", md: "170px"},
                // borderRadius: 2,
                p: { xs: 2, md: 5 },
                color: "#fff",
              }}
            >
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: "600",
                  mb: 1,
                  color: "black",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Electronics
              </Typography>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>
                  <a
                    href="#"
                    style={{
                      mt: "5px",
                      textDecoration: "none",
                      color: "gray",
                      fontSize: "14",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Xiaomi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      mt: "5px",
                      textDecoration: "none",
                      color: "gray",
                      fontSize: "14",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Apple
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      mt: "5px",
                      textDecoration: "none",
                      color: "gray",
                      fontSize: "14",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Google
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "gray",
                      fontSize: "14",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Samsung
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "14",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Shop now
                  </a>
                </li>
              </ul>
            </Box>
          </Grid>

          {popularPrd.map((item,index)=>(
          <Grid size={{xs:6,md:3}} key={index}>
            <Box
              sx={{
                backgroundColor: "white",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: {xs:"400px",md:"300px"},
                width: { xs: "80%", md: "170px" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                p: { xs: 2, md: 5 },

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
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
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

        <Box mt={"30px"}>
        <Box sx={{maxWidth:"100%"}} component={"img"} src={ads3} />
      </Box>

      </Box>
    </>
  );
};

export default PopularSales;
