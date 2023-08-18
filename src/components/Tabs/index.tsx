import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import MapPage from "@/app/pages/Map";
import EventsPage from "@/app/pages/Events";

interface CustomTabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel({
  children,
  value,
  index,
  ...other
}: CustomTabPanelProps) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      sx={{ height: "100%" }}
      {...other}
    >
      {value === index && <Box sx={{ height: "100%" }}>{children}</Box>}
    </Box>
  );
}

export default function MobileTabs() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <Tabs
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        variant="fullWidth"
      >
        <Tab label="Mapa" />
        <Tab label="Eventos" />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <MapPage />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <EventsPage />
      </CustomTabPanel>
    </>
  );
}
