import { Box, Grid } from "@mui/material";
import React from "react";
import banner1 from "../../images/banner-1.png";
import banner2 from "../../images/banner-2.png";
import banner3 from "../../images/banner-3.png";
import Features from "./components/Feature";
import GamerWorld from "./components/GamerWorld";
import ShopBrand from "./components/ShopBrand";
import TopSellingProducts from "./components/TopSellingProducts";
import BestSaller from "./components/BestSaller";
import PopularSales from "./components/PopularSales";
import NewArrivals from "./components/NewArrivals";
import PopularSales2 from "./components/PopularSales2";
import DiscountBanner1 from "./components/DiscountBanner1";

const Home = () => {
  return (
    <>

      {/* 🔹 Banner Section */}
      <Box sx={{ m: 3 }}>
        <Grid container spacing={3} alignItems="center">
          {/* Left big banner */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={banner1}
              alt="Main Banner"
              sx={{ borderRadius: 2, width: "100%" }}
            />
          </Grid>

          {/* Right side banners */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} direction="column">
              {/* Top banner */}
              <Grid item xs={12}>
                <Box
                  component="img"
                  src={banner2}
                  alt="Top Banner"
                  sx={{ borderRadius: 2, width: "100%" }}
                />
              </Grid>

              {/* Bottom banner */}
              <Grid item xs={12}>
                <Box
                  component="img"
                  src={banner3}
                  alt="Bottom Banner"
                  sx={{ borderRadius: 2, width: "100%" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>


    <Box
    sx={{
      width: "80%",
      margin: "0 auto", // center align page
    }}
    >
      {/* 🔹 Features Section */}
      <Features />

      {/* 🔹 Gamer World Section */}
      <GamerWorld />

       {/* 🔹 Shop Brand Section */}
       <ShopBrand/>

       {/* 🔹 Top Selling Products */}
       <TopSellingProducts/>  

         {/* 🔹 Best Saller */}
         <BestSaller />

         {/* 🔹 Popular Sales */}
         <PopularSales />

         {/* 🔹New Arrivals */}
         <NewArrivals />

         {/* 🔹Popular Sales 2 */}
         <PopularSales2 />
    </Box>

    {/* 🔹Discount Banner */}
    <DiscountBanner1 />
    </>
  );
};

export default Home;
