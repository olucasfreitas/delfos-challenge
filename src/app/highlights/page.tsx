"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TopBar from "@/components/Topbar";
import { useMediaQuery } from "@mui/material";
import React from "react";
import MobileTabs from "@/components/Tabs";
import EventsPage from "../pages/Events";
import MapPage from "../pages/Map";
import theme from "@/helpers/theme";

export default function Highlights() {
  const isMobile = useMediaQuery(theme.breakpoints.down("tablet"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <TopBar />
      {isMobile && <MobileTabs />}
      {!isMobile && (
        <Grid
          container
          columns={12}
          sx={{
            height: {
              desktop: "100%",
              laptop: "100%",
              tablet: "100%",
              mobileLarge: "100%",
              mobileSmall: "100%",
            },
          }}
        >
          <MapPage />
          <EventsPage />
        </Grid>
      )}
    </Box>
  );
}
