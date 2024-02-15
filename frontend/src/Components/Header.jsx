import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import React from "react";
import {styled} from "@mui/system";

const LeftNav = styled('div')({
    marginRight: 'auto',
});

const RightNav = styled('div')({
    marginLeft: 'auto',
    marginRight: '10rem',
});

const PropertyBtn = styled(Button)({
    backgroundColor: 'green',
    color: 'white',
    width: '15rem',
    fontSize: '1.1rem',
    marginRight: '1rem',
});

const LoginBtn = styled(Button)({
    backgroundColor: 'white',
    color: 'black',
    width: '15rem',
    fontSize: '1.1rem',
    marginLeft: '1rem',
    '&:hover': {
        backgroundColor: 'green',
        color: 'white',
    },
});

function Header() {
    return (
        <AppBar position="static" style={{backgroundColor: "black"}}>
            <Toolbar>
                <LeftNav>
                    <Button color="inherit">
                        <Typography variant="h4">LBREP</Typography>
                    </Button>
                </LeftNav>
                <Button color="inherit" style={{marginRight: '2rem'}}>
                    <Typography variant="h6">Listings</Typography>
                </Button>
                <Button color="inherit" style={{marginLeft: '2rem'}}>
                    <Typography variant="h6">Agencies</Typography>
                </Button>
                <RightNav>
                    <PropertyBtn>
                        <Typography variant="h6">Add Property</Typography>
                    </PropertyBtn>
                    <LoginBtn>
                        <Typography variant="h6">Login</Typography>
                    </LoginBtn>
                </RightNav>
            </Toolbar>
        </AppBar>
    );
}

export default Header;