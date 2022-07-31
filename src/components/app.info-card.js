import React, { useState, useEffect } from "react";

// mui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import BedtimeIcon from "@mui/icons-material/Bedtime";

// components
import MenuDialog from "./app.menu-dialog";
import MapDialog from "./app.map-dialog";
import ShareDialog from "./app.share-dialog";

export default function InfoCard() {
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
    <Box
      sx={{
        ml: { sm: 0, md: 2, lg: 2 },
      }}
    >
      <Masonry sx={{ mt: 9 }} spacing={2} columns={{ sm: 1, md: 4, lg: 4 }}>
        {/* map truckInfo first where truck.truck_avilable is true */}
        {truckInfo.map((truck) =>
          truck.available ? (
            <Card elevation={6} key={truck._id} sx={{ borderRadius: "20px" }}>
              <CardMedia
                component="img"
                alt={truck.name}
                image={"./images/truck/" + truck._id + ".png"}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" noWrap={true}>
                  {truck.name}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  {truck.description}
                </Typography>
              </CardContent>
              <CardActions>
                <MenuDialog available={true} name={truck.name} />

                <MapDialog
                  available={true}
                  name={truck.name}
                  lat={truck.lat}
                  lng={truck.lng}
                />

                <ShareDialog
                  name={truck.name}
                  description={truck.description}
                />
              </CardActions>
            </Card>
          ) : null
        )}

        {/* map truckInfo second where truck.truck_avilable is false */}
        {truckInfo.map((truck) =>
          truck.available ? null : (
            <Card elevation={6} key={truck._id} sx={{ borderRadius: "20px" }}>
              <div style={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  alt={truck.name}
                  image={"./images/truck/" + truck._id + ".png"}
                  // dim image when truck is not available
                  sx={{
                    opacity: 0.5,
                    filter: "grayscale(100%)",
                  }}
                />

                <BedtimeIcon
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    mt: 4,
                  }}
                >
                  Currently unavailable
                </Typography>
              </div>

              <CardContent>
                <Typography gutterBottom variant="h5" noWrap={true}>
                  {truck.name}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  {truck.description}
                </Typography>
              </CardContent>
              <CardActions>
                <MenuDialog available={false} />

                <MapDialog available={false} name={truck.name} />

                <ShareDialog
                  name={truck.name}
                  description={truck.description}
                />
              </CardActions>
            </Card>
          )
        )}
      </Masonry>
    </Box>
  );
}
