import StatusCard from "@/components/StatusCard";
import { Grid } from "@mui/material";

export default function MapPage() {
  return (
    <Grid
      item
      desktop={5.5}
      laptop={5.5}
      tablet={12}
      mobileLarge={12}
      mobileSmall={12}
      sx={{
        minHeight: {
          desktop: "100%",
          laptop: "50%",
          tablet: "50%",
          mobileLarge: "100%",
          mobileMedium: "100%",
          mobileSmall: "100%",
        },
        backgroundColor: "royalblue",
      }}
    >
      <StatusCard />
    </Grid>
  );
}
