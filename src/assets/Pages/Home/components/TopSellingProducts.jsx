import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import React from "react";

import product_img4 from "../../../images/product-img-4.jpg";
import product_img5 from "../../../images/product-img-5.jpg";
import product_img6 from "../../../images/product-img-6.jpg";
import product_img7 from "../../../images/product-img-7.jpg";

const TopSellingProducts = () => {
  return (
    <>
      <Box sx={{ mt: "50px" }}>

        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "600",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Top Selling Products
        </Typography>
        <Grid container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection:"row",
            justifyContent: "center",
            mb: "50px",
            mt: "20px",
          }}
        >
          <Grid size={{xs:12,md:6}}>
            <Box 
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                display: "flex",
                width: {xs:"300px",md:"450px"},
                height: "200px",
                pt: 4,
                pl: 3,
                pr: 3,
                pb:3,
                gap:2
              }}
            >
              <Box
                component={"img"}
                sx={{ width: {xs:"150px"}, height:{xs:"150px"},  }}
                src={product_img4}
              />
              <Box>
                <Rating
                  sx={{
                    "& .MuiRating-icon": {
                      fontSize: "20px",
                    },
                  }}
                />
                <Typography>
                  Semmei ipsum dolore eiusmod dolor officia do nisi
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "left", gap: 1 }}>
                  <Typography
                    sx={{
                      textDecoration: "line-through",
                      color: "gray",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    $9000
                  </Typography>
                  <Typography
                    sx={{ color: "red", fontSize: "18px", fontWeight: "600" }}
                  >
                    $8000
                  </Typography>
                </Box>
                <Box>
                  <Button
                    sx={{
                      fontSize: "13",
                      fontWeight: "600",
                      fontFamily: "Inter, sans-serif",
                      textTransform: "none",
                      backgroundColor: "#FFA500",
                      color: "black",
                      mt:2
                    }}
                  >
                    Add To Card
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid size={{xs:12,md:6}}>
            <Box 
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                display: "flex",
                width: {xs:"300px",md:"450px"},
                height: "200px",
                pt: 4,
                pl: 3,
                pr: 3,
                pb:3,
                gap:2
              }}
            >
              <Box
                component={"img"}
                sx={{ width: {xs:"150px"}, height:{xs:"150px"},  }}
                src={product_img5}
              />
              <Box>
                <Rating
                  sx={{
                    "& .MuiRating-icon": {
                      fontSize: "20px",
                    },
                  }}
                />
                <Typography>
                  Semmei ipsum dolore eiusmod dolor officia do nisi
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "left", gap: 1 }}>
                  <Typography
                    sx={{
                      textDecoration: "line-through",
                      color: "gray",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    $9000
                  </Typography>
                  <Typography
                    sx={{ color: "red", fontSize: "18px", fontWeight: "600" }}
                  >
                    $8000
                  </Typography>
                </Box>
                <Box>
                  <Button
                    sx={{
                      fontSize: "13",
                      fontWeight: "600",
                      fontFamily: "Inter, sans-serif",
                      textTransform: "none",
                      backgroundColor: "#FFA500",
                      color: "black",
                      mt:2
                    }}
                  >
                    Add To Card
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid size={{xs:12,md:6}}>
            <Box 
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                display: "flex",
                width: {xs:"300px",md:"450px"},
                height: "200px",
                pt: 4,
                pl: 3,
                pr: 3,
                pb:3,
                gap:2
              }}
            >
              <Box
                component={"img"}
                sx={{ width: {xs:"150px"}, height:{xs:"150px"},  }}
                src={product_img6}
              />
              <Box>
                <Rating
                  sx={{
                    "& .MuiRating-icon": {
                      fontSize: "20px",
                    },
                  }}
                />
                <Typography>
                  Semmei ipsum dolore eiusmod dolor officia do nisi
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "left", gap: 1 }}>
                  <Typography
                    sx={{
                      textDecoration: "line-through",
                      color: "gray",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    $9000
                  </Typography>
                  <Typography
                    sx={{ color: "red", fontSize: "18px", fontWeight: "600" }}
                  >
                    $8000
                  </Typography>
                </Box>
                <Box>
                  <Button
                    sx={{
                      fontSize: "13",
                      fontWeight: "600",
                      fontFamily: "Inter, sans-serif",
                      textTransform: "none",
                      backgroundColor: "#FFA500",
                      color: "black",
                      mt:2
                    }}
                  >
                    Add To Card
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid size={{xs:12,md:6}}>
            <Box 
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                display: "flex",
                width: {xs:"300px",md:"450px"},
                height: "200px",
                pt: 4,
                pl: 3,
                pr: 3,
                pb:3,
                gap:2
              }}
            >
              <Box
                component={"img"}
                sx={{ width: {xs:"150px",}, height:{xs:"150px"},  }}
                src={product_img7}
              />
              <Box>
                <Rating
                  sx={{
                    "& .MuiRating-icon": {
                      fontSize: "20px",
                    },
                  }}
                />
                <Typography>
                  Semmei ipsum dolore eiusmod dolor officia do nisi
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "left", gap: 1 }}>
                  <Typography
                    sx={{
                      textDecoration: "line-through",
                      color: "gray",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    $9000
                  </Typography>
                  <Typography
                    sx={{ color: "red", fontSize: "18px", fontWeight: "600" }}
                  >
                    $8000
                  </Typography>
                </Box>
                <Box>
                  <Button
                    sx={{
                      fontSize: "13",
                      fontWeight: "600",
                      fontFamily: "Inter, sans-serif",
                      textTransform: "none",
                      backgroundColor: "#FFA500",
                      color: "black",
                      mt:2
                    }}
                  >
                    Add To Card
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Box>
      
    </>
  );
};

export default TopSellingProducts;
