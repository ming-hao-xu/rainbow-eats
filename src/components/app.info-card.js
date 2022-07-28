import React, { useState, useEffect } from "react";

// mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import Masonry from "@mui/lab/Masonry";
import ShareIcon from "@mui/icons-material/Share";

// components
import MenuDialog from "./app.menu-dialog";

// i18n
import { useTranslation } from "react-i18next";

export default function InfoCard() {
  const { t } = useTranslation();
  const [truckInfo, setTruckInfo] = useState([]);

  // fetch from MongoDB
  useEffect(() => {
    fetch(
      "https://ap-southeast-1.aws.data.mongodb-api.com/app/rainboweats-frtny/endpoint/truckinfo"
    )
      .then((response) => response.json())
      .then((data) => setTruckInfo(data));
  }, []);

  return (
    // this div fix mui masonry spacing issue
    <div style={{marginLeft : "16px"}}>
    <Masonry columns={4} sx={{ mt: 9 }} spacing={2}>
      {truckInfo.map((truck) => (
        <Card elevation={6} key={truck._id} sx={{ borderRadius: "20px" }}>
          <CardMedia
            component="img"
            alt={truck.truck_name}
            image={"./images/truck/" + truck._id + ".png"}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" noWrap={true}>
              {truck.truck_name}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {truck.truck_description}
            </Typography>
          </CardContent>
          <CardActions>
            <MenuDialog truckName={truck.truck_name} />
            <Button
              variant="contained"
              disableElevation
              disableRipple
              sx={{ mr: 1, mb: 0.5 }}
              endIcon={<MapIcon />}
            >
              {t("app.info-card.map")}
            </Button>
            <Button
              variant="contained"
              disableElevation
              disableRipple
              sx={{ mr: 1, mb: 0.5 }}
              endIcon={<ShareIcon />}
            >
              {t("app.info-card.share")}
            </Button>
          </CardActions>
        </Card>
      ))}
    </Masonry>
    </div>
  );
}
