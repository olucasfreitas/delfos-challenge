import { styled } from "@mui/material/styles";

import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { ChevronRightIcon } from "@heroicons/react/outline";

const MUIAccordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(({ theme }) => ({
  border: `1px solid #CFD4E5`,
  width: "100%",
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ChevronRightIcon width={18} color="#77757F" />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#F9F9F9",
  flexDirection: "row",
  height: "51px",
  padding: "12px",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  borderBottomRightRadius: "0px",
  borderBottomLeftRadius: "0px",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "25px",
  borderTop: "1px solid #CFD4E5",
  [theme.breakpoints.down("mobileMedium")]: {
    padding: "15px",
  },
}));

interface AccordionComponentProps {
  summaryContent: JSX.Element;
  detailsContent: JSX.Element;
}

export default function Accordion({
  summaryContent,
  detailsContent,
}: AccordionComponentProps) {
  return (
    <MUIAccordion>
      <AccordionSummary>{summaryContent}</AccordionSummary>
      <AccordionDetails
        sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        {detailsContent}
      </AccordionDetails>
    </MUIAccordion>
  );
}
