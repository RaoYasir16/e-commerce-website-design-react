import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import section_category1 from "../../../images/section-category-1.jpg";
import product_img1 from "../../../images/product-img-1.jpg";
import product_img2 from "../../../images/product-img-2.jpg";
import product_img3 from "../../../images/product-img-3.jpg";


const GamerWorld = () => {
      const popularPrd = [
          {rating:4,text:"Galaxy Z Fold3 5G 3 colors in 512GB",img:product_img1,firtPrice:'$1200',secondPrice:"$999"},
          {rating:3,text:"Unisure aliqua repreh ex cupt qui elit officia",img:product_img2,firtPrice:'$1500',secondPrice:"$1399"},
          {rating:5,text:"Kenegy consectetur id ex nulla in adipisicing deserunt",img:product_img3,firtPrice:'$9000',secondPrice:"$7999"},
      ]

  return (
    <>
      <Box sx={{ paddingTop: 3,mb:2 }}>
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "600",
            fontFamily: "Inter, sans-serif",
            mb: 2,
          }}
        >
          Gamer World
        </Typography>

        <Grid
          container
          sx={{ display: "flex", flexDirection: "row" }}
          justifyContent="flex-start"
          spacing={2}
        >
          <Grid size={{xs:6,md:3}}>
            <Box
              sx={{
                backgroundImage: `url(${section_category1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: {xs:"400px",md:"300px"},
                width: { xs: "80%", md: "170px" },
                display: "flex",
                flexDirection: "column",
                p: { xs: 2, md: 5 },
              }}
            >
              <Typography
                sx={{ fontSize: 16, fontWeight: "600", mb: 1, color: "black" }}
              >
                Mobile & Tablet
              </Typography>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Xiaomi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Apple
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Google
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Samsung
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
      </Box>
    </>
  );
};

export default GamerWorld;
