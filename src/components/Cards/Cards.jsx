import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import Styles from './Cards.module.css';

const Cards = (props) => {
    console.log(props);

    return <div className={Styles.container}>
        <Grid container spacing={3} justify="center">
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Infected
                    </Typography>
                    <Typography variant="h5">
                        Data
                    </Typography>
                    <Typography color="textSecondary" >
                        Last Date
                    </Typography>
                    <Typography variant="body2">
                        Number of Active Cases of COVID-19
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Recovered
                    </Typography>
                    <Typography variant="h5">
                        Data
                    </Typography>
                    <Typography color="textSecondary" >
                        Last Date
                    </Typography>
                    <Typography variant="body2">
                        Number of Recovered from COVID-19
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Deaths
                    </Typography>
                    <Typography variant="h5">
                        RecoveredData
                    </Typography>
                    <Typography color="textSecondary" >
                        Last Date
                    </Typography>
                    <Typography variant="body2">
                        Number of Deaths Caused by COVID-19
                    </Typography>
                </CardContent>
            </Grid>
        </Grid>
    </div>
}

export default Cards;