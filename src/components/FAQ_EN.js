import React, {Fragment, useEffect, useState} from "react"
import background1 from "../media/FAQBackground.jpg"

import {makeStyles} from "@material-ui/core/styles"
import {Box, Divider, Grid, Modal, Typography} from "@material-ui/core";
import {Carousel} from "react-responsive-carousel";
import equi1 from '../media/equi1.png'
import equi2 from '../media/equi2.png'
import equi3 from '../media/equi3.png'
import equi4 from '../media/equi4.png'
import equi5 from '../media/equi5.png'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useAuth from "../hooks/useAuth";
import {useMediaQuery} from "react-responsive";

const useStyles = makeStyles((theme) => ({
    root:
        {
            flexGrow: 1
        },
    box1: {
        backgroundImage: `url(${background1})`,
        backgroundSize: 'cover',
        minHeight: "100vh",
        paddingTop: '75px',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },

    box1Mobile: {
        backgroundImage: `url(${background1})`,
        backgroundSize: 'cover',
        paddingBottom: '10vmax',
        paddingTop: '150px',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box1Content: {
        width: '66vw',
        minHeight: '55vh',
        borderRadius: '35px',
        background: 'rgba(252, 252, 252, 0.87)',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '5%',
    },
    box1ContentMobile: {
        width: '90vw',
        borderRadius: '35px',
        background: 'rgba(252, 252, 252, 0.87)',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    customDiv: {
        paddingTop: '5px',
        backgroundColor: '#000000',
        width: '35%',
        borderRadius: '15px',
        marginBottom: '5%',
    },
    customDivMobile: {
        paddingTop: '5px',
        backgroundColor: '#000000',
        width: '90%',
        borderRadius: '15px',
        marginBottom: '5%',
    },
    box2: {
        backgroundColor: "#ffffff",
        padding: "8% 0%",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box2Content: {
        width: '60vw',
        display: "flex",
        justifyContent: 'center',
    },
    box2ContentMobile: {
        width: '90vw',
        display: "flex",
        justifyContent: 'center',
    },
    textFAQ: {
        fontSize: 15,
        fontFamily: '"Montserrat-Regular"',
        textAlign: 'Left',
        lineHeight: 3,
    },
    textFAQMobile: {
        fontSize: '2vmax',
        fontFamily: '"Montserrat-Regular"',
        textAlign: 'Left',
        lineHeight: 1.5,
    },
    titleFAQ: {
        fontSize: 18,
        fontFamily: '"Montserrat-Medium"',
        textAlign: 'center',
        lineHeight: 3,
    },
    titleFAQMobile: {
        fontSize: '2.5vmax',
        fontFamily: '"Montserrat-Medium"',
        textAlign: 'center',
        lineHeight: 1.5,
    },
    box3: {
        backgroundColor: "#f2f2f2",
        paddingTop: "8%",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box3Content: {
        width: '50vw',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box3ContentMobile: {
        width: '90vw',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    notBold: {
        fontFamily: 'Montserrat-SemiBold'
    },
    carousel: {
        width: '80vh',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },

    carouselMobile: {
        width: '70vw',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:'10vmax'
    },
    imgMobile: {
        maxWidth: '50vmax',
        objectFit: 'contain',
    },
    spacing: {
        paddingBottom: '5%'
    },
    h1Mobile: {
        fontSize: '5vmax',
        fontFamily: 'Montserrat-Bold',
    },

    h2Mobile: {
        fontSize: '4.5vmax',
        fontFamily: 'Montserrat-Bold',
    },

    h3Mobile: {
        fontSize: '4vmax',
        fontFamily: 'Montserrat-Bold',
    },

    h4Mobile: {
        fontSize: '3.5vmax',
        fontFamily: 'Montserrat-Bold',
    },
    h5Mobile: {
        fontSize: '3vmax',
        fontFamily: 'Montserrat-Bold',
    },

    h6Mobile: {
        fontSize: '2.5vmax',
        fontFamily: 'Montserrat-Bold',
    },
    body1Mobile: {
        fontSize: '2vmax',
        fontFamily: 'Montserrat-Regular',
    },

    body2Mobile: {
        fontSize: '2vmax',
        fontFamily: 'Montserrat-Light',
    },
    body3Mobile: {
        fontSize: '2.5vmax',
        fontFamily: 'Montserrat-Medium',
    },
}));

export default function FAQ_EN() {
    const classes = useStyles()
    const [openPopup, setOpenPopup] = React.useState(false);
    const handleOpenPopup = () => setOpenPopup(true);
    const handleClosePopup = () => setOpenPopup(false);
    const [admin, setAdmin] = useState(false);
    const {currentUser} = useAuth()
    useEffect(() => {
        if (currentUser !== null) {
            if (currentUser.hasOwnProperty('username')) {
                setAdmin(true);
            }
        }
    });
    const imgList = [equi1, equi2, equi3, equi4, equi5]
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'})
    return (
        <Fragment>
            {isTabletOrMobile ? (<Fragment>
                <Box className={classes.box1Mobile}>
                    <Grid container className={classes.box1ContentMobile} direction={'column'} spacing={4}
                          alignItems={'center'} justifyContent={'center'}>
                        <Grid item>
                            <Typography className={classes.h2Mobile} align={'center'}>
                                Answers to your questions
                            </Typography>
                        </Grid>
                        <Divider classes={{root: classes.customDiv}}/>
                        <Grid item>
                            <Typography className={classes.body2Mobile} align={'center'}>
                                We answer your most frequently asked questions and show some electricity consumption equivalencies with everyday items and actions.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={classes.box2}>
                    <Grid container direction={'column'} className={classes.box2ContentMobile} spacing={2}>
                        <Grid item container direction={'row'} justifyContent={'center'}>
                            <Grid item style={{width: '50vw'}}>
                                <Typography className={classes.h3Mobile} align={'center'}>
                                    Frequently asked questions
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider classes={{root: classes.customDivMobile}} style={{alignSelf: 'center'}}/>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                            >
                                <Typography className={classes.titleFAQMobile}>How does the bike work?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={classes.textFAQMobile}>
                                    It's easy! Just do your usual workout on your Off The Grid spinning bike, and the energy generated is transformed into electricity. Thanks to our technology, it is then synchronized and distributed directly into your electrical grid. Our solution is turnkey: no need for a battery or a certificate from Hydro-Québec. Simply plug the bike into a standard wall outlet (120V) and you're good to go!
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                            >
                                <Typography className={classes.titleFAQMobile}>How much energy can I generate on a bike?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={classes.textFAQMobile}>
                                    On average, an individual will produce about 150Wh during a one-hour workout. However, our bike can generate a maximum of 250Wh of energy.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                            >
                                <Typography className={classes.titleFAQMobile}>Are your products made in Québec?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={classes.textFAQMobile}>
                                    In our desire to offer the most eco-friendly product possible, we always prioritize local partnerships. Our product was designed, manufactured and assembled in Quebec with mechanical, electrical and computing partners from our home province!
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            fullWidth
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                            >
                                <Typography className={classes.titleFAQMobile}>Can I charge my cellphone while working out?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={classes.textFAQMobile}>
                                    Yes, the basic charging cables (USB Type-C, Micro-USB and iPhone) are included. Just plug in your device and pedal!
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                            >
                                <Typography className={classes.titleFAQMobile}>Can I see my training history?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={classes.textFAQMobile}>
                                    Of course! Our bike connects to your wireless Internet network and transmits your training data to a database. You can then access it for free to see your performance, the amount of energy produced and ecological equivalents in real-time!
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Box>
                <Box className={classes.box3}>
                    <Grid container direction={'column'} className={classes.box3ContentMobile}>
                        <Grid item>
                            <Typography className={classes.h3Mobile} align={'center'}>
                                Equivalencies
                            </Typography>
                        </Grid>
                        <Divider classes={{root: classes.customDivMobile}}/>
                        <Grid item>
                            <Typography className={classes.h5Mobile} align={'center'}>
                                How much electricity am I generating?
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.body1Mobile} align={'center'}>
                                These equivalencies give a quick picture of what an hour of cycling on the Off The Grid bike can supply in electricity, on average.
                            </Typography>
                        </Grid>
                        <Grid item className={classes.carouselMobile}>
                            <Carousel
                                swipeable
                                autoPlay
                                showArrows
                                showThumbs={false}
                                infiniteLoop
                                emulateTouch
                                interval={3000}
                            >
                                {imgList.map(imgInList =>
                                    <div>
                                        <img src={imgInList} className={classes.imgMobile}/>
                                    </div>
                                )}
                            </Carousel>
                        </Grid>
                    </Grid>
                </Box>
            </Fragment>
            )
                :(
        <Fragment>
            <Box className={classes.box1}>
                <Grid container className={classes.box1Content} direction={'column'} spacing={8}>
                    <Grid item container direction={'row'}>
                        <Grid item xs={8}>
                            <Typography variant={'h1'}>
                                Answers to your questions
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider classes={{root: classes.customDiv}} style={{marginLeft: '35px'}}/>
                    <Grid item>
                        <Typography variant={'h5'} className={classes.notBold}>
                            We answer your most frequently asked questions and show some electricity consumption equivalencies with everyday items and actions.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.box2}>
                <Grid container direction={'column'} className={classes.box2Content} spacing={8}>
                    <Grid item container direction={'row'} justifyContent={'center'}>
                        <Grid item style={{width: '50vw'}}>
                            <Typography variant={'h1'} align={'center'}>
                                Frequently asked questions
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider classes={{root: classes.customDiv}} style={{alignSelf:'center'}}/>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography className={classes.titleFAQ}> How does the bike work?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.textFAQ}>
                                It's easy! Just do your usual workout on your Off The Grid spinning bike, and the energy generated is transformed into electricity. Thanks to our technology, it is then synchronized and distributed directly into your electrical grid. Our solution is turnkey: no need for a battery or a certificate from Hydro-Québec. Simply plug the bike into a standard wall outlet (120V) and you're good to go!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography className={classes.titleFAQ}>How much energy can I generate on a bike?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.textFAQ}>
                                On average, an individual will produce about 150Wh during a one-hour workout. However, our bike can generate a maximum of 250Wh of energy.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography className={classes.titleFAQ}>Are your products made in Québec?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.textFAQ}>
                                In our desire to offer the most eco-friendly product possible, we always prioritize local partnerships. Our product was designed, manufactured and assembled in Quebec with mechanical, electrical and computing partners from our home province!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography className={classes.titleFAQ}>Can I charge my cellphone while working out?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.textFAQ}>
                                Yes, the basic charging cables (USB Type-C, Micro-USB and iPhone) are included. Just plug in your device and pedal!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography className={classes.titleFAQ}>Can I see my training history?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.textFAQ}>
                                Of course! Our bike connects to your wireless Internet network and transmits your training data to a database. You can then access it for free to see your performance, the amount of energy produced and ecological equivalents in real-time!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Box>
            <Box className={classes.box3}>
                <Grid container direction={'column'} className={classes.box3Content}>
                    <Grid item className={classes.spacing}>
                        <Typography variant={'h1'} align={'center'} >
                            Equivalencies
                        </Typography>
                    </Grid>
                    <Divider classes={{root: classes.customDiv}}/>
                    <Grid item container direction={'row'} justifyContent={'center'} spacing={2} className={classes.spacing}>
                        <Grid item className={classes.spacing}>
                            <Typography variant={'h6'} align={'center'}>
                                How much electricity am I generating?
                            </Typography>
                        </Grid>
                        <Grid item className={classes.spacing}>
                            <Typography variant={'body2'} align={'center'}>
                                These equivalencies give a quick picture of what an hour of cycling on the Off The Grid bike can supply in electricity, on average.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.carousel}>
                        <Carousel
                            swipeable
                            autoPlay
                            showArrows
                            showThumbs
                            infiniteLoop
                            emulateTouch
                            interval={3000}
                        >
                            {imgList.map(imgInList =>
                                <div>
                                    <img src={imgInList}/>
                                </div>
                            )}
                        </Carousel>
                    </Grid>
                </Grid>
            </Box>
        </Fragment>)}
        </Fragment>
    );
}
