import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import React from "react";
import agoutBanner from "../../../assets/images/about-banner.png";
import CustomersFeedback from "./components/CustomersFeedback";

const About = () => {
  return (
    <>
      {/* Top Heading */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFAEF",
          py: "50px",
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "600",
            fontFamily: "Inter, sans-serif",
          }}
        >
          About Us
        </Typography>
      </Box>

      {/* Main Section */}
      <Box sx={{ backgroundColor: "#F8F8F8" }}>
        <Box
          sx={{
            maxWidth: "80%",
            mx: "auto",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ pt: "30px" }}>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Left Image */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  component="img"
                  src={agoutBanner}
                  alt="about banner"
                  sx={{ width: "100%", borderRadius: 2 }}
                />
              </Grid>

              {/* Right Text */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "500",
                      fontFamily: "Inter, sans-serif",
                      mb: 1,
                    }}
                  >
                    What is e-commerce business?
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "400",
                      fontFamily: "Inter, sans-serif",
                      color: "#8e8e8e",
                      mb: 2,
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries
                    but also the on leap into electronic typesetting.
                  </Typography>

                  {/* Bullet Points with Icons */}
                  <List>
                    {[
                      "Slim body with metal cover",
                      "Latest Intel Core i5-1135G7 processor (4 cores / 8 threads)",
                      "8GB DDR4 RAM and fast 512GB PCIe SSD",
                      "NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard",
                    ].map((point, index) => (
                      <ListItem key={index} sx={{ p: 0, mb: 0 }}>
                        <ListItemIcon sx={{ minWidth: "20px" }}>
                          <FiberManualRecordIcon
                            sx={{ color: "#8e8e8e", fontSize: "12px" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={point}
                          primaryTypographyProps={{
                            fontSize: "14px",
                            fontFamily: "Inter, sans-serif",
                            color: "#8e8e8e",
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Box>
                    <Button
                      sx={{
                        fontSize: "13px",
                        textTransform: "none",
                        color: "black",
                        background: "#FFBB38",
                        borderRadius: "0px",
                      }}
                    >
                      Contact us
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Customers Feedback section */}

          
        </Box>
        <CustomersFeedback />
      </Box>
    
    </>
  );
};

export default About;
