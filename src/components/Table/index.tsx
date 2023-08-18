import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer, {
  TableContainerProps,
} from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { CheckCircleIcon } from "@heroicons/react/solid";
import {
  ChevronDownIcon,
  CheckCircleIcon as OutlinedCheckCircleIcon,
} from "@heroicons/react/solid";
import { Box, Button, Checkbox, Menu, MenuItem, styled } from "@mui/material";
import ScadaIcon from "../../assets/SCADA.png";
import ThreatStateIcon from "../../assets/1.png";
import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

function createData(
  id: string,
  origemStatus: boolean,
  alarm: string,
  assetType: string,
  asset: string,
  systemOrigin: string,
  response: string,
  approved: boolean
) {
  return {
    id,
    origemStatus,
    alarm,
    assetType,
    asset,
    systemOrigin,
    response,
    approved,
  };
}

const rows = [
  createData(
    "92045",
    true,
    "Purus viverra ",
    "Molestie magna",
    "ABC-08-01",
    "Environment",
    "Kira  Madsen",
    true
  ),
  createData(
    "31567",
    false,
    "Lorem ipsum ",
    "Consectetur adipiscing elit",
    "XYZ-12-34",
    "Technology",
    "John Doe",
    false
  ),
  createData(
    "78923",
    true,
    "Vestibulum ante ",
    "In faucibus orci luctus et",
    "LMN-45-67",
    "Healthcare",
    "Jane Smith",
    true
  ),
  createData(
    "37891",
    true,
    "Vestibulum ante",
    "In faucibus orci ",
    "ADM-10-90",
    "Healthcare",
    "Jane Smith",
    true
  ),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: "#77757F",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "17px",
  backgroundColor: "#D6DCE3",
  textAlign: "center",
  minWidth: "80px",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F9F9F9",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const InsideTableCell = styled(TableCell)(({ theme }) => ({
  color: "#77757F",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "17px",
  height: "64px",
  padding: "0 16px",
  textAlign: "center",
  textOverflow: "ellipsis",
  minWidth: "80px",
}));

const StyledTableContainer = styled((props: TableContainerProps) => (
  <TableContainer component={Paper} {...props} />
))(({ theme }) => ({
  "&::-webkit-scrollbar": {
    width: 20,
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#8C97A1",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#4A4754",
    borderRadius: "8px",
  },
}));

export default function BasicTable() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledTableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>OrigemStatus</StyledTableCell>
            <StyledTableCell>Alarme</StyledTableCell>
            <StyledTableCell>Asset type</StyledTableCell>
            <StyledTableCell>Asset</StyledTableCell>
            <StyledTableCell>OrigemSistema</StyledTableCell>
            <StyledTableCell>Resp.</StyledTableCell>
            <StyledTableCell>Aprovado</StyledTableCell>
            <StyledTableCell>Ações</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <InsideTableCell>{row.id}</InsideTableCell>
              <InsideTableCell>
                <img src="scadaLogo.png" />
                <img src="redDot.png" />
              </InsideTableCell>
              <InsideTableCell>{row.alarm}</InsideTableCell>
              <InsideTableCell>{row.assetType}</InsideTableCell>
              <InsideTableCell>{row.asset}</InsideTableCell>
              <InsideTableCell>{row.systemOrigin}</InsideTableCell>
              <InsideTableCell>{row.response}</InsideTableCell>
              <InsideTableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Checkbox
                    disableTouchRipple={true}
                    icon={
                      <Box
                        sx={{
                          width: 20,
                          borderRadius: "50%",
                          height: 20,
                          border: "1px solid #B1B9C3",
                          alignSelf: "center",
                        }}
                      />
                    }
                    onChange={() => {}}
                    checkedIcon={
                      <CheckCircleIcon width={25} height={25} fill="#1FD3A6" />
                    }
                  />
                </Box>
              </InsideTableCell>
              <InsideTableCell>
                <Button
                  disableRipple={true}
                  disableTouchRipple={true}
                  variant="outlined"
                  sx={{
                    padding: 0,
                    minWidth: "30px",
                    minHeight: "30px",
                    border: "1px solid #B1B9C3",
                  }}
                  onClick={handleClick}
                >
                  <ChevronDownIcon width={20} color="#615E69" />
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={handleClose}>Ação 1</MenuItem>
                  <MenuItem onClick={handleClose}>Ação 2</MenuItem>
                  <MenuItem onClick={handleClose}>Ação 3</MenuItem>
                </Menu>
              </InsideTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}
