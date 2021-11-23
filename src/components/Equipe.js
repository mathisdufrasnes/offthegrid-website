import React, {Fragment} from "react"
import background1 from "../media/backgroundTeam.jpg"
import {makeStyles} from "@material-ui/core/styles"
import {Box, Divider, Grid, Modal, Typography} from "@material-ui/core";
import Carousel from 'react-material-ui-carousel'
import img1 from '../media/Profil_Charles.jpg'
import img2 from '../media/Profil_Seb.png'
import img3 from '../media/Profil_Simon.png'
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
    customDiv: {
        paddingTop: '5px',
        backgroundColor: '#000000',
        width: '35%',
        borderRadius: '15px',
        marginBottom: '5%'
    },
    customDiv2: {
        paddingTop:'5px',
        backgroundColor: '#000000',
        width: '20%',
        borderRadius: '15px',
        marginBottom: '5%'
    },
    customDiv2White: {
        paddingTop:'5px',
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
    partnerImg: {
        objectFit: 'contain',
        maxWidth: '60%',
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
    }
}));

export default function Equipe() {
    const classes = useStyles()
    const [openPopup, setOpenPopup] = React.useState(false);
    const handleOpenPopup = () => setOpenPopup(true);
    const handleClosePopup = () => setOpenPopup(false);
    const profil1 = {
        prenom: 'Charles',
        nom: 'Couture-Lebrun',
        poste: 'Co-Fondateur, CEO',
        formation: 'M.Sc. Innovation - Entrepreneuriat',
        img: img1,
        linkedin: 'https://www.linkedin.com/in/charles-couture-lebrun-msc/',
    }
    const profil2 = {
        prenom: 'Sébastien',
        nom: 'Brunelle-Jestin',
        poste: 'Co-Fondateur, CTO',
        formation: 'CPI, Génie électrique',
        img: img2,
        linkedin: 'https://www.linkedin.com/in/s%C3%A9bastien-brunelle-jestin-060702158/',
    }
    const profil3 = {
        prenom: 'Simon',
        nom: 'Tousignant',
        poste: 'Responsable Logistique & Chaîne d\'approvisionnement',
        formation: 'CPI ingénieur industriel, Candidat M.Ing',
        img: img3,
        linkedin: 'https://www.linkedin.com/in/simon-tousignant-60abb595/',
    }
    const profil4 = {
        prenom: 'Florence ',
        nom: 'Boies',
        poste: 'Responsable Logistique & Chaîne d\'approvisionnement',
        formation: 'BAA, Gestion des opérations',
        img: img4,
        linkedin: 'https://www.linkedin.com/in/florence-boies-69a746211/',
    }
    const profil5 = {
        prenom: 'Mathis',
        nom: 'Dufrasnes',
        poste: 'Développeur Web Full Stack',
        formation: 'Double Maîtrise en Technologies de l\'Information',
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
        poste: 'Ancien Président & CEO',
        organisation: 'Rona',
        img: c2,
    }
    const comite3 = {
        prenom: 'François',
        nom: 'Woods',
        poste: 'VP Ventes & Marketing',
        organisation: 'Prével',
        img: c3,
    }
    const comite4 = {
        prenom: 'Jacques',
        nom: 'Godin',
        poste: 'Conseiller Manufacture',
        organisation: 'Anges Québec',
        img: c4,
    }
    const profils = [profil1, profil2, profil3, profil4, profil5]
    const partenaires = [part1, part2, part3, part4]
    const clients = [client1,client2,client3,client4,client5,client6]
    const comiteAdviseurs = [comite1, comite2, comite3, comite4]
    return (
        <Fragment>
            <Box className={classes.box1}>
                <Grid container className={classes.box1Content} direction={'column'} spacing={8}>
                    <Grid item>
                        <Typography variant={'h1'}>
                            À propos d’Équipement
                            Off The Grid inc.
                        </Typography>
                    </Grid>
                    <Divider classes={{root: classes.customDiv}} style={{marginLeft: '35px'}}/>
                    <Grid item>
                        <Typography variant={'h5'} className={classes.notBold}>
                            Chez Off The Grid, nous pensons que l’entraînement physique est une source d’énergie
                            inexploitée. Nous avons lancé l’entreprise avec un objectif précis: réduire l’empreinte
                            écologique de chaque entraînement! Avec cet objectif en tête, notre équipe repousse les
                            frontières de la technologie, tout en préconisant l’utilisation quotidienne d’énergies
                            renouvelables.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.box2}>
                <Grid container className={classes.box2Content} direction={'column'} spacing={8}>
                    <Grid item justifyContent={'center'}>
                        <Typography variant={'h1'} align={'center'}>
                            Notre équipe
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
                                Nos partenaires
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
                                Nos clients
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
                            Comité Aviseur
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
        </Fragment>
    );
}
