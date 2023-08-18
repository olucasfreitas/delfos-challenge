"use client";

import {
  Chip,
  ChipProps,
  Divider,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import Box from "@mui/material/Box";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import React from "react";
import useDrawerStore from "@/components/Drawer/store";
import { MenuIcon, SelectorIcon } from "@heroicons/react/outline";
import { CalendarIcon } from "@heroicons/react/solid";
import theme from "@/helpers/theme";

const Container = styled(Box)(({ theme }) => ({
  height: "56px",
  backgroundColor: "#EFF2F4",
  padding: "12.5px 13px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "2px solid #CFD4E5",
  [theme.breakpoints.down("laptop")]: {
    flexDirection: "column",
    height: "auto",
    gap: "10px",
  },
}));

const LeftSide = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "16px",
  height: "100%",
  width: "50%",
  [theme.breakpoints.down("laptop")]: {
    width: "100%",
    justifyContent: "space-between",
  },
}));

const LeftSideText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "24px",
  lineHeight: "29px",
}));

const StyledChip = styled((props: ChipProps) => (
  <Chip
    variant="outlined"
    color="warning"
    label="Real Time"
    icon={
      <Box
        sx={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#F42829",
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  borderColor: "#F42829",
  padding: "5px",
  borderRadius: "4px",
  width: "fit-content",
  height: "27px",
  "& .MuiChip-label": {
    paddingRight: "0px",
    color: "#F42829",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "17px",
  },
}));

const RightSide = styled(LeftSide)(({ theme }) => ({
  justifyContent: "flex-end",
  gap: "16px",
  width: "50%",
  [theme.breakpoints.down("laptop")]: {
    width: "100%",
    justifyContent: "space-between",
  },
}));

const SelectBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "5px",
  "& .MuiTextField-root": {
    width: "130px",
  },
  [theme.breakpoints.down("mobileMedium")]: {
    "& .MuiFormControl-root": {
      width: "70%",
    },
  },
}));

const SmallerText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "10px",
  lineHeight: "12px",
  color: "#8C97A1",
  [theme.breakpoints.down("mobileMedium")]: {
    display: "none",
  },
}));

const BiggerText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "20px",
  color: "#0C111C",
  [theme.breakpoints.down("mobileMedium")]: {
    display: "none",
  },
}));

const StyledSelect = styled((props: SelectProps) => (
  <Select
    IconComponent={() => (
      <SelectorIcon
        width={20}
        stroke="#FF7005"
        strokeWidth="3"
        style={{ marginRight: "5px" }}
      />
    )}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#FFE2CC",
  fontSize: "16px",
  fontWeight: 500,
  color: "#FF7005",
  border: "none",
  outline: "none",
  borderRadius: "4px",
  padding: "0",
  "& .MuiInputBase-input": {
    padding: "3.5px 10px",
  },
  "& fieldset": {
    border: "none",
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  color: "#0C111C",
  [theme.breakpoints.up("mobileLarge")]: {
    display: "none",
  },
}));

function TopBar() {
  const [selectValue, setSelectValue] = React.useState(
    "Parque Ventos do Agreste"
  );
  const [isPickerOpen, setIsPickerOpen] = React.useState(false);

  const { isMobileDrawerOpen, handleOpenAndCloseMobileDrawer } =
    useDrawerStore();

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setSelectValue(event.target.value as string);
  };

  return (
    <Container>
      <LeftSide>
        <MenuButton
          onClick={() => handleOpenAndCloseMobileDrawer(!isMobileDrawerOpen)}
        >
          <MenuIcon width={24} strokeWidth="2" />
        </MenuButton>
        <LeftSideText>Highlights</LeftSideText>
        <StyledChip />
      </LeftSide>
      <RightSide>
        <DesktopDatePicker
          defaultValue={dayjs("2022-04-17")}
          open={isPickerOpen}
          onClose={() => setIsPickerOpen(!isPickerOpen)}
          slotProps={{
            inputAdornment: {
              position: "start",
              component: () => (
                <IconButton
                  sx={{
                    backgroundColor: "#0C111C",
                    borderRadius: "4px",
                    padding: "5px",
                    width: "32px",
                    height: "32px",
                    marginRight: "10px",
                    "&:hover": {
                      backgroundColor: "grey",
                    },
                  }}
                  onClick={() => setIsPickerOpen(true)}
                >
                  <CalendarIcon width={20} color={"#F9F9F9"} />
                </IconButton>
              ),
            },
            textField: {
              variant: "outlined",
              sx: {
                "& .MuiInputBase-root": {
                  padding: 0,
                  width: "130px",
                  "& .MuiInputBase-input": {
                    padding: 0,
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "#0C111C",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                },
              },
            },
          }}
        />
        <SelectBox>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: theme.breakpoints.up("mobileLarge") ? "none" : "flex",
            }}
          />
          <Box>
            <SmallerText>Visualizando</SmallerText>
            <BiggerText>Portfolio</BiggerText>
          </Box>
          <FormControl
            sx={{ ml: "5px", width: 258, minHeight: "30px" }}
            size="small"
            variant="outlined"
          >
            <StyledSelect
              value={selectValue}
              onChange={(data) => handleChange(data)}
            >
              <MenuItem value={"Parque Ventos do Agreste"}>
                Parque Ventos do Agreste
              </MenuItem>
              <MenuItem value={"Parque Ventos do Agreste 1"}>
                Parque Ventos do Agreste 1
              </MenuItem>
              <MenuItem value={"Parque Ventos do Agreste 2"}>
                Parque Ventos do Agreste 2
              </MenuItem>
            </StyledSelect>
          </FormControl>
        </SelectBox>
      </RightSide>
    </Container>
  );
}

export default TopBar;
