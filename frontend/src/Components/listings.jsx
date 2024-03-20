import React from "react";

// React Leaflet
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import {Icon} from "leaflet";

// MUI
import {Grid, AppBar, Typography} from "@mui/material";

// Map icons
import houseIconPng from "./Assets/Mapicons/house.png";
import apartmentIconPng from "./Assets/Mapicons/apartment.png";
import officeIconPng from "./Assets/Mapicons/office.png";

function Listings() {
    const houseicon = new Icon({
        iconUrl: houseIconPng,
        iconSize: [30, 30],
    });

    const apartmenticon = new Icon({
        iconUrl: apartmentIconPng,
        iconSize: [30, 30],
    });

    const officeicon = new Icon({
        iconUrl: officeIconPng,
        iconSize: [30, 30],
    });

    return (
        <Grid container>
            <Grid item xs={4}>
                <Typography variant={"h1"}>Listings</Typography>
            </Grid>
            <Grid item xs={8}>
                <AppBar position="static">
                    <div style={{height: "100vh"}}>
                        <MapContainer center={[51.487, -0.126]} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker
                                icon={officeicon}
                                position={[51.505, -0.09]}>
                                <Popup>
                                    A pretty CSS3 popup. <br/> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </AppBar>
            </Grid>
        </Grid>
    );
}

export default Listings;