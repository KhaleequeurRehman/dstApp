import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  Badge
} from "@material-ui/core";
import Profile from "./Navtabs/profile";
import Notification from "./Navtabs/notification";
import { useStyles } from "./HeaderStyles";
import Messages from "./Navtabs/Messages";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ForumIcon from "@material-ui/icons/Forum";

export default function Navbar({ handleDrawerOpen }) {
  const classes = useStyles();

  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6' className={classes.logo}>
          {"<DSTAdminPanel/>"}
        </Typography>
        <Hidden smDown>
          <Box style={{ display: "flex" }}>
            {/* <Notification />
            <Messages /> */}
            <IconButton
              aria-controls='Notification'
              aria-haspopup='true'
              color='inherit'>
                <Badge badgeContent={4} color='secondary'>
                  <NotificationsActiveIcon />
                </Badge>
            </IconButton>
            <IconButton
              aria-controls='Messages'
              aria-haspopup='true'
              color='inherit'>
                <Badge badgeContent={4} color='secondary'>
                  <ForumIcon />
                </Badge>
            </IconButton>
            <Profile />
          </Box>
        </Hidden>
        <Hidden mdUp>
          <IconButton color='inherit' onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
