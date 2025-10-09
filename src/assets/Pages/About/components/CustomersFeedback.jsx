import React from "react";
import Slider from "react-slick";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Rating,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import user_profile1 from "../../../images/comment-user-1.png";

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Ridoy Rock",
    location: "London, UK",
    rating: 5,
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    avatar: user_profile1,
  },
  {
    id: 2,
    name: "Ridoy Rock",
    location: "London, UK",
    rating: 2,
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has survived not only five centuries.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    name: "Ridoy Rock",
    location: "London, UK",
    rating: 3,
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries but also the leap into electronic typesetting.",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 4,
    name: "Ridoy Rock",
    location: "London, UK",
    rating: 2,
    feedback:
      "Lorem Ipsum is dummy text. It has survived not only five centuries but also the leap into electronic typesetting.",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
];

// Custom Arrows
const NextArrow = ({ className, style, onClick }) => (
  <Box
    className={className}
    style={{ ...style, display: "block", right: -40 }}
    onClick={onClick}
  >
    <ArrowForwardIos sx={{ fontSize: 24, color: "orange" }} />
  </Box>
);

const PrevArrow = ({ className, style, onClick }) => (
  <Box
    className={className}
    style={{ ...style, display: "block", left: -40 }}
    onClick={onClick}
  >
    <ArrowBackIos sx={{ fontSize: 24, color: "orange" }} />
  </Box>
);

const CustomersFeedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        py: 6,
        px: { xs: 2, md: 6 },
        position: "relative",
      }}
    >
      <Typography sx={{fontSize:"30px",fontWeight:"600",fontFamily:"Inter, sans-serif"}}>
        Customers Feedback
      </Typography>

      <Slider {...settings}>
        {testimonials.map((item) => (
          <Box key={item.id} px={2}>
            <Card
              sx={{
                m:1,
                p: 1,
                bgcolor:"#F8F8F8",
                minHeight: 250,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Rating value={item.rating} readOnly />
                <Typography variant="body2" color="text.secondary" my={2}>
                  {item.feedback}
                </Typography>
                <Box display="flex" alignItems="center" mt={2}>
                  <Avatar src={item.avatar} alt={item.name} />
                  <Box ml={2} textAlign="left">
                    <Typography variant="subtitle1" fontWeight="bold">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.location}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CustomersFeedback;
