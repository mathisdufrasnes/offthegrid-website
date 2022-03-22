import React, {Fragment, useEffect, useState} from "react"
import background1 from "../media/backgroundPreorder.jpg"
import bikeImg from "../media/OTG-14-1-e1628705408390.png"
import bikeImg2 from "../media/otg_bike2.png"

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
        backgroundColor: '#f1f1f1',
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
        backgroundColor: "#494949",
        padding: "5%"
    },
    boxForm: {
        backgroundColor: '#f2f2f2',
        borderRadius: '35px',
        marginLeft: '3%',
        padding: '4%'
    },

    boxFormMobile: {
        backgroundColor: '#f2f2f2',
        borderRadius: '35px',
        padding: '4%',
        marginTop: '5vmax',
    },
    formPadding: {
        padding: '8% 10% 0% 8%'
    },
    bikeImg: {
        width: '30vw',
        height: 'auto',
        "&:hover": {
            cursor: 'zoom-in'
        }
    },
    bikeImgMobile: {
        width: '50vw',
        height: 'auto',
    },
    bikeImg2: {
        width: 'auto',
        height: '95vh'
    },
    modalBox: {
        height: '90vh',
        backgroundColor: "#333333",
        maxWidth: '70vw',
        width: 'auto',
        position: 'absolute',
        left: '50%',
        top: '47%',
        transform: 'translate(-50%, -50%)',
        outline: 'none',
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
    taxesTextMobile:{
        fontSize: '1.5vmax',
        fontFamily: 'Montserrat-Regular',
    },
    crossedPriceMobile: {
        fontSize: '2.5vmax',
        fontFamily: 'Montserrat-Regular',
        color:'#e34c4c',
    },
    crossedPrice: {
        fontFamily: 'Montserrat-Regular',
        color:'#e34c4c',
    },
    crossedPriceBar: {
        textDecoration: "line-through",
        color: '#e34c4c'
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

export default function Precommande() {
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
            {isTabletOrMobile ? (
                    <Fragment>
                        <Box className={classes.box1Mobile}>
                            <Grid container className={classes.box1ContentMobile} direction={'column'} spacing={3}>
                                <Grid item>
                                    <Typography className={classes.h3Mobile}>
                                        Précommande
                                    </Typography>
                                </Grid>
                                <Divider classes={{root: classes.customDivMobile}}/>
                                <Grid item>
                                    <Typography className={classes.h4Mobile} color={'primary'}>
                                        N'attendez pas
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography className={classes.body3Mobile} align={'center'}>
                                        Précommandez nos vélos de spinning dès aujourd'hui et soyez parmi les
                                        premiers à les recevoir.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.box2}>
                            <Grid item container direction={'column'} spacing={5} justifyContent={'center'}>
                                <Grid item justifyContent={'center'}>
                                    <Typography className={classes.h2Mobile} color={'secondary'} align={'center'}>Contactez-nous
                                        pour réserver le
                                        vôtre</Typography>
                                </Grid>
                                <Grid item justifyContent={'center'}>
                                    <Typography className={classes.body3Mobile} color={'secondary'} align={'center'}>
                                        Afin de précommander un vélo de spinning
                                        Off The Grid, remplissez le formulaire de requête en nous indiquant le nombre de
                                        vélos
                                        souhaités. Un membre de notre équipe se fera un plaisir de répondre à votre requête
                                        par
                                        la suite!
                                    </Typography>
                                </Grid>
                                <Grid item justifyContent={'center'}>
                                    <Grid direction={'row'} container justifyContent={'center'} spacing={1} alignItems={'center'}>
                                        <Grid item>
                                            <Typography item className={classes.h6Mobile} color={'primary'} align={'center'}>Prix de précommande : </Typography>
                                        </Grid>
                                        <Grid item>
                                            <span item className={classes.crossedPriceBar}>
                                                <Typography item className={classes.crossedPriceMobile} color={'primary'} align={'center'}>$3 800 </Typography>
                                            </span>
                                        </Grid>
                                        <Grid item>
                                            <Typography item className={classes.h6Mobile} color={'primary'}> $3 500 </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography item className={classes.taxesTextMobile} color={'primary'}> + taxes</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item container justifyContent={'center'} alignItems={'center'}>
                                    <img src={bikeImg2} className={classes.bikeImgMobile}/>
                                </Grid>
                            </Grid>
                            <Grid item container className={classes.boxFormMobile} direction={'column'}>
                                <Grid item>
                                    <Typography className={classes.h3Mobile}>Formulaire de requête :
                                        Précommande</Typography>
                                </Grid>
                                <Grid item className={classes.formPadding}>
                                    <HubspotForm
                                        portalId='8730883'
                                        formId='c08bdc59-8939-4a1e-af3b-d9699c395c4b'
                                        loading={<div>Chargement du formulaire</div>}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Fragment>
                )
                : (
                    <Fragment>
                        <Box className={classes.box1}>
                            <Grid container className={classes.box1Content} direction={'column'} spacing={8}>
                                <Grid item>
                                    <Typography variant={'h1'}>
                                        Précommande
                                    </Typography>
                                </Grid>
                                <Divider classes={{root: classes.customDiv}}/>
                                <Grid item>
                                    <Typography variant={'h4'} color={'primary'}>
                                        N'attendez pas
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant={'h6'} align={'center'}>
                                        Précommandez nos vélos de spinning dès aujourd'hui et soyez parmi les
                                        premiers à les recevoir.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.box2}>
                            <Grid container direction={'row'}>
                                <Grid item container direction={'column'} xs spacing={8}>
                                    <Grid item>
                                        <Typography variant={'h3'} color={'secondary'}>Contactez-nous pour réserver le
                                            vôtre</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={'body2'} color={'secondary'}>Afin de précommander un vélo
                                            de spinning
                                            Off The Grid, remplissez le formulaire de requête en nous indiquant le
                                            nombre de vélos
                                            souhaités. Un membre de notre équipe se fera un plaisir de répondre à votre
                                            requête par
                                            la suite!</Typography>
                                    </Grid>
                                    <Grid item justifyContent={'center'}>
                                        <Grid direction={'row'} container spacing={1} alignItems={'center'}>
                                            <Grid item>
                                                <Typography item variant={'h5'} color={'primary'} align={'center'}>Prix de précommande : </Typography>
                                            </Grid>
                                            <Grid item>
                                            <span item className={classes.crossedPriceBar}>
                                                <Typography item className={classes.crossedPrice} color={'primary'} align={'center'}>$3 800 </Typography>
                                            </span>
                                            </Grid>
                                            <Grid item>
                                                <Typography item variant={'h5'} color={'primary'}>$3 500 </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography item variant={'body1'} color={'primary'}> + taxes</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <img src={bikeImg2} className={classes.bikeImg} onClick={handleOpenPopup}/>
                                        <Modal
                                            open={openPopup}
                                            onClose={handleClosePopup}
                                        >
                                            <Box className={classes.modalBox}>
                                                <img src={bikeImg2} className={classes.bikeImg2}/>
                                            </Box>
                                        </Modal>
                                    </Grid>
                                </Grid>
                                <Grid item container xs className={classes.boxForm} direction={'column'}>
                                    <Grid item>
                                        <Typography variant={'h4'}>Formulaire de requête : Précommande</Typography>
                                    </Grid>
                                    <Grid item className={classes.formPadding}>
                                        <HubspotForm
                                            portalId='8730883'
                                            formId='c08bdc59-8939-4a1e-af3b-d9699c395c4b'
                                            loading={<div>Chargement du formulaire</div>}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Fragment>)}
        </Fragment>
    );
}

