import {
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import useDrawerStore from "../store";
import { MenuIcon } from "@heroicons/react/outline";
import { DrawerHeader, topMenuItems } from "@/components/Drawer";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import React from "react";

export default function MobileDrawer() {
  const { isMobileDrawerOpen, handleOpenAndCloseMobileDrawer } =
    useDrawerStore();
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    console.log(isMobileDrawerOpen);
  }, [isMobileDrawerOpen]);

  return (
    <Drawer
      variant="temporary"
      open={isMobileDrawerOpen}
      onClose={() => handleOpenAndCloseMobileDrawer(!isMobileDrawerOpen)}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        width: 240,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 240,
          boxShadow: "none",
        },
      }}
    >
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
          onClick={() => handleOpenAndCloseMobileDrawer(!isMobileDrawerOpen)}
        >
          <MenuIcon width={24} strokeWidth="2" />
        </IconButton>
        <Typography
          sx={{
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
                justifyContent: "center",
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
                  justifyContent: "center",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: "20px",
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
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "19px",
                    color: pathname.includes(path) ? "#0B1C2C" : "#8E91A4",
                  }}
                />
              </Link>
              {submenus ? (
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
                  <Collapse in={open} timeout="auto" unmountOnExit key={name}>
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
    </Drawer>
  );
}
