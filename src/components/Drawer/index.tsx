import React from "react";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Switch from "@mui/material/Switch";
import { Box, CSSObject, Collapse, Theme, styled } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  BeakerIcon,
  ChartBarIcon,
  ClipboardListIcon,
  CogIcon,
  LogoutIcon,
  MapIcon,
  MenuIcon,
  SpeakerphoneIcon,
  TrendingDownIcon,
} from "@heroicons/react/outline";
import useDrawerStore from "./store";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: "56px",
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
}));

const StyledMiniDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  display: "flex",
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiPaper-root": {
    border: "none",
  },
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
  [theme.breakpoints.down("mobileLarge")]: {
    display: "none",
  },
}));

export const topMenuItems = [
  {
    name: "Highlights",
    icon: <MapIcon width={24} stroke="#B1B9C3" strokeWidth="2" />,
    path: "/highlights",
    submenus: [
      {
        name: "Submenu 1",
        path: "/highlights/submenu1",
      },
      {
        name: "Submenu 2",
        path: "/highlights/submenu2",
      },
    ],
  },
  {
    name: "Ocorrências",
    icon: <SpeakerphoneIcon width={24} stroke="#B1B9C3" strokeWidth="2" />,
    path: "/occurrences",
  },
  {
    name: "Performance",
    icon: <ChartBarIcon width={24} stroke="#B1B9C3" strokeWidth="2" />,
    path: "/performance",
  },
  {
    name: "Energy Losses",
    icon: <TrendingDownIcon width={24} stroke="#B1B9C3" strokeWidth="2" />,
    path: "/energy-losses",
  },
  {
    name: "Análises",
    icon: <BeakerIcon width={24} stroke="#B1B9C3" strokeWidth="2" />,
    path: "/analysis",
  },
  {
    name: "Relatórios",
    icon: <ClipboardListIcon width={24} stroke="#B1B9C3" strokeWidth="2" />,
    path: "/reports",
  },
];

const bottomMenuItems = [
  {
    name: "Configurações",
    icon: <CogIcon width={24} stroke="#B1B9C3" strokeWidth="2" />,
    path: "/settings",
  },
  {
    name: "Sair",
    icon: <LogoutIcon width={24} stroke="#B1B9C3" strokeWidth="2" />,
    path: "/logout",
  },
];

function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const isLaptop = useMediaQuery("(max-width:1024px)");
  const pathname = usePathname();

  const {
    isMiniDrawerOpen,
    handleOpenAndCloseMiniDrawer,
    isMiniDrawerFixed,
    changeMiniDrawerState,
  } = useDrawerStore();

  const handleDrawerMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      changeMiniDrawerState(event.target.checked);
    } else {
      changeMiniDrawerState(event.target.checked);
    }
  };

  React.useEffect(() => {
    if (isLaptop) {
      handleOpenAndCloseMiniDrawer(false);
      changeMiniDrawerState(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLaptop]);

  return (
    <Box
      sx={{
        position: isMiniDrawerFixed ? "relative" : "absolute",
      }}
    >
      <StyledMiniDrawer variant={"permanent"} open={isMiniDrawerOpen}>
        <DrawerHeader
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "10px",
            minHeight: "48px",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleOpenAndCloseMiniDrawer(!isMiniDrawerOpen)}
            disabled={isMiniDrawerFixed}
          >
            <MenuIcon width={24} strokeWidth="2" />
          </IconButton>
          <Typography
            sx={{
              display: isMiniDrawerOpen ? "block" : "none",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "19px",
              color: "#8E91A4",
            }}
          >
            Fechar Menu
          </Typography>
        </DrawerHeader>
        <Divider />
        <List sx={{ py: 0 }}>
          {topMenuItems.map(({ name, icon, path, submenus }) => (
            <ListItem
              disablePadding
              key={name}
              sx={{
                display: "block",
                borderLeft: pathname.includes(path)
                  ? "4px solid #FF7D1A"
                  : "none",
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isMiniDrawerOpen ? "initial" : "center",
                  px: 2.5,
                  py: 0,
                }}
                disableTouchRipple={true}
              >
                <Link
                  href={path}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    width: "100%",
                    minHeight: 48,
                    justifyContent: isMiniDrawerOpen ? "initial" : "center",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: isMiniDrawerOpen ? "20px" : "auto",
                      justifyContent: "center",
                      color: pathname.includes(path) ? "#0B1C2C" : "#8E91A4",
                      svg: {
                        stroke: pathname.includes(path) ? "#FF7D1A" : "#8E91A4",
                      },
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={name}
                    sx={{
                      opacity: isMiniDrawerOpen ? 1 : 0,
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: pathname.includes(path) ? "#0B1C2C" : "#8E91A4",
                    }}
                  />
                </Link>
                {submenus && isMiniDrawerOpen ? (
                  open ? (
                    <ExpandLess
                      onClick={() => setOpen(!open)}
                      sx={{
                        color: pathname.includes(path) ? "#0B1C2C" : "#8E91A4",
                      }}
                    />
                  ) : (
                    <ExpandMore
                      onClick={() => setOpen(!open)}
                      sx={{
                        color: pathname.includes(path) ? "#0B1C2C" : "#8E91A4",
                      }}
                    />
                  )
                ) : null}
              </ListItemButton>
              {submenus
                ? submenus?.map(({ name, path }) => (
                    <Collapse
                      in={isMiniDrawerOpen || isMiniDrawerFixed ? open : false}
                      timeout="auto"
                      unmountOnExit
                      key={name}
                    >
                      <List component="div" disablePadding>
                        <Link href={path} style={{ textDecoration: "none" }}>
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText
                              primary={name}
                              sx={{
                                color: pathname.includes(path)
                                  ? "#FF7D1A"
                                  : "#8E91A4",
                                textDecorationColor: pathname.includes(path)
                                  ? "#FF7D1A"
                                  : "#8E91A4",
                                textDecoration: pathname.includes(path)
                                  ? "underline"
                                  : "none",
                                textUnderlineOffset: "2px",
                              }}
                            />
                          </ListItemButton>
                        </Link>
                      </List>
                    </Collapse>
                  ))
                : null}
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: isLaptop ? "flex-end" : "space-between",
            height: "100%",
          }}
        >
          {!isLaptop && (
            <Box>
              <ListItem disablePadding>
                <ListItemButton
                  disableRipple={true}
                  sx={{
                    minHeight: 48,
                    justifyContent: isMiniDrawerOpen ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemText
                    primary="Fixar Menu"
                    sx={{
                      opacity: isMiniDrawerOpen ? 1 : 0,
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: isMiniDrawerFixed ? "#0B1C2C" : "#8E91A4",
                    }}
                  />
                  <Switch
                    edge="end"
                    size="small"
                    checked={isMiniDrawerFixed}
                    onChange={handleDrawerMode}
                    sx={{
                      margin: 0,
                      "& .MuiSwitch-switchBase": {
                        "&.Mui-checked": {
                          color: "#fff",
                          "& + .MuiSwitch-track": {
                            opacity: 1,
                            backgroundColor: "#FF7D1A",
                          },
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
            </Box>
          )}
          <Box>
            <Divider />
            <List disablePadding>
              {bottomMenuItems.map(({ name, icon, path }) => (
                <Link href={path} key={name} style={{ textDecoration: "none" }}>
                  <ListItem
                    disablePadding
                    sx={{
                      display: "block",
                      borderLeft: pathname.includes(path)
                        ? "10px solid #FF7D1A"
                        : "none",
                      borderBottomRightRadius: "100px 10px",
                    }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: isMiniDrawerOpen ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: isMiniDrawerOpen ? 3 : "auto",
                          justifyContent: "center",
                          color: pathname.includes(path)
                            ? "#0B1C2C"
                            : "#8E91A4",
                          svg: {
                            stroke: pathname.includes(path)
                              ? "#FF7D1A"
                              : "#8E91A4",
                          },
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={name}
                        sx={{
                          opacity: isMiniDrawerOpen ? 1 : 0,
                          fontWeight: 600,
                          fontSize: "16px",
                          lineHeight: "19px",
                          color: pathname.includes(path)
                            ? "#0B1C2C"
                            : "#8E91A4",
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
              <ListItem disablePadding sx={{ backgroundColor: "#0B1C2C" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: isMiniDrawerOpen ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: isMiniDrawerOpen ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="/ecoPowerLogo.svg"
                      width={24}
                      height={24}
                      alt="Eco power logo"
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Eco Power Monitor"}
                    sx={{
                      opacity: isMiniDrawerOpen ? 1 : 0,
                      fontWeight: 300,
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: "#fff",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Box>
      </StyledMiniDrawer>
    </Box>
  );
}

export default MiniDrawer;
