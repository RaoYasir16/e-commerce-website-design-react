import { Box, Grid, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShippingOutlined";
import ReplayIcon from "@mui/icons-material/Replay";
import SecurityIcon from "@mui/icons-material/Security";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

const Features = () => {
  const features = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: 30, color: "orange" }} />,
      title: "Free Shipping",
      subtitle: "When ordering over $100",
    },
    {
      icon: <ReplayIcon sx={{ fontSize: 30, color: "orange" }} />,
      title: "Free Return",
      subtitle: "Get Return within 30 days",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 30, color: "orange" }} />,
      title: "Secure Payment",
      subtitle: "100% Secure Online Payment",
    },
    {
      icon: <EmojiEventsOutlinedIcon sx={{ fontSize: 30, color: "orange" }} />,
      title: "Best Quality",
      subtitle: "Original Product Guaranteed",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#fff", py: 4, px: 2, boxShadow: 1 }}>
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: {
            xs: "flex-start",
            sm: "center",
          },
        }}
      >
        {features.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {item.icon}
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
