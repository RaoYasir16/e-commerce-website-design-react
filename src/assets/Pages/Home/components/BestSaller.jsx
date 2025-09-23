import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Saller1 from "../../../images/saller-1.png";
import Saller2 from "../../../images/saller-2.png";
import Saller3 from "../../../images/saller-3.png";
import Saller4 from "../../../images/saller-4.png";
import Saller5 from "../../../images/saller-5.png";
import Saller6 from "../../../images/saller-6.png";

import ads1 from "../../../images/ads-1.png"
import ads2 from "../../../images/ads-2.png"

const BestSaller = () => {
  const sallers = [
    { img: Saller1 },
    { img: Saller2 },
    { img: Saller3 },
    { img: Saller4 },
    { img: Saller5 },
    { img: Saller6 },
  ];
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "600",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Best Saller
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                fontFamily: "Inter, sans-serif",
                textTransform: "none",
                color: "black",
                display: "flex",
                alignItems: "center",
              }}
            >
              View More
              <ArrowForwardIcon sx={{ fontSize: "16px", ml: 1 }} />
            </Button>
          </Box>
        </Box>
        <Box>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {sallers.map((item, index) => (
              <Grid size={{xs:6,sm:6,md:2}}key={index}>
                <Box
                  sx={{
                    bgcolor: "white",
                    width: "150px",
                    height: "150px",
                    borderRadius: "200px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{ width: "70px", height: "70px" }}
                    component={"img"}
                    src={item.img}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{mt:"30px"}}>
            <Grid container spacing={3} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Grid size={{xs:12,sm:12,md:6}}>
                    <Box sx={{width:{md:"500px",xs:"330px"}}} component={"img"} src={ads1} />
                </Grid>
                <Grid size={{xs:12,sm:12,md:6}}>
                    <Box sx={{width:{md:"500px",xs:"330px"}}} component={"img"} src={ads2} />
                </Grid>
            </Grid>
        </Box>
      </Box>
    </>
  );
};

export default BestSaller;
