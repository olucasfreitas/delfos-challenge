import { ArrowUpIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { Box, Divider, Paper, Typography, styled } from "@mui/material";
import Image from "next/image";

const Container = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: 1,
  top: "17px",
  left: "17px",
  right: "17px",
  backgroundColor: "#fff",
  padding: "16px",
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  [theme.breakpoints.down("desktop")]: {
    gap: "16px",
  },
}));

const TopBox = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "50%",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.down("mobileMedium")]: {
    flexDirection: "column",
    width: "100%",
  },
}));

const BottomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  gap: "8px",
  [theme.breakpoints.down("desktop")]: {
    alignItems: "center",
    flexWrap: "wrap",
  },
}));

const TopBoxText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "24px",
  color: "#0B1C2C",
  width: "50%",
  [theme.breakpoints.down("mobileMedium")]: {
    width: "100%",
    textAlign: "center",
  },
}));

const TopBoxContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  width: "50%",
  [theme.breakpoints.down("mobileMedium")]: {
    width: "100%",
  },
}));

const MiniBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const MiniBoxGrayText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "15px",
  color: "#77757F",
  [theme.breakpoints.down("desktop")]: {
    fontSize: "10px",
    lineHeight: "12px",
  },
}));

const MiniBoxLeftText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "20px",
  lineHeight: "24px",
  color: "#0B1C2C",
  [theme.breakpoints.down("desktop")]: {
    fontSize: "16px",
    lineHeight: "20px",
  },
}));

const MiniCard = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: "#EFF2F4",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "4px",
  width: "130px",
  height: "32px",
}));

const MiniCardLeftText = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "100%",
  backgroundColor: "#E5E9EE",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "17px",
  color: "#0B1C2C",
  padding: "0 5px",
}));

const MiniCardRightBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "98px",
  padding: "6px 4px 6px 4px",
}));

const MiniCardRightText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "17px",
  color: "#0B1C2C",
  marginRight: "2px",
}));

function StatusCard() {
  return (
    <Container>
      <TopBox>
        <TopBoxText>Parque Ventos do Agreste</TopBoxText>
        <TopBoxContent>
          <MiniBox
            sx={{
              gap: "5px",
            }}
          >
            <Image src="/graph.png" height={20} width={40} alt={""} />
            <MiniBoxGrayText>Avaliação</MiniBoxGrayText>
          </MiniBox>
          <Divider orientation="vertical" flexItem />
          <MiniBox>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <MiniBoxLeftText>48/</MiniBoxLeftText>
              <MiniBoxGrayText>60</MiniBoxGrayText>
            </Box>
            <MiniBoxGrayText>Devices</MiniBoxGrayText>
          </MiniBox>
          <Divider orientation="vertical" flexItem />
          <MiniBox>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <MiniBoxLeftText>48/</MiniBoxLeftText>
              <ArrowUpIcon width={9} stroke="#0B1C2C" strokeWidth="4" />
            </Box>
            <MiniBoxGrayText>Vento (m/s)</MiniBoxGrayText>
          </MiniBox>
          <Divider orientation="vertical" flexItem />
          <MiniBox>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <MiniBoxLeftText>44</MiniBoxLeftText>
              <MiniBoxGrayText
                sx={{
                  paddingLeft: "5px",
                }}
              >
                novas
              </MiniBoxGrayText>
            </Box>
            <MiniBoxGrayText>Ocorrências</MiniBoxGrayText>
          </MiniBox>
        </TopBoxContent>
      </TopBox>
      <BottomBox>
        <MiniCard>
          <MiniCardLeftText
            sx={{
              color: "#0B1C2C",
            }}
          >
            02
          </MiniCardLeftText>
          <MiniCardRightBox>
            <MiniCardRightText>Sem sinal</MiniCardRightText>
            <ChevronRightIcon width={20} stroke="#9194A7" strokeWidth="3" />
          </MiniCardRightBox>
        </MiniCard>
        <MiniCard>
          <MiniCardLeftText
            sx={{
              backgroundColor: "#F53E3E",
              color: "#FFFFFF",
            }}
          >
            03
          </MiniCardLeftText>
          <MiniCardRightBox>
            <MiniCardRightText>Parado</MiniCardRightText>
            <ChevronRightIcon width={20} stroke="#9194A7" strokeWidth="3" />
          </MiniCardRightBox>
        </MiniCard>
        <MiniCard>
          <MiniCardLeftText
            sx={{
              backgroundColor: "#FFC599",
              color: "#0B1C2C",
            }}
          >
            02
          </MiniCardLeftText>
          <MiniCardRightBox>
            <MiniCardRightText>M.Corretiva</MiniCardRightText>
            <ChevronRightIcon width={20} stroke="#9194A7" strokeWidth="3" />
          </MiniCardRightBox>
        </MiniCard>
        <MiniCard>
          <MiniCardLeftText
            sx={{
              backgroundColor: "#FFDE54",
              color: "#0B1C2C",
            }}
          >
            02
          </MiniCardLeftText>
          <MiniCardRightBox>
            <MiniCardRightText>Alarme</MiniCardRightText>
            <ChevronRightIcon width={20} stroke="#9194A7" strokeWidth="3" />
          </MiniCardRightBox>
        </MiniCard>
      </BottomBox>
    </Container>
  );
}

export default StatusCard;
