"use client";

import "./globals.css";
import Box from "@mui/material/Box";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MiniDrawer from "@/components/Drawer";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import theme from "@/helpers/theme";
import React from "react";
import useDrawerStore from "@/components/Drawer/store";
import MobileDrawer from "@/components/Drawer/MobileDrawer";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const isMobile = useMediaQuery(theme.breakpoints.down("mobileLarge"));
  const { isMiniDrawerFixed } = useDrawerStore();

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <html lang="en">
          <body>
            <Box
              sx={{
                display: "flex",
                height: "100vh",
                paddingLeft: isMiniDrawerFixed || isMobile ? "0" : "56px",
              }}
            >
              <MiniDrawer />
              <MobileDrawer />
              {children}
            </Box>
          </body>
        </html>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
