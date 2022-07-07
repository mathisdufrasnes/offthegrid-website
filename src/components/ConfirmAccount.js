import React, {Fragment, useEffect} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Box, CircularProgress, Divider, Grid, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root:
        {
            flexGrow: 1
        },
    box1: {
        padding: '75px',
    },
    box2: {
        paddingLeft: '15%',
        paddingRight: '15%',
        paddingTop: '5%',
        height: '100vh',
    },
    bGap: {
        marginBottom: '80px'
    },
    mGap: {
        marginBottom: '40px'
    },
    sGap: {
        marginBottom: '20px'
    },
    finalGap:{
        marginBottom: '100px'
    }

}));

export default function ConfirmAccount() {
    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.box1}>
                <div className={classes.box2}>
                    <Typography variant={'h3'} className={classes.mGap}>Votre compte a été confirmé avec succès!</Typography>
                    <Typography variant={'h5'} className={classes.bGap}>Vous pouvez à fermer cette fenêtre ou <a href={"https://www.getoffthegrid.ca/en"}>jeter un oeil à notre site Internet</a> . </Typography>
                    <Divider/>
                </div>
            </div>
        </Fragment>
    );
}

