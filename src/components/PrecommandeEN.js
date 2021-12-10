import React, {Fragment, useEffect, useState} from "react"
import background1 from "../media/backgroundPreorder.jpg"
import bikeImg from "../media/OTG-14-1-e1628705408390.png"

import {makeStyles} from "@material-ui/core/styles"
import {Box, Divider, Grid, Modal, Typography} from "@material-ui/core";
import HubspotForm from 'react-hubspot-form'
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
        backgroundColor:'#f1f1f1',
        backgroundSize: 'cover',
        display: "flex",
        paddingBottom: '10vmax',
        paddingTop: '150px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box1Content: {
        width: '66vw',
        minHeight: '55vh',
        borderRadius: '35px',
        background: 'rgba(252, 252, 252, 0.90)',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box1ContentMobile: {
        width: '90vw',
        borderRadius: '35px',
        background: 'rgba(252, 252, 252, 0.90)',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    customDiv: {
        paddingTop: '5px',
        backgroundColor: '#000000',
        width: '25%',
        borderRadius: '15px',
    },
    box2: {
        minHeight: "100vh",
        backgroundColor: "#000000",
        padding: "5%"
    },
    boxForm: {
        backgroundColor: '#f2f2f2',
        borderRadius: '35px',
        marginLeft: '3%',
        padding:'4%'
    },

    boxFormMobile: {
        backgroundColor: '#f2f2f2',
        borderRadius: '35px',
        padding:'4%',
        marginTop:'5vmax',
    },
    formPadding:{
        padding:'8% 10% 0% 8%'
    },
    bikeImg:{
        width:'30vw',
        height:'auto',
        "&:hover":{
            cursor:'zoom-in'
        }
    },
    bikeImg2:{
        width:'auto',
        height:'95vh'
    },
    modalBox:{
        height:'100vh',
        backgroundColor: "#333333",
        width:'85vh',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 0%)',
        outline:'none',
        boxShadow: '0 0 30px rgb(0,0,0,0.5)'
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
        fontFamily: 'Montserrat-SemiBold',
    },
    body1Mobile: {
        fontSize: '2vmax',
        fontFamily: 'Montserrat-Regular',
    },

    body2Mobile: {
        fontSize: '2.5vmax',
        fontFamily: 'Montserrat-Light',
    },
    body3Mobile: {
        fontSize: '2.5vmax',
        fontFamily: 'Montserrat-Medium',
    },
    customDivMobile: {
        paddingTop: '5px',
        background: '#000000',
        width: '80%',
        borderRadius: '15px',
        marginBottom: '5%'
    },
}));

export default function PrecommandeEN() {
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
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'})
    return (
        <Fragment>
            {isTabletOrMobile ? (<Fragment>
                <Box className={classes.box1Mobile}>
                    <Grid container className={classes.box1ContentMobile} direction={'column'} spacing={3}>
                        <Grid item>
                            <Typography className={classes.h3Mobile}>
                                Preorder
                            </Typography>
                        </Grid>
                        <Divider classes={{root: classes.customDivMobile}}/>
                        <Grid item>
                            <Typography className={classes.h4Mobile} color={'primary'}>
                                Don't wait !
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography className={classes.body3Mobile} align={'center'}>
                                Preorder our bikes today and make sure that you are one of the first ones to get them.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={classes.box2}>
                    <Grid item container direction={'column'} spacing={5} justifyContent={'center'}>
                        <Grid item justifyContent={'center'}>
                            <Typography className={classes.h2Mobile} color={'secondary'} align={'center'}>Contact us to get yours when they're ready</Typography>
                        </Grid>
                        <Grid item justifyContent={'center'}>
                            <Typography className={classes.body3Mobile} color={'secondary'} align={'center'}>
                                To preorder a spin bike from Off The Grid, fill out this form and let us know how many bikes you're interested in. A member of our team will then gladly contact you!
                            </Typography>
                        </Grid>
                        <Grid item justifyContent={'center'}>
                            <Typography className={classes.h6Mobile} color={'primary'} align={'center'}>Price : 3 500 $ + tx</Typography>
                        </Grid>
                        <Grid item container justifyContent={'center'} alignItems={'center'}>
                            <img src={bikeImg} className={classes.bikeImg}/>
                        </Grid>
                    </Grid>
                    <Grid item container className={classes.boxFormMobile} direction={'column'}>
                        <Grid item>
                            <Typography className={classes.h3Mobile}>Preorder request form</Typography>
                        </Grid>
                        <Grid item className={classes.formPadding}>
                            <HubspotForm
                                portalId='8730883'
                                formId='af1beb56-ad92-4f10-a092-d82b29bf39df'
                                loading={<div>Chargement du formulaire</div>}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Fragment>) : (
        <Fragment>
            <Box className={classes.box1}>
                <Grid container className={classes.box1Content} direction={'column'} spacing={8}>
                    <Grid item>
                        <Typography variant={'h1'}>
                            Preorder
                        </Typography>
                    </Grid>
                    <Divider classes={{root: classes.customDiv}}/>
                    <Grid item>
                        <Typography variant={'h4'} color={'primary'}>
                            Don't wait !
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant={'h6'} align={'center'}>
                            Preorder our bikes today and make sure that you are one of the first ones to get them.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.box2}>
                <Grid container direction={'row'}>
                    <Grid item container direction={'column'} xs spacing={8}>
                        <Grid item>
                            <Typography variant={'h3'} color={'secondary'}>Contact us to get yours when they're ready</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'body2'} color={'secondary'}>To preorder a spin bike from Off The Grid, fill out this form and let us know how many bikes you're interested in. A member of our team will then gladly contact you!</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'h5'} color={'primary'}>Price : 3 500 $ + tx</Typography>
                        </Grid>
                        <Grid item>
                            <img src={bikeImg} className={classes.bikeImg} onClick={handleOpenPopup}/>
                            <Modal
                                open={openPopup}
                                onClose={handleClosePopup}
                            >
                                <Box className={classes.modalBox}>
                                    <img src={bikeImg} className={classes.bikeImg2}/>
                                </Box>
                            </Modal>
                        </Grid>
                    </Grid>
                    <Grid item container xs className={classes.boxForm} direction={'column'}>
                        <Grid item>
                            <Typography variant={'h4'}>Preorder request form</Typography>
                        </Grid>
                        <Grid item className={classes.formPadding}>
                            <HubspotForm
                                portalId='8730883'
                                formId='af1beb56-ad92-4f10-a092-d82b29bf39df'
                                loading={<div>Form loading...</div>}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Fragment>)}
        </Fragment>
    );
}
