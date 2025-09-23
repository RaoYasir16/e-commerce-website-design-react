import { Grid, Box, Typography, Button } from "@mui/material";
import React from "react";

//  for first section
import brand1 from "../../../images/brand-1.png";
import brand2 from "../../../images/brand-2.png";
import brand3 from "../../../images/brand-3.png";
import brand4 from "../../../images/brand-4.png";
import brand5 from "../../../images/brand-5.png";
import brand6 from "../../../images/brand-6.png";
import brand7 from "../../../images/brand-7.png";
import brand8 from "../../../images/brand-8.png";
import brand9 from "../../../images/brand-9.png";
import brand10 from "../../../images/brand-10.png";
import brand11 from "../../../images/brand-11.png";
import brand12 from "../../../images/brand-12.png";

// for second section
import campaignCover_img from "../../../images/campaign-cover-countdown.jpg";
import DownloadApp_cover from "../../../images/download-app-cover.png";
import play_store from "../../../images/play-store.png";
import apple_store from "../../../images/apple-store.png";
import appScreen_img from "../../../images/app-screen.png";

const logos = [
  { src: brand1, alt: "Brand 1" },
  { src: brand2, alt: "Brand 2" },
  { src: brand3, alt: "Brand 3" },
  { src: brand4, alt: "Brand 4" },
  { src: brand5, alt: "Brand 5" },
  { src: brand6, alt: "Brand 6" },
  { src: brand7, alt: "Brand 7" },
  { src: brand8, alt: "Brand 8" },
  { src: brand9, alt: "Brand 9" },
  { src: brand10, alt: "Brand 10" },
  { src: brand11, alt: "Brand 11" },
  { src: brand12, alt: "Brand 12" },
];

const ShopBrand = () => {
  return (
    <Box>
      <Box sx={{ mt:4 }}>
        <Box>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "600",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Shop by Brand
          </Typography>
        </Box>
        <Grid container spacing={2} display={"flex"} justifyContent="center">
          {logos.map((logo, index) => (
            <Grid size={{ xs: 6, md: 2 }} key={index}>
              <Box
                sx={{
                  backgroundColor: "white",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "120px",
                  width: "150px",
                  mx:"auto"
                }}
              >
                <Box
                  component="img"
                  src={logo.src}
                  alt={logo.alt}
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "80px",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mt: 4, mb: 4, }}>
        <Grid container spacing={1} display={"flex"} alignItems={"center"} justifyContent="center">
          {/* Left side */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                backgroundImage: `url(${campaignCover_img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                p:{ xs: 3, md:4},
                height: "100%", 
                minHeight:{xs:"300px",md:"350px"},
                // minHeight: "300px",
                width:{xs:"300px",md:"430px"},
                display:"flex",
                flexDirection:"column",
                justifyContent: "space-between",
              }}
            >
              {/* timer section */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center", 
                    sm: "center", 
                    md:"space-between",    
                  },
                  width: "330px",
                  mt:"20px"
                }}
              >

                <Box sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      background: "white",
                      borderRadius: "50px",
                      height: "70px",
                      width: "70px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{ fontSize:24, color: "orange", fontWeight: 600 }}
                    >
                      0
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: 18,
                      color: "black",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Time
                  </Typography>
                </Box>

                <Box sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      background: "white",
                      borderRadius: "50px",
                      height: "70px",
                      width: "70px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: 24, color: "blue", fontWeight: 600 }}
                    >
                      0
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: 18,
                      color: "black",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Hours
                  </Typography>
                </Box>

                <Box sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      background: "white",
                      borderRadius: "50px",
                      height: "70px",
                      width: "70px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: 24, color: "green", fontWeight: 600 }}
                    >
                      0
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: 18,
                      color: "black",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Minutes
                  </Typography>
                </Box>

                <Box sx={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      background: "white",
                      borderRadius: "50px",
                      height: "70px",
                      width: "70px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: 24, color: "#ef5da8", fontWeight: 600 }}
                    >
                      0
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: 18,
                      color: "black",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Seconds
                  </Typography>
                </Box>
              </Box>

   
              <Box mt={"20px"} mb={"20px"}>
                <Typography
                  sx={{
                    fontSize: "38px",
                    fontWeight: "600",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Woo! Flash Sale
                </Typography>
              </Box>

              <Box mt={"20px"}>
                <Button
                  sx={{
                    color: "black",
                    fontSize: "14",
                    fontWeight: "600",
                    fontFamily: "Inter, sans-serif",
                    border: "1px solid orange",
                  }}
                >
                  Shop Now
                </Button>
              </Box>
    

            </Box>
          </Grid>

          {/* Right side */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                backgroundImage: `url(${DownloadApp_cover})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                p: {xs:3,md:4},
                height: "100%", 
                minHeight: "300px",
                width:{xs:"300px",md:"430px"},
                display:"flex",
                flexDirection:"column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box mt={"px"}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  MOBILE APP VERSION
                </Typography>
              </Box>

              <Box mt={"10px"}>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "600",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Get Our <Box component="span" sx={{ color: "red" }}>Mobile App</Box>
                </Typography>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "600",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  It's Make easy for you life !
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  mt: 2,
                }}
              >
                <Box sx={{width:"100px"}} component={"img"} src={play_store} />
                <Box sx={{width:"100px"}} component={"img"} src={apple_store} />
              </Box>
              <Box sx={{ mt: 8 }}>
                <Box sx={{width:"100%"}} component={"img"} src={appScreen_img} />
              </Box>
            </Box>
          </Grid>


        </Grid>
      </Box>


    </Box>
  );
};

export default ShopBrand;
