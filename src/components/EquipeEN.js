import React, {Fragment, useEffect, useState} from "react"
import background1 from "../media/backgroundTeam.jpg"
import {makeStyles} from "@material-ui/core/styles"
import {Box, Divider, Grid, Modal, Typography} from "@material-ui/core";
import Carousel from 'react-material-ui-carousel'
import img1 from '../media/Profil_Charles.jpg'
import img2 from '../media/Profil_Seb.png'
import img4 from '../media/Profil_Flo.png'
import img5 from '../media/Profil_Mathis.png'
import part1 from '../media/part1.svg'
import part2 from '../media/part2.png'
import part3 from '../media/part3.webp'
import part4 from '../media/part4.svg'

import client1 from '../media/part1.svg'
import client2 from '../media/client2.svg'
import client3 from '../media/client3.svg'
import client4 from '../media/client4.png'
import client5 from '../media/client5.png'
import client6 from '../media/client6.png'

import c1 from '../media/c1.jpg'
import c2 from '../media/c2.jpg'
import c3 from '../media/c3.png'
import c4 from '../media/c4.png'
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
    box1Content: {
        width: '66vw',
        borderRadius: '35px',
        background: 'rgba(252, 252, 252, 0.87)',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: '5%',
        padding: '2%'
    },
    box1ContentMobile:{
        width: '90vw',
        borderRadius: '35px',
        background: 'rgba(252, 252, 252, 0.87)',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5%',
        padding: '2%'
    },
    customDiv: {
        paddingTop: '5px',
        backgroundColor: '#000000',
        width: '35%',
        borderRadius: '15px',
        marginBottom: '5%'
    },
    customDivMobile: {
        paddingTop: '5px',
        background: '#000000',
        width: '80%',
        borderRadius: '15px',
        marginBottom: '5%'
    },
    customDiv2: {
        paddingTop: '5px',
        backgroundColor: '#000000',
        width: '20%',
        borderRadius: '15px',
        marginBottom: '5%'
    },
    customDiv2White: {
        paddingTop: '5px',
        backgroundColor: '#ffffff',
        width: '20%',
        borderRadius: '15px',
        marginBottom: '5%'
    },
    box2: {
        backgroundColor: "#ffffff",
        padding: "8% 0%",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box2Content: {
        width: '50vw',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box2ContentMobile: {
        width: '90vw',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    textFAQ: {
        fontSize: 15,
        fontFamily: '"Montserrat-Regular"',
        textAlign: 'center',
        lineHeight: 3,
    },
    carousel: {
        backgroundColor: "#494949",
        padding: "0% 0% 1% 0%",
    },
    box3: {
        backgroundColor: "#494949",
        padding: "6% 0% 2% 0%",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box3Content: {
        width: '80%',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box4: {
        backgroundColor: "#ffffff",
        paddingTop: "8%",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box4Content: {
        width: '90%',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    notBold: {
        fontFamily: 'Montserrat-SemiBold'
    },

    profileImg: {
        width: '65%',
    },
    profileImgMobile: {
        width: '20vmax',
    },
    partnerImg: {
        objectFit: 'contain',
        maxWidth: '60%',
    },
    partnerImgMobile: {
        objectFit: 'contain',
        maxWidth: '80%',
    },
    textNom: {
        fontFamily: 'Montserrat-Bold',
        fontSize: '16px',
    },
    textRole: {
        fontFamily: 'Montserrat-Regular',
        fontSize: '18px',
    },
    textFormation: {
        fontFamily: 'Montserrat-Regular',
        fontSize: '15px',
    },
    profileGrid: {
        display: 'flex',
        justifyContent: 'center',
    },
    comiteImg: {
        maxWidth: '25vh',
    },
    comiteImgMobile: {
        width: '15vmax',
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
}));

export default function EquipeEN() {
    const classes = useStyles()
    const [openPopup, setOpenPopup] = React.useState(false);
    const handleOpenPopup = () => setOpenPopup(true);
    const handleClosePopup = () => setOpenPopup(false);
    const profil1 = {
        prenom: 'Charles',
        nom: 'Couture-Lebrun',
        poste: 'Co-Founder, CEO',
        formation: 'M.Sc. Innovation - Entrepreneurship',
        img: img1,
        linkedin: 'https://www.linkedin.com/in/charles-couture-lebrun-msc/',
    }
    const profil2 = {
        prenom: 'Sébastien',
        nom: 'Brunelle-Jestin',
        poste: 'Co-Founder, CTO',
        formation: 'CEP, Electrical engineering',
        img: img2,
        linkedin: 'https://www.linkedin.com/in/s%C3%A9bastien-brunelle-jestin-060702158/',
    }
    const profil3 = {
        prenom: 'Florence ',
        nom: 'Boies',
        poste: 'Logistics & Supply Chain Manager',
        formation: 'BBA, Operations Management',
        img: img4,
        linkedin: 'https://www.linkedin.com/in/florence-boies-69a746211/',
    }
    const profil4 = {
        prenom: 'Mathis',
        nom: 'Dufrasnes',
        poste: 'Full Stack Web Developer',
        formation: 'Dual Degree in Information Technologies',
        img: img5,
        linkedin: 'https://www.linkedin.com/in/mathis-dufrasnes/',
    }
    const comite1 = {
        prenom: 'Nathalie',
        nom: 'Marcoux',
        poste: 'VP Finance',
        organisation: 'Capinabel Inc',
        img: c1,
    }
    const comite2 = {
        prenom: 'Robert',
        nom: 'Dutton',
        poste: 'Former President & CEO',
        organisation: 'Rona',
        img: c2,
    }
    const comite3 = {
        prenom: 'François',
        nom: 'Woods',
        poste: 'VP Marketing & Sales',
        organisation: 'Prével',
        img: c3,
    }
    const comite4 = {
        prenom: 'Jacques',
        nom: 'Godin',
        poste: 'Manufacture Advisor',
        organisation: 'Anges Québec',
        img: c4,
    }
    const profils = [profil1, profil2, profil3, profil4]
    const partenaires = [part1, part2, part3, part4]
    const clients = [client1, client2, client3, client4, client5, client6]
    const comiteAdviseurs = [comite1, comite2, comite3, comite4]
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
                <Box className={classes.box1}>
                    <Grid container className={classes.box1ContentMobile} direction={'column'} spacing={5}>
                        <Grid item>
                            <Typography className={classes.h3Mobile} align={'center'}>
                                About Off The Grid inc.
                            </Typography>
                        </Grid>
                        <Divider classes={{root: classes.customDivMobile}}/>
                        <Grid item>
                            <Typography className={classes.h6Mobile} align={'center'}>
                                At Off The Grid, we believe physical training is an untapped source of energy. We launched the company with a specific objective: to reduce the ecological footprint of every workout! With this goal in mind, our team is pushing the boundaries of technology, while advocating the daily use of renewable energy.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={classes.box2}>
                    <Grid container className={classes.box2ContentMobile} direction={'column'} spacing={3}>
                        <Grid item justifyContent={'center'}>
                            <Typography  className={classes.h3Mobile} align={'center'}>
                                Our team
                            </Typography>
                        </Grid>
                        <Divider classes={{root: classes.customDivMobile}}/>
                        <Grid item container direction={'column'} justifyContent={'center'}
                              alignItems={'center'} spacing={5}>
                            {profils.map(profil =>
                                <Grid item container direction={'column'} display={'flex'}
                                      justifyContent={'center'}
                                      alignItems={'center'} spacing={1}>
                                    <Grid item className={classes.profileGrid}>
                                        <img src={profil.img} className={classes.profileImgMobile}/>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.h6Mobile}
                                                    align={'center'}>{profil.prenom} {profil.nom}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.body2Mobile}
                                                    align={'center'}>{profil.poste}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.body2Mobile}
                                                    align={'center'}>{profil.formation}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <i className="fab fa-linkedin"></i>
                                    </Grid>
                                </Grid>
                            )}
                        </Grid>

                    </Grid>
                </Box>
                <Carousel autoPlay interval={5000} animation={"slide"} duration={500} navButtonsAlwaysVisible
                          cycleNavigation stopAutoPlayOnHover={false} className={classes.carousel}>
                    <Box className={classes.box3}>
                        <Grid container direction={'column'} spacing={2} className={classes.box3Content}>
                            <Grid item>
                                <Typography className={classes.h3Mobile} color={'secondary'}>
                                    Our partners
                                </Typography>
                            </Grid>
                            <Divider classes={{root: classes.customDivMobile}}/>
                            <Grid item container direction={'row'}>
                                {partenaires.map(partenaire =>
                                    <Grid item className={classes.profileGrid} xs>
                                        <img src={partenaire} className={classes.partnerImgMobile}/>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className={classes.box3}>
                        <Grid container direction={'column'} spacing={2} className={classes.box3Content}>
                            <Grid item>
                                <Typography className={classes.h3Mobile} color={'secondary'}>
                                    Our clients
                                </Typography>
                            </Grid>
                            <Divider classes={{root: classes.customDivMobile}}/>
                            <Grid item container direction={'row'}>
                                {clients.map(client =>
                                    <Grid item className={classes.profileGrid} xs>
                                        <img src={client} className={classes.partnerImgMobile}/>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                    </Box>
                </Carousel>
                <Box className={classes.box4}>
                    <Grid container direction={'column'} spacing={8} className={classes.box4Content}>
                        <Grid item>
                            <Typography className={classes.h3Mobile} align={'center'}>
                                Advisors
                            </Typography>
                        </Grid>
                        <Divider classes={{root: classes.customDivMobile}}/>
                        <Grid item container className={classes.profileGrid} direction={'row'} spacing={2} alignItems={'flex-start'}>
                            {comiteAdviseurs.map(comiteAdviseur =>
                                <Grid item container className={classes.profileGrid} xs={6} direction={'column'} justifyContent={'flex-start'}>
                                    <Grid item className={classes.profileGrid}>
                                        <img src={comiteAdviseur.img} className={classes.comiteImgMobile}/>
                                    </Grid>
                                    <Grid item className={classes.profileGrid}>
                                        <Typography className={classes.h6Mobile}
                                                    align={'center'}>{comiteAdviseur.nom} {comiteAdviseur.prenom}</Typography>
                                    </Grid>
                                    <Grid item className={classes.profileGrid}>
                                        <Typography className={classes.body2Mobile}
                                                    align={'center'}>{comiteAdviseur.poste}</Typography>
                                    </Grid>
                                    <Grid item className={classes.profileGrid}>
                                        <Typography className={classes.body2Mobile}
                                                    align={'center'}>{comiteAdviseur.organisation}</Typography>
                                    </Grid>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </Fragment>
            ) : (
        <Fragment>
            <Box className={classes.box1}>
                <Grid container className={classes.box1Content} direction={'column'} spacing={8}>
                    <Grid item>
                        <Typography variant={'h1'}>
                            About Off The Grid inc.
                        </Typography>
                    </Grid>
                    <Divider classes={{root: classes.customDiv}} style={{marginLeft: '35px'}}/>
                    <Grid item>
                        <Typography variant={'h5'} className={classes.notBold}>
                            At Off The Grid, we believe physical training is an untapped source of energy. We launched the company with a specific objective: to reduce the ecological footprint of every workout! With this goal in mind, our team is pushing the boundaries of technology, while advocating the daily use of renewable energy.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.box2}>
                <Grid container className={classes.box2Content} direction={'column'} spacing={8}>
                    <Grid item justifyContent={'center'}>
                        <Typography variant={'h1'} align={'center'}>
                            Our team
                        </Typography>
                    </Grid>
                    <Divider classes={{root: classes.customDiv}}/>
                    <Grid item container justifyContent={'center'} spacing={8}>
                        {profils.map(profil =>
                            <Grid item container direction={'column'} xs={6} display={'flex'} justifyContent={'center'}
                                  alignItems={'center'} spacing={1}>
                                <Grid item className={classes.profileGrid}>
                                    <img src={profil.img} className={classes.profileImg}/>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.textNom}
                                                align={'center'}>{profil.prenom} {profil.nom}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.textFormation}
                                                align={'center'}>{profil.poste}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.textFormation}
                                                align={'center'}>{profil.formation}</Typography>
                                </Grid>
                                <Grid item>
                                    <i className="fab fa-linkedin"></i>
                                </Grid>
                            </Grid>
                        )}
                    </Grid>

                </Grid>
            </Box>
            <Carousel autoPlay interval={5000} animation={"slide"} duration={500} navButtonsAlwaysVisible
                      cycleNavigation stopAutoPlayOnHover={false} className={classes.carousel}>
                <Box className={classes.box3}>
                    <Grid container direction={'column'} spacing={8} className={classes.box3Content}>
                        <Grid item>
                            <Typography variant={'h1'} color={'secondary'}>
                                Our partners
                            </Typography>
                        </Grid>
                        <Divider classes={{root: classes.customDiv2White}}/>
                        <Grid item container direction={'row'}>
                            {partenaires.map(partenaire =>
                                <Grid item className={classes.profileGrid} xs>
                                    <img src={partenaire} className={classes.partnerImg}/>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Box>
                <Box className={classes.box3}>
                    <Grid container direction={'column'} spacing={8} className={classes.box3Content}>
                        <Grid item>
                            <Typography variant={'h1'} color={'secondary'}>
                                Our clients
                            </Typography>
                        </Grid>
                        <Divider classes={{root: classes.customDiv2White}}/>
                        <Grid item container direction={'row'}>
                            {clients.map(client =>
                                <Grid item className={classes.profileGrid} xs>
                                    <img src={client} className={classes.partnerImg}/>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </Carousel>
            <Box className={classes.box4}>
                <Grid container direction={'column'} spacing={8} className={classes.box4Content}>
                    <Grid item>
                        <Typography variant={'h1'}>
                            Advisors
                        </Typography>
                    </Grid>
                    <Divider classes={{root: classes.customDiv2}}/>
                    <Grid item container className={classes.profileGrid} direction={'row'} spacing={8}>
                        {comiteAdviseurs.map(comiteAdviseur =>
                            <Grid item container className={classes.profileGrid} xs={3} direction={'column'}
                                  spacing={2}>
                                <Grid item className={classes.profileGrid}>
                                    <img src={comiteAdviseur.img} className={classes.comiteImg}/>
                                </Grid>
                                <Grid item className={classes.profileGrid}>
                                    <Typography variant={'h5'}
                                                align={'center'}>{comiteAdviseur.nom} {comiteAdviseur.prenom}</Typography>
                                </Grid>
                                <Grid item className={classes.profileGrid}>
                                    <Typography className={classes.textFormation}
                                                align={'center'}>{comiteAdviseur.poste}</Typography>
                                </Grid>
                                <Grid item className={classes.profileGrid}>
                                    <Typography className={classes.textFormation}
                                                align={'center'}>{comiteAdviseur.organisation}</Typography>
                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </Fragment>)}
        </Fragment>
    );
}
