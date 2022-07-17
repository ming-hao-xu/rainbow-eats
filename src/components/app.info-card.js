import React, { useState, useEffect } from "react";

// mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import ShareIcon from "@mui/icons-material/Share";

// components
import MenuDialog from "./app.menu-dialog";

// i18n
import { useTranslation } from "react-i18next";

export default function InfoCard() {
  const { t } = useTranslation();
  const [truckInfo, setTruckInfo] = useState([]);

  // fetch from MongoDB API
  useEffect(() => {
    fetch(
      "https://ap-southeast-1.aws.data.mongodb-api.com/app/rainboweats-frtny/endpoint/truckinfo"
    )
      .then((response) => response.json())
      .then((data) => setTruckInfo(data));
  }, []);

  return (
    <Box sx={{ mt: 10, ml: 2 }}>
      <Masonry columns={4} spacing={2}>
        {truckInfo.map((truck) => (
          <Card
            sx={{
              boxShadow: 6,
            }}
            key={truck._id}
            elevation={6}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt={truck.truck_name}
                image={"./images/truck/" + truck._id + ".png"}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {truck.truck_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {truck.truck_description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <MenuDialog truckInfo={truck} />
              <Button>
                <MapIcon style={{ marginRight: "5px" }} />
                {t("app.info-card.map")}
              </Button>
              <Button>
                <ShareIcon style={{ marginRight: "5px" }} />
                {t("app.info-card.share")}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Masonry>
    </Box>
  );
}
