import React, { useState } from "react";
import { Box, Typography, TextField, Button, InputAdornment, } from "@mui/material";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import logoImg from "../../../images/logo.svg"
import discount_img1 from "../../../images/discount-banner-1.jpg"; 

const DiscountBanner1 = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribed with:", email);
  };

  return (
    <>
    <Box
      sx={{
        backgroundImage: `url(${discount_img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: 4.5,
        textAlign: "center",
        mt:"70px"
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontSize: { xs: "24px", md: "30px" },
          fontWeight: 700,
          fontFamily: "Inter, sans-serif",
          color: "black",
        }}
      >
        Get{" "}
        <Box component="span" sx={{ color: "#FFBB38" }}>
          20%
        </Box>{" "}
        Off Discount Coupon
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 400,
          fontFamily: "Inter, sans-serif",
          color: "gray",
          mt: 1,
          mb: 4,
        }}
      >
        by Subscribing to our Newsletter
      </Typography>

      {/* Input + Button */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "500px",
          mx: "auto",
          gap: 0,
          // boxShadow: 3,
          overflow: "hidden",
          // backgroundColor: "#fff",
        }}
      >
        <TextField
          fullWidth
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              border: "none",
              background: "white",
              px: 2,
              borderRadius: "0px",
            },
            "& fieldset": { border: "none" },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlinedIcon sx={{ color: "gray" }} />
              </InputAdornment>
            ),
          }}
        />

        <Button
          onClick={handleSubscribe}
          sx={{
            bgcolor: "#FFBB38",
            color: "black",
            fontWeight: 600,
            fontSize: "14px",
            fontFamily: "Inter, sans-serif",
            borderRadius: "0px",
            px: 4,
            py: 2,
            textTransform: "none",
            whiteSpace: "nowrap", //  text ek line me hi rahega
            width: { xs: "100%", sm: "auto" },
            "&:hover": {
              bgcolor: "#e6a800",
            },
          }}
        >
          Get the Coupon
        </Button>
      </Box>
    </Box>

    {/* Company logo */}
    <Box sx={{mt:"30px", mb:"30px",justifyContent:"center",alignItems:"center",display:"flex"}}>
    <Box sx={{width:"150px"}} component={"img"} src={logoImg}/>
    </Box>
    </>
  );
};

export default DiscountBanner1;
