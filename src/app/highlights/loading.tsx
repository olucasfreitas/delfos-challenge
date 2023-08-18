import { Box } from "@mui/material";

export default async function Loading() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Loading Highlights...
    </Box>
  );
}
