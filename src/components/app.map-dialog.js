import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

// components
import MapIcon from "@mui/icons-material/Map";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";

// pages
import Loading from "../pages/page.loading";

// i18n
import { useTranslation } from "react-i18next";

function Map({ name, lat, lng }) {
  const center = useMemo(
    () => ({ lat: 34.98127841435381, lng: 135.96372688660392 }),
    []
  );

  const marker = useMemo(() => ({ lat: lat, lng: lng }), []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <Loading />;
  }
  return (
    <GoogleMap
      zoom={18}
      center={center}
      mapContainerClassName="map-container"
      mapTypeId="hybrid"
    >
      <MarkerF position={marker} label={name} />
    </GoogleMap>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MapDialog({ available, name, lat, lng }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        disableElevation
        disableRipple
        sx={{ mr: 1, mb: 0.5 }}
        endIcon={<MapIcon />}
        onClick={handleClickOpen}
        disabled={!available}
      >
        {t("app.info-card.map")}
      </Button>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {t("app.map-dialog.location")}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              {t("app.map-dialog.close")}
            </Button>
          </Toolbar>
        </AppBar>

        <Map {...{ name, lat, lng }} />
      </Dialog>
    </>
  );
}

MapDialog.propTypes = {
  available: PropTypes.bool.isRequired,
  name: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

Map.propTypes = {
  name: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
};
