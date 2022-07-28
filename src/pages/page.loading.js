import React from "react";

// mui
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function SimpleBackdrop() {
  return (
    <Backdrop open={true}>
      <CircularProgress color="error" size={100} />
    </Backdrop>
  );
}
