import React from "react";
import Slider from "react-slick";
import { Card, CardContent, Typography, Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
    { id: 1, name: "John Doe", review: "Great service, highly recommend!" },
    { id: 2, name: "Sarah Ali", review: "Loved the experience." },
    { id: 3, name: "Mike Lee", review: "Very professional and quick." },
    { id: 4, name: "Emma Watson", review: "Amazing quality!" },
    { id: 5, name: "David Kim", review: "Best decision ever." },
  ];

const CustomersFeedback = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // 👈 3 cards ek screen pe
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 960, // tablet
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600, // mobile
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    
  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", my: 5 }}>
    <Slider {...settings}>
      {reviews.map((item) => (
        <Card
          key={item.id}
          sx={{
            mx: 1,
            p: 2,
            borderRadius: 2,
            boxShadow: 3,
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {item.name}
            </Typography>
            <Typography sx={{ color: "gray", mt: 1 }}>
              {item.review}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Slider>
  </Box>
  )
}

export default CustomersFeedback
