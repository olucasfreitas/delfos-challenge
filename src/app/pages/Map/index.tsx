import StatusCard from "@/components/StatusCard";
import { Box, styled } from "@mui/material";
import { Container } from "../Events";

export const MapContainer = styled(Container)(({ theme }) => ({
  width: "60%",
  height: "100%",
  backgroundColor: "darkgray",
  padding: "0",
  overflow: "hidden",
  position: "relative",
}));

export default function MapPage() {
  return (
    <MapContainer>
      <StatusCard />
    </MapContainer>
  );
}
