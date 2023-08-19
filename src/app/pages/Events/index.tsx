import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Accordion from "@/components/Accordion";
import {
  ExclamationIcon,
  HandIcon,
  SpeakerphoneIcon,
  TrendingDownIcon,
} from "@heroicons/react/outline";
import {
  Button,
  ButtonProps,
  Card,
  CardContent,
  Divider as MUIDivider,
  styled,
} from "@mui/material";
import DailyAverageGraph from "@/components/Graphs/DailyAverage";
import AvailabilityGraph from "@/components/Graphs/Availability";
import BasicTable from "@/components/Table";
import MostActivatedAlarms from "@/components/Graphs/MostActivatedAlarms";
import MostDowntimeAssets from "@/components/Graphs/MostDowntimeAssets";
import theme from "@/helpers/theme";

const SummaryBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "8px",
}));

const SummaryTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "16px",
}));

const SummarySubtile = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "14px",
  color: "#8C97A1",
}));

const NumberBox = styled(Typography)(({ theme }) => ({
  height: "28px",
  backgroundColor: "#0B1C2C",
  borderRadius: "2px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  minWidth: "28px",
  padding: "0 5px",
  p: {
    display: "flex",
    alignItems: "center",
  },
}));

const TopHalfCardBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: "23px",
  [theme.breakpoints.down("mobileMedium")]: {
    padding: "10px",
  },
}));

const TopHalfCardTextBox = styled(Box)(({ theme }) => ({
  width: "70%",
  height: "100%",
  [theme.breakpoints.down("desktop")]: {
    width: "60%",
  },
  [theme.breakpoints.down("mobileMedium")]: {
    width: "50%",
  },
}));

const TopHalfCardTextBoxTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "24px",
  color: "#0B1C2C",
  [theme.breakpoints.down("desktop")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("mobileMedium")]: {
    fontSize: "16px",
  },
}));

const TopHalfCardTextBoxSubTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#615E69",
  [theme.breakpoints.down("desktop")]: {
    fontSize: "15px",
    lineHeight: "18px",
  },
  [theme.breakpoints.down("mobileMedium")]: {
    fontSize: "13px",
  },
}));

const TopHalfCardButton = styled((props: ButtonProps) => (
  <Button variant="outlined" {...props} />
))(({ theme }) => ({
  border: "1px solid #D6DCE3",
  height: "40px",
  borderRadius: "2px",
  padding: "4px, 16px",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "17px",
  color: "#0B1C2C",
  [theme.breakpoints.down("desktop")]: {
    width: "80%",
  },
  [theme.breakpoints.down("mobileMedium")]: {
    width: "100%",
  },
}));

const TopHalfCardButtonBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  width: "30%",
  height: "100%",
  [theme.breakpoints.down("desktop")]: {
    width: "40%",
  },
  [theme.breakpoints.down("mobileMedium")]: {
    width: "50%",
  },
}));

const Divider = styled(MUIDivider)(({ theme }) => ({
  border: "1px solid #CFD4E5",
  width: "100%",
  opacity: "0.5",
}));

const BottomHalfCardBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
  width: "100%",
  padding: "23px",
  [theme.breakpoints.down("desktop")]: {
    gap: "15px",
  },
  [theme.breakpoints.down("mobileMedium")]: {
    flexWrap: "wrap",
    padding: "10px",
  },
}));

const BottomHalfTextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "25%",
  [theme.breakpoints.down("mobileMedium")]: {
    width: "45%",
  },
}));

const CurrentValueText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "17px",
  color: "#0B1C2C",
  whiteSpace: "nowrap",
}));

const CurrentValueNumber = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "28px",
  lineHeight: "33px",
  color: "#0B1C2C",
  whiteSpace: "nowrap",
  [theme.breakpoints.down("desktop")]: {
    fontSize: "20px",
    lineHeight: "26px",
  },
  [theme.breakpoints.down("tablet")]: {
    fontSize: "20px",
    lineHeight: "29px",
  },
}));

const RedText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#F42829",
  [theme.breakpoints.down("desktop")]: {
    fontSize: "14px",
    lineHeight: "18px",
  },
}));

const GrayText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "17px",
  color: "#8C97A1",
  [theme.breakpoints.down("desktop")]: {
    fontSize: "12px",
    lineHeight: "16px",
  },
}));

const BottomHalfGraphsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "16px",
  width: "50%",
  [theme.breakpoints.down("mobileMedium")]: {
    width: "100%",
  },
}));

const GraphBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
  gap: "5px",
  width: "50%",
  height: "100%",
}));

const GraphTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "14px",
  color: "#0B1C2C",
  [theme.breakpoints.down("laptop")]: {
    fontSize: "10px",
    lineHeight: "12px",
  },
  [theme.breakpoints.down("tablet")]: {
    fontSize: "12px",
    lineHeight: "14px",
  },
}));

const NewOccurrencesGraphTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "20px",
  marginBottom: "17.5px",
  [theme.breakpoints.down("desktop")]: {
    fontSize: "13px",
    lineHeight: "18px",
  },
  [theme.breakpoints.down("tablet")]: {
    fontSize: "16px",
    lineHeight: "20px",
  },
}));

const NewOccurrencesGraphBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "50%",
  height: "100%",
  [theme.breakpoints.down("desktop")]: {
    width: "100%",
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  "&:last-child": {
    padding: "0px",
  },
  [theme.breakpoints.down("mobileMedium")]: {
    height: "100%",
  },
}));

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "60%",
  height: "100%",
  padding: "25px 17px",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#8C97A1",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#4A4754",
    borderRadius: "8px",
  },
  [theme.breakpoints.down("laptop")]: {
    width: "100%",
    height: "100%",
  },
}));

export default function EventsPage() {
  return (
    <Container>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "20px",
          marginBottom: "24px",
        }}
      >
        Eventos em destaque que ocorreram no período selecionado:
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Accordion
          summaryContent={
            <SummaryBox>
              <ExclamationIcon
                width={24}
                stroke="#8C97A1"
                strokeWidth={2}
                style={{ marginRight: "12px" }}
              />
              <NumberBox>19</NumberBox>
              <SummaryTitle>Riscos</SummaryTitle>
              <SummarySubtile>no período selecionado</SummarySubtile>
            </SummaryBox>
          }
          detailsContent={
            <>
              <Card variant="outlined">
                <StyledCardContent
                  sx={{
                    flexDirection: "column",
                    border: "1px solid #CFD4E5",
                    borderRadius: "4px",
                  }}
                >
                  <TopHalfCardBox>
                    <TopHalfCardTextBox>
                      <TopHalfCardTextBoxTitle>
                        Geração baixa
                      </TopHalfCardTextBoxTitle>
                      <TopHalfCardTextBoxSubTitle>
                        A geração do parque está muito abaixo da meta deste mês
                      </TopHalfCardTextBoxSubTitle>
                    </TopHalfCardTextBox>
                    <TopHalfCardButtonBox>
                      <TopHalfCardButton>Ver mais</TopHalfCardButton>
                    </TopHalfCardButtonBox>
                  </TopHalfCardBox>
                  <Divider />
                  <BottomHalfCardBox>
                    <BottomHalfTextBox>
                      <CurrentValueText>Valor atual</CurrentValueText>
                      <CurrentValueNumber>60.5 Mwh</CurrentValueNumber>
                    </BottomHalfTextBox>
                    <BottomHalfTextBox>
                      <BottomHalfTextBox
                        sx={{
                          flexDirection: "row",
                          width: "100%",
                          justifyContent: "flex-start",
                          gap: "5px",
                        }}
                      >
                        <TrendingDownIcon width={20} color="#F42829" />
                        <RedText>24%</RedText>
                      </BottomHalfTextBox>
                      <GrayText>VS PREV. 30 DIAS</GrayText>
                    </BottomHalfTextBox>
                    <BottomHalfGraphsBox>
                      <GraphBox>
                        <GraphTitle>Meta diária: 329.09</GraphTitle>
                        <DailyAverageGraph />
                      </GraphBox>
                      <GraphBox>
                        <GraphTitle>Meta mensal: 329.09</GraphTitle>
                        <DailyAverageGraph />
                      </GraphBox>
                    </BottomHalfGraphsBox>
                  </BottomHalfCardBox>
                </StyledCardContent>
              </Card>
              <Card variant="outlined">
                <StyledCardContent
                  sx={{
                    flexDirection: "column",
                    border: "1px solid #CFD4E5",
                    borderRadius: "4px",
                  }}
                >
                  <TopHalfCardBox>
                    <TopHalfCardTextBox>
                      <TopHalfCardTextBoxTitle>
                        Disponibilidade
                      </TopHalfCardTextBoxTitle>
                      <TopHalfCardTextBoxSubTitle>
                        O parque está tendo muitas quedas de disponibilidade
                      </TopHalfCardTextBoxSubTitle>
                    </TopHalfCardTextBox>
                    <TopHalfCardButtonBox>
                      <TopHalfCardButton>Verificar WTGS</TopHalfCardButton>
                    </TopHalfCardButtonBox>
                  </TopHalfCardBox>
                  <Divider />
                  <AvailabilityGraph />
                </StyledCardContent>
              </Card>
            </>
          }
        />

        <Accordion
          summaryContent={
            <SummaryBox>
              <HandIcon
                width={24}
                stroke="#8C97A1"
                strokeWidth={2}
                style={{ marginRight: "12px" }}
              />
              <NumberBox>5</NumberBox>
              <SummaryTitle>Alertas preditivos</SummaryTitle>
              <SummarySubtile>no período selecionado</SummarySubtile>
            </SummaryBox>
          }
          detailsContent={
            <Card variant="outlined">
              <StyledCardContent
                sx={{
                  minHeight: "193px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <BasicTable />
                </Box>
              </StyledCardContent>
            </Card>
          }
        />

        <Accordion
          summaryContent={
            <SummaryBox>
              <SpeakerphoneIcon
                width={24}
                stroke="#8C97A1"
                strokeWidth={2}
                style={{ marginRight: "12px" }}
              />
              <NumberBox>222</NumberBox>
              <SummaryTitle>Novas ocorrências</SummaryTitle>
              <SummarySubtile>no período selecionado</SummarySubtile>
            </SummaryBox>
          }
          detailsContent={
            <Card variant="outlined" sx={{ border: "none" }}>
              <StyledCardContent
                sx={{
                  gap: {
                    desktop: "40px",
                    laptop: "20px",
                    tablet: "20px",
                    mobileLarge: "20px",
                    mobileMedium: "20px",
                    mobileSmall: "20px",
                  },
                  flexDirection: {
                    desktop: "row",
                    laptop: "column",
                    tablet: "column",
                    mobileLarge: "column",
                    mobileMedium: "column",
                    mobileSmall: "column",
                  },
                }}
              >
                <NewOccurrencesGraphBox>
                  <NewOccurrencesGraphTitle>
                    Alarmes mais acionados
                  </NewOccurrencesGraphTitle>
                  <MostActivatedAlarms />
                </NewOccurrencesGraphBox>
                <NewOccurrencesGraphBox>
                  <NewOccurrencesGraphTitle>
                    Assets com maiories downtimes
                  </NewOccurrencesGraphTitle>
                  <MostDowntimeAssets />
                </NewOccurrencesGraphBox>
              </StyledCardContent>
            </Card>
          }
        />
      </Box>
    </Container>
  );
}
