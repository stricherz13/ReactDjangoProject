import React from "react";
import {Button, CssBaseline, Toolbar, AppBar, Typography} from "@mui/material";
import {styled} from "@mui/material/styles"

const useStyles = styled({
    leftNav: {
        marginRight: "auto"
    },
    rightNav: {
        marginLeft: "auto",
        marginRight: "10rem"
    },
    propertyBtn: {
        backgroundColor: "green",
        color: "white",
        width: "15rem",
        fontSize: "1.1rem",
        marginRight: "1rem"
    },
    loginBtn: {
        backgroundColor: "white",
        color: "black",
        width: "15rem",
        fontSize: "1.1rem",
        marginLeft: "1rem"
    }
});

function Home() {
    const classes = useStyles();
    return (
        <>
            <CssBaseline/>
            <AppBar position="static">
                <Toolbar>
                    <div className={classes.leftNav}>
                        <Button color="inherit"><Typography variant="h4">LBREP</Typography></Button>
                    </div>
                    <div>
                        <Button ><Typography variant="h6">Listings</Typography></Button>
                        <Button ><Typography variant="h6">Agencies</Typography></Button>
                    </div>
                    <div className={classes.rightNav}>
                        <Button className={classes.propertyBtn}>Add Property</Button>
                        <Button className={classes.loginBtn}>Login</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Home;