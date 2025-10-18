import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

// MUI Footer component — single-file, responsive, accessible and easy to drop into a React app.
// Usage example (place inside your layout or App component):
// <Footer
//   companyName="Your Company"
//   links={{ Product: [{text: 'Pricing', href: '/pricing'}], Company: [{text:'About', href:'/about'}] }}
//   onSubscribe={(email) => console.log('subscribe', email)}
// />

export default function Footer({
  companyName = "Your Company",
  links = {
    Product: [
      { text: "Features", href: "/features" },
      { text: "Pricing", href: "/pricing" },
    ],
    Company: [
      { text: "About", href: "/about" },
      { text: "Careers", href: "/careers" },
    ],
    Support: [
      { text: "Docs", href: "/docs" },
      { text: "Contact", href: "/contact" },
    ],
  },
  contact = { email: "hello@example.com", phone: "+1 (555) 555-5555" },
  onSubscribe = (email) => {},
}) {
  const [email, setEmail] = React.useState("");
  const handleSubscribe = () => {
    if (!email) return;
    try {
      onSubscribe(email);
      setEmail("");
    } catch (err) {
      // swallow — caller can handle
      console.error(err);
    }
  };

  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", pt: 6, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand + description + social */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="div" gutterBottom>
              {companyName}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Delivering great products and delightful experiences. Subscribe to our
              newsletter for product updates and offers.
            </Typography>
            <Box>
              <IconButton
                aria-label="Facebook"
                component={Link}
                href="#"
                target="_blank"
                rel="noopener"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                component={Link}
                href="#"
                target="_blank"
                rel="noopener"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                component={Link}
                href="#"
                target="_blank"
                rel="noopener"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                component={Link}
                href="#"
                target="_blank"
                rel="noopener"
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Links */}
          {Object.keys(links).map((section) => (
            <Grid item xs={6} sm={4} md={2} key={section}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                {section}
              </Typography>
              <Box component="nav" aria-label={`${section} links`}>
                {links[section].map((l) => (
                  <Typography key={l.text} variant="body2">
                    <Link href={l.href} underline="hover" color="text.primary">
                      {l.text}
                    </Link>
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}

          {/* Newsletter + Contact */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Stay in the loop
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Subscribe to receive product news, tips and early access to features.
            </Typography>
            <Box sx={{ display: "flex", gap: 1, maxWidth: 420 }}>
              <TextField
                placeholder="Your email"
                variant="outlined"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                inputProps={{ "aria-label": "Email address" }}
                fullWidth
              />
              <Button variant="contained" onClick={handleSubscribe} aria-label="Subscribe">
                Subscribe
              </Button>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <EmailIcon fontSize="small" />
              <Typography variant="body2">{contact.email}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
              <PhoneIcon fontSize="small" />
              <Typography variant="body2">{contact.phone}</Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="/terms" variant="body2" color="text.secondary">
              Terms
            </Link>
            <Link href="/privacy" variant="body2" color="text.secondary">
              Privacy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
