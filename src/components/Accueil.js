import React, {useEffect, useState} from "react"
import {Fade, Slide} from "react-awesome-reveal";
import {makeStyles} from "@material-ui/core/styles"
import {
    Box,
    Chip, CircularProgress,
    Divider,
    Grid,
    Link, Modal
} from "@material-ui/core";
import {Fragment} from "react";
import {useWindowWidth} from '@wojtekmaj/react-hooks';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ReactPlayer from 'react-player'
import {useNavigate} from "react-router-dom";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import backgroundImg from "../media/background2.jpg"
import bikePhoto from "../media/OTG-14.2-2048x1256.png"
import solarImpulse from "../media/SiF_LABEL_LOGO_INSTITUTIONAL_2020_RVB-e1630420835909.png"
import phoneLogo from "../media/smartphone-call.png"
import powerhouse from "../media/eco-house.png"
import speedometer from "../media/speedometer.png"
import databaseLogo from "../media/database.png"
import backgroundImg2 from "../media/Accueil_app_integre-2.png"
import backgroundImg3 from "../media/PEWlDq.jpg"
import phone1 from "../media/phone1.png"
import phone2 from "../media/phone2.png"
import phone3 from "../media/phone3.png"
import phone4 from "../media/phone4.png"
import FicheTechnique from "../media/FicheTechniqueOTG.pdf"
import {Document, Page, pdfjs} from "react-pdf";
import {Carousel} from "react-responsive-carousel";
import {Element, scroller} from 'react-scroll'
import HubspotForm from "react-hubspot-form";
import useAuth from "../hooks/useAuth";
import {useMediaQuery} from "react-responsive";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const useStyles = makeStyles((theme) => ({
    root:
        {
            flexGrow: 1
        },
    box1:
        {
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            minHeight: "100vh",
            boxShadow: 'inset 0 0 0 1000px rgba(256,256,256,.4)'
        },
    box2:
        {
            backgroundColor: '#242424',
            minHeight: "62vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center",
        },
    box3:
        {
            backgroundColor: '#f2f2f2',
            minHeight: "100vh",
            padding: "7% 5% 7% 5%",
        },
    box4:
        {
            backgroundColor: '#f2f2f2',
            minHeight: "30vh",
            padding: "0% 5% 5% 5%",
        },
    box5:
        {
            minHeight: "92vh",
            boxShadow: 'inset 0 0 0 1000px rgba(256,256,256,.4)',
            paddingLeft: "5%",
        },
    box5Mobile:
        {
            padding: "5%",
        },
    box6:
        {
            backgroundImage: `url(${backgroundImg3})`,
            backgroundSize: "cover",
            minHeight: "100vh",
            boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.4)',
            padding: "7% 5% 7% 5%"
        },
    box7:
        {
            minHeight: "90vh",
            backgroundColor: "#242424",
            padding: "3.5% 5% 3.5% 5%"
        },

    boxNewsletter:
        {
            backgroundColor: 'white',
            borderRadius: '35px',
            marginLeft: '3%',
        },
    boxNewsletterMobile:
        {
            backgroundColor: 'white',
            borderRadius: '20px',
            marginBottom:'15px',
        },
    newsletterContent:
        {
            padding: '8%',
        },

    newsletterContentMobile:
        {
            padding: '8%',
            marginBottom:'-50px',
        },
    newsletterForm:
        {
            padding: '8%',
        },
    offset: {
        paddingTop: "75px",
    },
    noSelect: {
        userSelect: 'none',
        msUserSelect: 'none',
    },
    boxContent:
        {
            padding: "5% 5% 10% 5%"
        },
    boxContentApplication:
        {
            paddingTop: "7%",
        },
    bigButton: {

        padding: '17px 41px',
        borderRadius: '1',
    },
    bigButtonMobile: {
        fontSize: '2.5vw',
        padding: '10px 15px',
        borderRadius: '25px',
    },
    smallButton: {
        fontFamily: 'Montserrat-Bold',
        padding: '2% 4%',
        borderRadius: '15px',
        fontSize: '23px'
    },
    mailLink: {
        fontFamily: 'Montserrat-Bold',
        fontWeight: "bold",
        color: "#337ab7",
        fontSize: "20px",
        "&:hover": {
            cursor: 'pointer',
            textDecoration: 'none',
        },
        "&:visited": {
            cursor: 'pointer',
            textDecoration: 'none',
        },
        "&:active": {
            cursor: 'pointer',
            color: '#598AB7'
        }
    },
    mailLinkMobile: {
        fontFamily: 'Montserrat-Bold',
        fontWeight: "bold",
        color: "#337ab7",
        fontSize: "2vmax",
        "&:hover": {
            cursor: 'pointer',
            textDecoration: 'none',
        },
        "&:visited": {
            cursor: 'pointer',
            textDecoration: 'none',
        },
        "&:active": {
            cursor: 'pointer',
            color: '#598AB7'
        }
    },
    textLogo: {
        width: '15vw',
        textAlign: 'center',
    },
    img: {
        width: '100%',
    },
    logo: {
        maxWidth: '80px',
    },
    appImg: {
        height: '100%',
        width: 'auto',
    },
    spacingApp: {
        paddingBottom: '10%',
        paddingTop: '10%'
    },
    popupBox: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#f2f2f2',
        border: '2px solid #000',
        boxShadow: 24,
        height: '90vh',
        width: '50vh',
    },
    imgPopup2: {
        height: '90vh',
        width: 'auto'
    },
    popupPDF: {
        backgroundColor: '#f2f2f2',
        border: '2px solid #000',
        boxShadow: 24,
        width: 'auto',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 0%)',
    },
    documentPDF: {
        width: '60vw',
        height: 'auto',
    },
    modalScrollable: {
        overflowY: 'scroll',
        maxHeight: '100vh'
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
}));

export default function Accueil() {
    const classes = useStyles()
    const history = useNavigate();
    const [openPopup, setOpenPopup] = React.useState(false);
    const handleOpenPopup = () => setOpenPopup(true);
    const handleClosePopup = () => setOpenPopup(false);

    const handleScrollTo = () => {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -30,
        })
    }
    const handleScrollTo2 = () => {
        scroller.scrollTo('scroll-to-element-mobile', {
            duration: 600,
            delay: 0,
            offset: -90,
        })
    }
    const width = useWindowWidth();
    const [openPopup2, setOpenPopup2] = React.useState(false);
    const handleOpenPopup2 = () => setOpenPopup2(true);
    const handleClosePopup2 = () => setOpenPopup2(false);

    const popupItems2 = [
        phone1, phone2, phone3, phone4
    ]
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
        <div>
            {isTabletOrMobile ? (
                    <Fragment>
                        <Box className={classes.box1}>
                            <Grid container className={classes.offset}>
                                <Grid container direction="column" spacing={3} className={classes.boxContent}
                                      alignItems='center'>
                                    <Grid item>
                                        <Typography className={classes.h6Mobile} color={'primary'} align={'center'}>
                                            R??duire l???empreinte ??cologique de chaque entra??nement
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.h1Mobile} align={'center'}>Les v??los de
                                            spinning</Typography>
                                        <Typography className={classes.h1Mobile} align={'center'}>Off The Grid</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.body1Mobile} align={'center'}>
                                            Nous sommes une entreprise qu??b??coise enti??rement d??di??e ?? offrir des
                                            ??quipements
                                            d???entra??nement ??coresponsables. Convaincus que l???industrie du fitness a une part
                                            ?? jouer
                                            dans la transition ??cologique, nous avons d??velopp?? un v??lo de spinning innovant
                                            qui
                                            convertit l?????nergie des utilisateurs en ??lectricit??. Nos produits sont fi??rement
                                            con??us,
                                            fabriqu??s et assembl??s au Qu??bec.
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.body1Mobile} align={'center'}>
                                            Off The Grid, c'est toute une communaut?? d???athl??tes de changement!
                                            Ici, on s???entra??ne pour son bien-??tre, pour le plaisir et pour la plan??te.
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button color={'primary'} variant={'contained'} className={classes.bigButtonMobile}
                                                onClick={() => handleScrollTo2()}>
                                            Inscrivez-vous ?? notre infolettre
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.box2}>
                            <ReactPlayer
                                controls={true}
                                url='https://www.youtube.com/watch?v=8_sNrkvJ0-U'/>
                        </Box>
                        <Box className={classes.box3}>
                            <Grid item container direction={'column'} alignItems={'center'} spacing={3}>
                                <Grid item>
                                    <Typography className={classes.h1Mobile} align={'center'}>Nos v??los</Typography>
                                </Grid>
                                <Grid item xs display={"flex"} justifyContent={'center'}>
                                    <img xs className={classes.img} src={bikePhoto}/>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.body1Mobile} align={'center'}>
                                        Nos v??los de spinning ??coresponsables sont parmi les
                                        plus avanc??s du secteur sur le plan technologique. ??quip??s d'un syst??me ??lectronique
                                        int??gr??, ils transforment l'??nergie g??n??r??e par les utilisateurs en ??lectricit??.
                                        Celle-ci est ensuite r??inject??e en temps r??el dans le r??seau ??lectrique, r??duisant
                                        directement la consommation d???un r??seau ??lectrique.
                                    </Typography>
                                </Grid>
                                <Grid item justifyContent={'center'}>
                                    <Grid direction={'row'} container justifyContent={'center'} spacing={1} alignItems={'center'}>
                                        <Grid item>
                                            <Typography item className={classes.h6Mobile} color={'primary'} align={'center'}>Prix de pr??commande : </Typography>
                                        </Grid>
                                        <Grid item>
                                            <span item className={classes.crossedPriceBar}>
                                                <Typography item className={classes.crossedPriceMobile} color={'primary'} align={'center'}>3,800$ </Typography>
                                            </span>
                                        </Grid>
                                        <Grid item>
                                            <Typography item className={classes.h6Mobile} color={'primary'}> 3,500$ </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography item className={classes.taxesTextMobile} color={'primary'}> + taxes</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Chip
                                        label="Pr??commander"
                                        clickable
                                        color={'primary'}
                                        onClick={() => {
                                            history('/precommande');
                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.body1Mobile}>
                                        <ul>
                                            <li>R??duit la consommation ??nerg??tique</li>
                                            <li>Niveaux pr??cis d???intensit?? variable</li>
                                            <li>M??canisme silencieux et r??sistance ??lectronique</li>
                                            <li>Prix comp??titifs</li>
                                            <li>Design moderne et ??pur??</li>
                                        </ul>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Button color={'primary'} variant={'contained'} className={classes.bigButtonMobile}
                                            onClick={handleOpenPopup}>
                                        Consulter la fiche technique
                                    </Button>
                                    <Modal
                                        open={openPopup}
                                        onClose={handleClosePopup}
                                        className={classes.modalScrollable}
                                    >

                                        <Box className={classes.popupPDF}>
                                            <Document
                                                file={FicheTechnique}
                                                error={'Could not load file'}
                                                loading={<CircularProgress/>}
                                            >
                                                <Page width={width} pageNumber={1}/>
                                            </Document>
                                        </Box>
                                    </Modal>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.box4}>
                            <Grid container direction={'column'} spacing={2}>
                                <Divider/>
                                <Grid item container direction={'row'}>
                                    <Grid item container xs direction={'column'} alignItems={'center'} spacing={1}>
                                        <Grid item>
                                            <img className={classes.logo} src={phoneLogo}/>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.body1Mobile} align={'center'}>
                                                Acc??s ?? l'application OTG pour les membres
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item container xs direction={'column'} alignItems={'center'} spacing={1}>
                                        <Grid item>
                                            <img className={classes.logo} src={powerhouse}/>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.body1Mobile} align={'center'}>
                                                R??duction de consommation en temps r??el
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item container direction={'row'}>
                                    <Grid item container xs direction={'column'} alignItems={'center'} spacing={1}>
                                        <Grid item>
                                            <img className={classes.logo} src={speedometer}/>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.body1Mobile} align={'center'}>
                                                Niveau d'intensit?? variable tr??s pr??cis
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item container xs direction={'column'} alignItems={'center'} spacing={1}>
                                        <Grid item>
                                            <img className={classes.logo} src={databaseLogo}/>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.body1Mobile} align={'center'}>
                                                Collecte de donn??es d'utilisation en temps r??el
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.box5Mobile}>
                            <Grid item container direction={'column'} alignItems={'center'} spacing={3}>
                                <Grid item>
                                    <Typography className={classes.h4Mobile} align={'center'}>
                                        Une application int??gr??e pour suivre l'impact de chaque entra??nement
                                    </Typography>
                                </Grid>
                                <Grid item container direction={'column'} spacing={1}>
                                    <Grid item>
                                        <Typography className={classes.body1Mobile} align={'center'}>
                                            Notre application int??gr??e permet un suivi en temps r??el de la production
                                            d?????lectricit?? et des statistiques d???entra??nement.
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.body1Mobile} align={'center'}>
                                            Gr??ce ?? notre concept de gamification, l???utilisateur peut ??galement suivre
                                            son classement et relever des d??fis personnalis??s.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Button color={'primary'} variant={'contained'} className={classes.bigButtonMobile}
                                            onClick={handleOpenPopup2}>
                                        Aper??u de l'application
                                    </Button>
                                    <Modal
                                        open={openPopup2}
                                        onClose={handleClosePopup2}>

                                        <Box className={classes.popupBox}>
                                            <Carousel
                                                swipeable
                                                autoPlay={false}
                                                showArrows={true}
                                                showThumbs={false}
                                                infiniteLoop={true}
                                                emulateTouch={true}
                                            >
                                                {popupItems2.map(phone =>
                                                    <div>
                                                        <img src={phone} className={classes.imgPopup2}/>
                                                    </div>
                                                )}
                                            </Carousel>
                                        </Box>
                                    </Modal>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.box6}>
                            <Grid container direction={'column'} spacing={2}>
                                <Grid item>
                                    <Typography className={classes.h2Mobile} color={'secondary'}>Nos solutions</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.h5Mobile} color={'primary'}>Salles de sport</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.body3Mobile} color={'secondary'}>
                                        Off The Grid est la solution pour les salles de sport innovantes qui
                                        souhaitent
                                        sortir du lot. Gr??ce ?? nos v??los de spinning ??coresponsables, r??duisez votre
                                        empreinte ??cologique et attirez une client??le d??vou??e et fid??le. Quel que
                                        soit votre
                                        projet, nous saurons vous offrir un service cl?? en main personnalis?? selon
                                        vos
                                        besoins.
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.body3Mobile} color={'secondary'}>
                                        <ul>
                                            <li>Gyms</li>
                                            <li>??coles</li>
                                            <li>Entreprises</li>
                                            <li>Centres communautaires</li>
                                            <li>Logements multifamiliaux</li>
                                            <li>H??tels et spas</li>
                                            <li>Gouvernement</li>
                                            <li>Et bien plus encore...</li>
                                        </ul>
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.h5Mobile} color={'primary'}>Particuliers</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.body3Mobile} color={'secondary'}>
                                        Nos v??los de spinning ??coresponsables sont disponibles pour les
                                        particuliers. Dans
                                        le confort de votre maison, ils vous permettront de garder la forme tout en
                                        r??duisant votre empreinte ??cologique!
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>

                            <Box className={classes.box7} display={'flex'}>
                                <Grid container direction={'column'} spacing={3}>
                                    <Grid item>
                                        <Typography className={classes.h3Mobile} color={'secondary'}>
                                            En apprendre plus
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.body2Mobile} color={'secondary'}>
                                            Devenez un athl??te de changement et rejoignez le mouvement Off The Grid en
                                            vous
                                            inscrivant ?? notre infolettre! De cette fa??on, vous recevrez toutes les
                                            offres et
                                            nouveaut??s de l???entreprise en primeur.
                                        </Typography>
                                    </Grid>
                                    <Divider/>
                                    <Grid item>
                                        <Typography className={classes.body2Mobile} color={'secondary'}>
                                            Vous avez des questions ou vous aimeriez collaborer avec nous?
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.body2Mobile} color={'secondary'}>
                                            ??crivez-nous ?? <Link className={classes.mailLinkMobile}
                                                                 href={'mailto:info@getoffthegrid.ca'}>info@getoffthegrid.ca</Link>
                                        </Typography>
                                    </Grid>
                                    <Element name="scroll-to-element-mobile">
                                    <Grid item container className={classes.boxNewsletterMobile}>
                                        <Grid container direction={'column'} className={classes.newsletterContentMobile} spacing={2}>
                                            <Grid item>
                                                <Typography className={classes.h3Mobile} >
                                                    Inscrivez-vous ?? notre infolettre
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <HubspotForm
                                                    portalId='8730883'
                                                    formId='32ea94cd-5204-4920-b9f0-bd302299d403'
                                                    loading={<div>Chargement du formulaire</div>}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    </Element>
                                </Grid>
                            </Box>
                    </Fragment>
                )
                : (
                    <Fragment>
                        <Box className={classes.box1}>
                            <Grid container className={classes.offset}>
                                <Grid container direction="column" spacing={3} className={classes.boxContent}>
                                    <Slide triggerOnce duration={1500} direction={'left'}>
                                        <Grid item>
                                            <Typography variant={'h5'} color={'primary'}>
                                                R??duire l???empreinte ??cologique de chaque entra??nement
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant={'h1'}>Les v??los de spinning</Typography>
                                            <Typography variant={'h1'}>Off The Grid</Typography>
                                        </Grid>
                                    </Slide>
                                    <Grid item>
                                        <Typography variant={'body1'}>
                                            Nous sommes une entreprise qu??b??coise enti??rement d??di??e ?? offrir des
                                            ??quipements
                                            d???entra??nement ??coresponsables. Convaincus que l???industrie du fitness a une
                                            part ?? jouer
                                            dans la transition ??cologique, nous avons d??velopp?? un v??lo de spinning
                                            innovant qui
                                            convertit l?????nergie des utilisateurs en ??lectricit??. Nos produits sont
                                            fi??rement con??us,
                                            fabriqu??s et assembl??s au Qu??bec.
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={'body1'}>
                                            Off The Grid, c'est toute une communaut?? d???athl??tes de changement!
                                            Ici, on s???entra??ne pour son bien-??tre, pour le plaisir et pour la plan??te.
                                        </Typography>
                                    </Grid>
                                    <Fade duration={3000} triggerOnce>
                                        <Grid item>
                                            <Button color={'primary'} variant={'contained'}
                                                    className={classes.bigButton}
                                                    onClick={() => handleScrollTo()}>
                                                Inscrivez-vous ?? notre infolettre
                                            </Button>
                                        </Grid>
                                    </Fade>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.box2}>
                            <ReactPlayer
                                controls={true}
                                url='https://www.youtube.com/watch?v=8_sNrkvJ0-U'/>
                        </Box>
                        <Box className={classes.box3}>
                            <Grid container direction="row">
                                <Grid item container xs spacing={3} direction={'column'}>
                                    <Slide direction={'up'} duration={1000} triggerOnce>
                                        <Grid item>
                                            <Typography variant={'h1'}>Nos v??los</Typography>
                                        </Grid>
                                    </Slide>
                                    <Grid item>
                                        <Typography variant={'body1'}>
                                            Nos v??los de spinning ??coresponsables sont parmi les
                                            plus avanc??s du secteur sur le plan technologique. ??quip??s d'un syst??me
                                            ??lectronique
                                            int??gr??, ils transforment l'??nergie g??n??r??e par les utilisateurs en
                                            ??lectricit??.
                                            Celle-ci est ensuite r??inject??e en temps r??el dans le r??seau ??lectrique,
                                            r??duisant
                                            directement la consommation d???un r??seau ??lectrique.
                                        </Typography>
                                    </Grid>
                                    <Grid item justifyContent={'center'}>
                                        <Grid direction={'row'} container spacing={1} alignItems={'center'}>
                                            <Grid item>
                                                <Typography item variant={'h5'} color={'primary'} align={'center'}>Prix de pr??commande : </Typography>
                                            </Grid>
                                            <Grid item>
                                            <span item className={classes.crossedPriceBar}>
                                                <Typography item className={classes.crossedPrice} color={'primary'} align={'center'}>3,800$ </Typography>
                                            </span>
                                            </Grid>
                                            <Grid item>
                                                <Typography item variant={'h5'} color={'primary'}> 3,500$ </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography item variant={'body1'} color={'primary'}> + taxes</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Chip
                                            label="Pr??commander"
                                            clickable
                                            color={'primary'}
                                            onClick={() => {
                                                history('/precommande');
                                            }}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={'body1'}>
                                            <ul>
                                                <li>R??duit la consommation ??nerg??tique</li>
                                                <li>Niveaux pr??cis d???intensit?? variable</li>
                                                <li>M??canisme silencieux et r??sistance ??lectronique</li>
                                                <li>Prix comp??titifs</li>
                                                <li>Design moderne et ??pur??</li>
                                            </ul>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button color={'primary'} variant={'contained'} className={classes.bigButton}
                                                onClick={handleOpenPopup}>
                                            Consulter la fiche technique
                                        </Button>
                                        <Modal
                                            open={openPopup}
                                            onClose={handleClosePopup}
                                            className={classes.modalScrollable}
                                        >

                                            <Box className={classes.popupPDF}>
                                                <Document
                                                    file={FicheTechnique}
                                                    error={'Could not load file'}
                                                    loading={<CircularProgress/>}
                                                >
                                                    <Page scale={1.5} pageNumber={1}/>
                                                </Document>
                                            </Box>
                                        </Modal>
                                    </Grid>
                                </Grid>
                                <Grid item container xs spacing={3} direction={'column'} alignItems={"center"}>
                                    <Slide duration={1000} direction={'up'} triggerOnce>
                                        <Grid item xs display={"flex"} justifyContent={'center'}>
                                            <img xs className={classes.img} src={bikePhoto}/>
                                        </Grid>
                                    </Slide>
                                    <Grid item xs display={"flex"} justifyContent={'center'}>
                                        <img xs src={solarImpulse} width={'150px'}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.box4}>
                            <Grid container direction={'row'}>
                                <Grid item container xs spacing={3} direction={'column'} alignItems={'center'}>
                                    <Grid item>
                                        <img className={classes.logo} src={phoneLogo}/>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={'body2'} className={classes.textLogo}>
                                            Acc??s ?? l'application OTG pour les membres
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container xs spacing={3} direction={'column'} alignItems={'center'}>
                                    <Grid item>
                                        <img className={classes.logo} src={powerhouse}/>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={'body2'} className={classes.textLogo}>
                                            R??duction de consommation en temps r??el
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container xs spacing={3} direction={'column'} alignItems={'center'}>
                                    <Grid item>
                                        <img className={classes.logo} src={speedometer}/>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={'body2'} className={classes.textLogo}>
                                            Niveau d'intensit?? variable tr??s pr??cis
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container xs spacing={3} direction={'column'} alignItems={'center'}>
                                    <Grid item>
                                        <img className={classes.logo} src={databaseLogo}/>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={'body2'} className={classes.textLogo}>
                                            Collecte de donn??es d'utilisation en temps r??el
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.box5} sx={{display: 'flex', flexDirection: 'row'}}>
                            <Grid container direction={"row"}>
                                <Grid item container direction={'column'}
                                      display={"flex"} justifyContent={"center"} xs={4}
                                      className={classes.boxContentApplication}>
                                    <Grid item className={classes.spacingApp}>
                                        <Typography variant={'h3'}>
                                            Une application int??gr??e pour suivre l'impact de chaque entra??nement
                                        </Typography>
                                    </Grid>
                                    <Grid item container direction={'column'} className={classes.spacingApp}
                                          spacing={3}>
                                        <Grid item>
                                            <Typography variant={'body1'}>
                                                Notre application int??gr??e permet un suivi en temps r??el de la
                                                production d?????lectricit??
                                                et des statistiques d???entra??nement.
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant={'body1'}>
                                                Gr??ce ?? notre concept de gamification, l???utilisateur peut ??galement
                                                suivre son
                                                classement et relever des d??fis personnalis??s.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item className={classes.spacingApp}>
                                        <Button color={'primary'} variant={'contained'} className={classes.bigButton}
                                                onClick={handleOpenPopup2}>
                                            Aper??u de l'application
                                        </Button>
                                        <Modal
                                            open={openPopup2}
                                            onClose={handleClosePopup2}>

                                            <Box className={classes.popupBox}>
                                                <Carousel
                                                    swipeable
                                                    autoPlay={false}
                                                    showArrows={true}
                                                    showThumbs={false}
                                                    infiniteLoop={true}
                                                    emulateTouch={true}
                                                >
                                                    {popupItems2.map(phone =>
                                                        <div>
                                                            <img src={phone} className={classes.imgPopup2}/>
                                                        </div>
                                                    )}
                                                </Carousel>
                                            </Box>
                                        </Modal>
                                    </Grid>
                                </Grid>
                                <Grid item container xs={8} direction={'column'} display={"flex"}
                                      justifyContent={"flex-end"}>
                                    <img item src={backgroundImg2} className={classes.appImg}/>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.box6}>
                            <Grid container direction={'column'}>
                                <Grid item>
                                    <Typography variant={'h2'} color={'secondary'}>Nos solutions</Typography>
                                </Grid>
                                <Grid item container direction={'row'} spacing={6}>
                                    <Grid item container direction={'column'} xs spacing={4}>
                                        <Grid item>
                                            <Typography variant={'h5'} color={'primary'}>Salles de sport</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant={'body2'} color={'secondary'}>
                                                Off The Grid est la solution pour les salles de sport innovantes qui
                                                souhaitent
                                                sortir du lot. Gr??ce ?? nos v??los de spinning ??coresponsables, r??duisez
                                                votre
                                                empreinte ??cologique et attirez une client??le d??vou??e et fid??le. Quel
                                                que soit votre
                                                projet, nous saurons vous offrir un service cl?? en main personnalis??
                                                selon vos
                                                besoins.
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant={'body2'} color={'secondary'}>
                                                <ul>
                                                    <li>Gyms</li>
                                                    <li>??coles</li>
                                                    <li>Entreprises</li>
                                                    <li>Centres communautaires</li>
                                                    <li>Logements multifamiliaux</li>
                                                    <li>H??tels et spas</li>
                                                    <li>Gouvernement</li>
                                                    <li>Et bien plus encore...</li>
                                                </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item container direction={'column'} xs spacing={4}>
                                        <Grid item>
                                            <Typography variant={'h5'} color={'primary'}>Particuliers</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant={'body2'} color={'secondary'}>
                                                Nos v??los de spinning ??coresponsables sont disponibles pour les
                                                particuliers. Dans
                                                le confort de votre maison, ils vous permettront de garder la forme tout
                                                en
                                                r??duisant votre empreinte ??cologique!
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Element name="scroll-to-element">
                            <Box className={classes.box7} display={'flex'}>
                                <Grid container direction={'row'}>
                                    <Grid item container direction={'column'} xs spacing={4}>
                                        <Grid item>
                                            <Typography variant={'h3'} color={'secondary'}>
                                                En apprendre plus
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant={'body2'} color={'secondary'}>
                                                Devenez un athl??te de changement et rejoignez le mouvement Off The Grid
                                                en vous
                                                inscrivant ?? notre infolettre! De cette fa??on, vous recevrez toutes les
                                                offres et
                                                nouveaut??s de l???entreprise en primeur.
                                            </Typography>
                                        </Grid>
                                        <Divider/>
                                        <Grid item>
                                            <Typography variant={'body2'} color={'secondary'}>
                                                Vous avez des questions ou vous aimeriez collaborer avec nous?
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant={'body2'} color={'secondary'}>
                                                ??crivez-nous ?? <Link className={classes.mailLink}
                                                                     href={'mailto:info@getoffthegrid.ca'}>info@getoffthegrid.ca</Link>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item container className={classes.boxNewsletter} xs>
                                        <Grid container direction={'column'} className={classes.newsletterContent}>
                                            <Grid item>
                                                <Typography variant={'h3'}>
                                                    Inscrivez-vous ?? notre infolettre
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <HubspotForm
                                                    portalId='8730883'
                                                    formId='32ea94cd-5204-4920-b9f0-bd302299d403'
                                                    loading={<div>Chargement du formulaire</div>}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Element>
                    </Fragment>)}

        </div>
    )
}
