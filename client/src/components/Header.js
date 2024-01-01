import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import { styled, useTheme } from "@mui/material";

const drawerWidth = 240;
const navItems = ["Home"]; // Only "Home" in the navigation

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const theme = useTheme();

  const ButtonColor = styled(Button)({
    backgroundColor: theme.palette.primary.purple,
    '&:hover': {
      backgroundColor: theme.palette.primary.lightpurple,
    },
  });

  const isLoggedIn = localStorage.getItem("userregisterdata");

  const isHomeRoute = location.pathname === "/home";

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6">
        Arslan
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Button
                component={Link}
                to={item.toLowerCase()} // Assuming your routes are in lowercase
                sx={{ color: "#ac2768" }}
              >
                <ListItemText primary={item} />
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
        {isLoggedIn ? (
          <ListItem>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ButtonColor component={Link} to="/logout">
                Logout
              </ButtonColor>
            </ListItemButton>
          </ListItem>
        ) : null}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Arslan
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <ButtonColor
                key={item}
                component={Link}
                to={item.toLowerCase()} // Assuming your routes are in lowercase
                sx={{ mr: "4px" }}
              >
                {item}
              </ButtonColor>
            ))}
            {isLoggedIn ? (
              isHomeRoute ? (
                <ButtonColor component={Link} to="/logout">
                  Logout
                </ButtonColor>
              ) : null
            ) : (
              <ButtonColor
                key="SignIn"
                component={Link}
                to="/signin"
                sx={{ mr: "4px" }}
              >
                Sign In
              </ButtonColor>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Header;
