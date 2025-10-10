import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";

import blogImg from "../../../images/blog-img-1.jpg";
import blogImg1 from "../../../images/blog-img-2.jpg";

import discount_banner from "../../../images/discount-banner-1.jpg"

const LatestNews = () => {
  return (
    <Box mt={2}>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          mb: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "600",
            fontFamily: "Inter, sans-serif",
          }}
        >
          My Latest News
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ width: "80%", margin: "0 auto" }}>
        <Grid size={{ xs: 12, md: 6 }} sx={{ border: "1px solid #D3D3D3" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box component={"img"} src={blogImg} />
            <Box sx={{ display: "flex", justifyContent: "left", p: 2, gap: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                <PersonOutlinedIcon
                  sx={{ fontSize: "18px", color: "#FFBB38" }}
                />
                <Typography sx={{ fontSize: 12, color: "gray" }}>
                  By admin
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                <MessageOutlinedIcon
                  sx={{ fontSize: "18px", color: "#FFBB38" }}
                />
                <Typography sx={{ fontSize: 12, color: "gray" }}>
                  6 Comments
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "98%",
                margin: "0 auto",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "black",
                  fontWeight: "600",
                }}
              >
                Reprehenderit Non Esse Anim Laboris Reprehenderit Officia
              </Typography>

              <Typography
                sx={{ fontSize: "12px", fontWeight: "400", color: "gray" }}
              >
                irure laborum qui deserunt excepteur id ad sit quis laboris duis
                ut cillum eiusmod non sint exercitation nulla tempor nostrud
                eiusmod commodo
              </Typography>

              <Button
                sx={{
                  fontSize: "12px",
                  fontWeight: 600,
                  fontFamily: "Inter, sans-serif",
                  color: "black",
                  textTransform: "none", // Prevents uppercase text
                  border: "1px solid #FFBB38",
                  borderRadius: "20px",
                  px: 3, 
                  py: 0.5, 
                  mt: 2, 
                  mb: 1, 
                  // ml: 2, 
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#FFBB38",
                    borderColor: "#FFBB38",
                  },
                }}
              >
                View More
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} sx={{ border: "1px solid #D3D3D3" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
             
            <Box component={"img"} src={blogImg1} />

            <Box sx={{ display: "flex", justifyContent: "left", p: 2, gap: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                <PersonOutlinedIcon
                  sx={{ fontSize: "18px", color: "#FFBB38" }}
                />
                <Typography sx={{ fontSize: 12, color: "gray" }}>
                  By admin
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                <MessageOutlinedIcon
                  sx={{ fontSize: "18px", color: "#FFBB38" }}
                />
                <Typography sx={{ fontSize: 12, color: "gray" }}>
                  8 Comments
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "98%",
                margin: "0 auto",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "black",
                  fontWeight: "600",
                }}
              >
                Aliquip Duis Nostrud Ex Cillum Laborum Adipisicing
              </Typography>

              <Typography
                sx={{ fontSize: "12px", fontWeight: "400", color: "gray" }}
              >
                irure laborum qui deserunt excepteur id ad sit quis laboris duis
                ut cillum eiusmod non sint exercitation nulla tempor nostrud
                eiusmod commodo
              </Typography>

              <Button
                sx={{
                  fontSize: "12px",
                  fontWeight: 600,
                  fontFamily: "Inter, sans-serif",
                  color: "black",
                  textTransform: "none", // Prevents uppercase text
                  border: "1px solid #FFBB38",
                  borderRadius: "20px",
                  px: 3, 
                  py: 0.5, 
                  mt: 2, 
                  mb: 1, 
                  // ml: 2, 
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#FFBB38",
                    borderColor: "#FFBB38",
                  },
                }}
              >
                View More
              </Button>
            </Box>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
};

export default LatestNews;
