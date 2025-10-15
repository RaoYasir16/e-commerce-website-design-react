import { Box, Grid, Typography,TextField,Button  } from "@mui/material";
import React from "react";

import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3";
import EmailIcon from "@mui/icons-material/Email";
import DiscountBanner1 from "../Home/components/DiscountBanner1";
const ContactUs = () => {
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
          Contact Us
        </Typography>
      </Box>

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
              {/* Left side */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "22",
                      fontWeight: "600",
                      fontFamily: "Inter, sans-serif",
                      color: "black",
                    }}
                  >
                    Contact Information
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "400",
                      fontFamily: "Inter, sans-serif",
                      color: "#8e8e8e",
                    }}
                  >
                    Fill the form below or write us .We will help you as soon as
                    possible.
                  </Typography>
                </Box>
                <Box>
                  <Grid container spacing={2} mt={2}>
                    <Grid
                      size={{ xs: 12, md: 6 }}
                      sx={{ backgroundColor: "#FFEAE5" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          p: 3,
                        }}
                      >
                        <Box
                          sx={{
                            width: 40, // fixed width
                            height: 40, // fixed height (same as width → circle)
                            border: "1px solid #FFBC3A",
                            borderRadius: "50%", // makes it circular
                            display: "flex", // center the icon
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <WifiCalling3OutlinedIcon
                            sx={{ color: "#FFBC3A", fontSize: 20 }}
                          />
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "22px",
                              fontWeight: "600",
                              fontFamily: "Inter, sans-serif",
                              color: "black",
                              textAlign: "center",
                            }}
                          >
                            Phone
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "12px",
                              fontWeight: "400",
                              fontFamily: "Inter, sans-serif",
                              color: "black",
                              textAlign: "center",
                            }}
                          >
                            +(323) 9847 3847 383
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "12px",
                              fontWeight: "400",
                              fontFamily: "Inter, sans-serif",
                              color: "black",
                              textAlign: "center",
                            }}
                          >
                            +(323) 9847 3847 383
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid
                      size={{ xs: 12, md: 6 }}
                      sx={{ backgroundColor: "#D3EFFF" }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          p: 3,
                        }}
                      >
                        <Box
                          sx={{
                            width: 40, // fixed width
                            height: 40, // fixed height (same as width → circle)
                            border: "1px solid #FFBC3A",
                            borderRadius: "50%", // makes it circular
                            display: "flex", // center the icon
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <EmailIcon sx={{ color: "#FFBC3A", fontSize: 20 }} />
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "22px",
                              fontWeight: "600",
                              fontFamily: "Inter, sans-serif",
                              color: "black",
                              textAlign: "center",
                            }}
                          >
                            Email
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "12px",
                              fontWeight: "400",
                              fontFamily: "Inter, sans-serif",
                              color: "black",
                              textAlign: "center",
                            }}
                          >
                            Demoemail@gmail.com
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "12px",
                              fontWeight: "400",
                              fontFamily: "Inter, sans-serif",
                              color: "black",
                              textAlign: "center",
                            }}
                          >
                            rafiqulislamsuvobd@gmail.com
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Box sx={{ backgroundColor: "#E7F2EC", mt: 2, p: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 40, // fixed width
                        height: 40, // fixed height (same as width → circle)
                        border: "1px solid #FFBC3A",
                        borderRadius: "50%", // makes it circular
                        display: "flex", // center the icon
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <EmailIcon sx={{ color: "#FFBC3A", fontSize: 20 }} />
                    </Box>
                    <Box sx={{ width: "70%" }}>
                      <Typography
                        sx={{
                          fontSize: "22px",
                          fontWeight: "600",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        Address
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "400",
                          fontFamily: "Inter, sans-serif",
                          color: "#222",
                        }}
                      >
                        4517 Washington Ave. Manchester, Road 2342, Kentucky
                        39495
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      mt: 2,
                      overflow: "hidden",
                      width: "100%",
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54450.638063090264!2d74.23576222743311!3d31.464650317575376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919015f82b0b86f%3A0x2fcaf9fdeb3d02e6!2sJohar%20Town%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1760098449017!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Company Location"
                    ></iframe>
                  </Box>
                </Box>
              </Grid>

              {/* Right Text */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    maxWidth: 500,
                    mx: "auto",
                    my: 6,
                    p: 4,
                    bgcolor: "#fff",
                    // borderRadius: 3,
                    // boxShadow: 2,
                  }}
                >
                  {/* Heading */}
                  <Box sx={{ textAlign: "center", mb: 2 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        position: "relative",
                        display: "inline-block",
                      }}
                    >
                      Get In Touch
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: -6,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "70%",
                          height: "3px",
                          borderRadius: "50%",
                          backgroundColor: "#FFBC3A",
                        }}
                      ></Box>
                    </Typography>
                  </Box>

                  {/* Form Fields */}
                  <Box component="form" noValidate autoComplete="off">
                    <TextField
                      fullWidth
                      placeholder="Demo Name"
                      margin="normal"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                            height:"40px",
                          "& fieldset": {
                            borderColor: "#ccc", // default border color
                          },
                          "&:hover fieldset": {
                            borderColor: "#ccc", // hover par bhi same
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ccc", // focus (click) par same color — blue hata diya
                          },
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      placeholder="info@quomodosoft.com"
                      margin="normal"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                            height:"40px",
                          "& fieldset": {
                            borderColor: "#ccc", // default border color
                          },
                          "&:hover fieldset": {
                            borderColor: "#ccc", // hover par bhi same
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ccc", // focus (click) par same color — blue hata diya
                          },
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      placeholder="Your Subject here"
                      margin="normal"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                            height:"40px",
                          "& fieldset": {
                            borderColor: "#ccc", 
                          },
                          "&:hover fieldset": {
                            borderColor: "#ccc", 
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ccc", 
                          },
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      placeholder="Type your message here"
                      margin="normal"
                      multiline
                      rows={4}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#ccc", // default border color
                          },
                          "&:hover fieldset": {
                            borderColor: "#ccc", // hover par bhi same
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ccc", // focus (click) par same color — blue hata diya
                          },
                        },
                      }}
                    />

                    {/* Button */}
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        mt: 2,
                        py: 1.4,
                        textTransform:"none",
                        backgroundColor: "#000",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "16px",
                        "&:hover": { backgroundColor: "#333" },
                      }}
                    >
                      Send Now
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      <DiscountBanner1/>
    </>
  );
};

export default ContactUs;
