import React from 'react';
import {Button, Typography} from '@mui/material';
import {styled} from '@mui/system';
import city from '../Assets/city.jpg';

const CityImg = styled('img')({
    width: '100%',
    height: '92vh',
    position: 'relative',
});

const OverlayText = styled('div')({
    position: 'absolute',
    zIndex: 100,
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
});

const HomeText = styled('div')({
    color: 'white',
    fontWeight: 'bolder'
});

const HomeBtn = styled(Button)({
    fontSize: '3.5rem',
    borderRadius: '15px',
    backgroundColor: 'green',
    marginTop: '2rem',
    boxShadow: '3px 3px 3px white'
});

function Home() {
    return (
        <>
            <CityImg src={city} alt="City Image"/>
            <OverlayText>
                <HomeText>
                    <Typography variant="h1">Find Your <span style={{color: "green"}}>Next Property</span></Typography>
                    <HomeBtn>See all properties</HomeBtn>
                </HomeText>
            </OverlayText>
        </>
    );
}

export default Home;
