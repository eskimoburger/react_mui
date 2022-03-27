import React from "react";
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  icons: {
    // display: "flex",
    alignItems: "center",

    display: (props) => (props.open ? "none" : "flex"),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Soontorn Dev
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          Soon
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            alt="user"
            src="https://scontent.fphs4-1.fna.fbcdn.net/v/t1.18169-9/28056248_2573810339562663_3230474123619084371_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_eui2=AeE6M2jM6OrwqbG-dPa2WC_a8XtudCAY6eDxe250IBjp4Kaw1QkUIJ-Z4H_yIInKQ68f455t-Aq7R3RwX35sUrWA&_nc_ohc=irMjClmh1LIAX-vdsPE&_nc_ht=scontent.fphs4-1.fna&oh=00_AT_y-478qHNFa3pI4N664NrCs5XeqMTfbxfuOnCogGK0RQ&oe=626323E7"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
