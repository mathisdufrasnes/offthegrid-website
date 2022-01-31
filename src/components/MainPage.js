import logo from '../media/LogoOTG.png';
import './MainPage.css';
import React, {useEffect, useState} from 'react';
import Flags from 'country-flag-icons/react/3x2'
import {alpha, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LanguageIcon from '@material-ui/icons/Language';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CloseIcon from '@mui/icons-material/Close';
import {FormControl, Grid, InputLabel, Modal, Select} from "@material-ui/core";
import {Link, Redirect, Route, Router, Switch, useHistory, useLocation, useParams} from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Fragment} from "react";
import {Dropdown, Menu} from 'semantic-ui-react'
import Accueil from "./Accueil";
import AccueilEN from "./AccueilEN";
import Actus from "./Actus";
import ActusEN from "./ActusEN";
import Equipe from "./Equipe";
import EquipeEN from "./EquipeEN";
import FAQ from "./FAQ";
import FAQ_EN from "./FAQ_EN";
import Precommande from "./Precommande";
import PrecommandeEN from "./PrecommandeEN";
import {useSelector, useDispatch} from 'react-redux'
import {setLang, toggle} from "../reducers/languageSlice";
import {ThemeProvider, createTheme} from '@material-ui/core'
import ScrollButton from "./ScrollTop";
import ZoomActu from "./ZoomActu";
import ZoomActuEN from "./ZoomActuEN";
import Admin from "./Admin";
import {useMediaQuery} from "react-responsive";

export const customTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#0077ff',
            light: '#598ab7',
            dark: '#337ab7',
        },
        secondary: {
            main: '#f2f2f2',
            light: '#ffffff',
            dark: '#bebebe',
            contrastText: '#000000',
        },
        background: {
            default: '#f2f2f2',
        },
        text: {
            primary: '#000000',
        },
        divider: '#bebebe',
    },
    typography: {
        fontFamily: '"Montserrat-Regular"',
        fontSize: 18,
        h1: {
            fontFamily: '"Montserrat-Bold"',
            fontSize: 60,
        },
        h2: {
            fontFamily: '"Montserrat-Bold"',
            fontSize: 50,
        },
        h3: {
            fontFamily: '"Montserrat-Bold"',
            fontSize: 35,
        },
        h4: {
            fontFamily: '"Montserrat-Bold"',
            fontSize: 30,
        },
        h5: {
            fontFamily: '"Montserrat-Bold"',
            fontSize: 21,
        },
        h6: {
            fontFamily: '"Montserrat-Bold"',
            fontSize: 25,
        },
        body1: {
            fontSize: 18,
        },
        body2: {
            fontSize: 20,
        },
        button: {
            fontSize: 26,
            textTransform: 'none',
            fontFamily: 'Montserrat-Medium',
        },
    },
    shape: {
        borderRadius: 15,
    },
    overrides: {
        MuiAppBar: {
            colorInherit: {
                backgroundColor: '#ffffff',
                color: '#000000',
            },
        },
    },
    props: {
        MuiAppBar: {
            color: 'inherit',
        },
        MuiTooltip: {
            arrow: true,
        },
    },
})

const useStyles = makeStyles((customTheme) => ({
    root: {
        flexGrow: 1,
    },
    menuText: {
        fontWeight: "bold",
        fontSize: "medium",
        textAlign: "center"
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        maxHeight: 40,
        marginTop: 10,
        marginBottom: 10,
    },
    logoMobile: {
        maxHeight: '40px',
        marginTop: '10px',
        marginBottom: '10px',
        maxWidth: '50vw',
    },
    appbar: {
        color: "white",
        spacing: 2,
        textAlign: "center",
    },
    offset: {
        marginTop: "10vw"
    },
    menuButton: {
        borderRadius: '10px',
    },
    mobileMenuButton: {
        width: '100%',
        borderRadius: '0px',
        fontSize:'2vmax',
        fontFamily:'Montserrat-Bold',
    },
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    modal: {
        backgroundColor: '#ffffff',
        paddingLeft: '16px',
        paddingRight: '16px',
        width: '100%',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 0%)',
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 5px 5 px 0px rgb(0 0 0 / 12%)',
    },
menuGrid:{
        width:'100%',
}
}));

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default function MainPage() {

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
        setOpenModal(true);
    }
    const handleCloseModal = () => {
        setOpenModal(false);
    }
    const dispatch = useDispatch()
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    //const lang = useSelector(state => state.lang.value)
    const lang = location.pathname.includes('/en') ? 'gb' : 'fr'
    useEffect(() => {
        dispatch(setLang(lang));
    })
    const toggleLanguage = (language) => {
        if (language === "fr") {
            history.push('/en' + location.pathname)
        } else if (language === "gb") {
            history.push(location.pathname.replace("/en", ""))
        }
        dispatch(toggle())
    };

    const setLanguage = (language) => {
        if (language === "gb") {
            history.push('/en' + location.pathname)
        } else if (language === "fr") {
            history.push(location.pathname.replace("/en", ""))
        }
        dispatch(setLang(language))
    };


    const languageOptions = [
        {key: 'fr', value: 'fr', flag: 'fr', text: 'FR'},
        {key: 'gb', value: 'gb', flag: 'gb', text: 'EN'},
    ]
    const DropdownExampleSearchSelection = () => (
        <Menu compact>
            <Dropdown
                fluid
                selection
                options={languageOptions}
                value={lang}
                onChange={() => toggleLanguage(lang)}
            />
        </Menu>
    )

    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'})

    return (
        <Fragment>
            <ThemeProvider theme={customTheme}>
                <div>
                    <div className={classes.root}>
                        {isTabletOrMobile ? (
                            <Fragment>
                                {lang === 'fr' ?
                                    <Fragment>
                                        <AppBar position={'fixed'}>
                                            <Toolbar>
                                                <Grid container direction={'row'} className={classes.navbar}>
                                                    <Grid item>
                                                        <Button className={classes.menuButton} aria-label="Home"
                                                                size="large"
                                                                edge="start"
                                                                color="inherit" onClick={() => {
                                                            history.push('/');
                                                            history.go(0);
                                                        }}>
                                                            <img className={classes.logoMobile} src={logo}></img>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item>
                                                        <IconButton
                                                            size="large"
                                                            edge="start"
                                                            color="inherit"
                                                            aria-label="menu"
                                                            sx={{mr: 2}}
                                                            onClick={() => handleOpenModal()}
                                                        >
                                                            <MenuIcon/>
                                                        </IconButton>
                                                    </Grid>
                                                </Grid>
                                            </Toolbar>
                                        </AppBar>
                                        <Modal open={openModal}
                                               onClose={handleCloseModal}
                                        >
                                            <Grid className={classes.modal}>
                                                <Grid container direction={'row'} className={classes.navbar}>
                                                    <Grid item>
                                                        <Button className={classes.menuButton} aria-label="Home"
                                                                size="large"
                                                                edge="start"
                                                                color="inherit" onClick={() => {
                                                            history.push('/');
                                                            history.go(0);
                                                        }}>
                                                            <img className={classes.logoMobile} src={logo}></img>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item>
                                                        <IconButton
                                                            size="large"
                                                            edge="start"
                                                            color="inherit"
                                                            aria-label="menu"
                                                            sx={{mr: 2}}
                                                            onClick={() => handleCloseModal()}
                                                        >
                                                            <CloseIcon/>
                                                        </IconButton>
                                                    </Grid>
                                                </Grid>
                                                <Grid container direction={'column'} alignItems={'center'} className={classes.menuGrid}>
                                                    <Grid item className={classes.menuGrid}>
                                                        <Button className={classes.mobileMenuButton} color={location.pathname === '/' ? 'primary' : ''}
                                                                variant={location.pathname === '/' ? 'contained' : ''}
                                                                onClick={() => {
                                                                    handleCloseModal();
                                                                    history.push('/');
                                                                    history.go(0);
                                                                }}>
                                                            Accueil
                                                        </Button>
                                                    </Grid>

                                                    <Grid item className={classes.menuGrid}>
                                                        <Button className={classes.mobileMenuButton} color={location.pathname.includes('/actus') ? 'primary' : ''}
                                                                variant={location.pathname.includes('/actus') ? 'contained' : ''}
                                                                onClick={() => {
                                                                    handleCloseModal();
                                                                    history.push('/actus');
                                                                    history.go(0);
                                                                }}>
                                                            Actualités
                                                        </Button>
                                                    </Grid>

                                                    <Grid item className={classes.menuGrid}>
                                                        <Button className={classes.mobileMenuButton} color={location.pathname.includes('/equipe') ? 'primary' : ''}
                                                                variant={location.pathname.includes('/equipe') ? 'contained' : ''}
                                                                onClick={() => {
                                                                    handleCloseModal();
                                                                    history.push('/equipe');
                                                                    history.go(0);
                                                                }}>
                                                            Notre équipe
                                                        </Button>
                                                    </Grid>

                                                    <Grid item className={classes.menuGrid}>
                                                        <Button className={classes.mobileMenuButton} color={location.pathname.includes('/FAQ') ? 'primary' : ''}
                                                                variant={location.pathname.includes('/FAQ') ? 'contained' : ''}
                                                                onClick={() => {
                                                                    handleCloseModal();
                                                                    history.push('/FAQ');
                                                                    history.go(0);
                                                                }}>
                                                            FAQ
                                                        </Button>
                                                    </Grid>

                                                    <Grid item className={classes.menuGrid}>
                                                        <Button className={classes.mobileMenuButton} color={location.pathname.includes('/precommande') ? 'primary' : ''}
                                                                variant={location.pathname.includes('/precommande') ? 'contained' : ''}
                                                                onClick={() => {
                                                                    handleCloseModal();
                                                                    history.push('/precommande');
                                                                    history.go(0);
                                                                }}>
                                                            Précommande
                                                        </Button>
                                                    </Grid>
                                                    <Grid item className={classes.menuGrid}>
                                                        <Button className={classes.mobileMenuButton} onClick={()=>{toggleLanguage(lang); handleCloseModal();}}>
                                                            {lang === 'fr'? 'English' : 'Français'}
                                                        </Button>
                                                    </Grid>

                                                </Grid>
                                            </Grid>
                                        </Modal>
                                    </Fragment>
                                    :
                                    <Fragment>
                                        <AppBar position={'fixed'}>
                                            <Toolbar>
                                                <Grid container direction={'row'} className={classes.navbar}>
                                                    <Grid item>
                                                        <Button className={classes.menuButton} aria-label="Home"
                                                                size="large"
                                                                edge="start"
                                                                color="inherit" onClick={() => {
                                                            history.push('/en');
                                                            history.go(0);
                                                        }}>
                                                            <img className={classes.logoMobile} src={logo}></img>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item>
                                                        <IconButton
                                                            size="large"
                                                            edge="start"
                                                            color="inherit"
                                                            aria-label="menu"
                                                            sx={{mr: 2}}
                                                            onClick={() => handleOpenModal()}
                                                        >
                                                            <MenuIcon/>
                                                        </IconButton>
                                                    </Grid>
                                                </Grid>
                                            </Toolbar>
                                        </AppBar>
                                        <Modal open={openModal}
                                               onClose={handleCloseModal}
                                        >
                                            <Grid className={classes.modal}>
                                                <Grid container direction={'row'} className={classes.navbar}>
                                                    <Grid item>
                                                        <Button className={classes.menuButton} aria-label="Home"
                                                                size="large"
                                                                edge="start"
                                                                color="inherit" onClick={() => {
                                                            history.push('/en');
                                                            history.go(0);
                                                        }}>
                                                            <img className={classes.logoMobile} src={logo}></img>
                                                        </Button>
                                                    </Grid>
                                                    <Grid item>
                                                        <IconButton
                                                            size="large"
                                                            edge="start"
                                                            color="inherit"
                                                            aria-label="menu"
                                                            sx={{mr: 2}}
                                                            onClick={() => handleCloseModal()}
                                                        >
                                                            <CloseIcon/>
                                                        </IconButton>
                                                    </Grid>
                                                </Grid>
                                                <Grid container direction={'column'} alignItems={'center'} className={classes.menuGrid}>
                                                    <Grid item className={classes.menuGrid}>
                                                        <Button className={classes.mobileMenuButton} color={location.pathname === '/en' ? 'primary' : ''}
                                                                variant={location.pathname === '/en' ? 'contained' : ''}
                                                                onClick={() => {
                                                                    handleCloseModal();
                                                                    history.push('/en');
                                                                    history.go(0);
                                                                }}>
                                                            Home
                                                        </Button>
                                                    </Grid>

                                                    <Grid item className={classes.menuGrid}>
                                                        <Button className={classes.mobileMenuButton} color={location.pathname.includes('/en/actus') ? 'primary' : ''}
                                                                variant={location.pathname.includes('/en/actus') ? 'contained' : ''}
                                                                onClick={() => {
                                                                    handleCloseModal();
                                                                    history.push('/en/actus');
                                                                    history.go(0);
                                                                }}>
                                                            News
                                                        </Button>
                                                    </Grid>

                                                    <Grid item className={classes.menuGrid}>
                                                        <Button className={classes.mobileMenuButton} color={location.pathname.includes('/en/equipe') ? 'primary' : ''}
                                                                variant={location.pathname.includes('/en/equipe') ? 'contained' : ''}
                                                                onClick={() => {
                                                                    handleCloseModal();
                                                                    history.push('/en/equipe');
                                                                    history.go(0);
                                                                }}>
                                                            Our team
                                                        </Button>
                                                    </Grid>

                                                    <Grid item className={classes.menuGrid}>
                                                        <Button className={classes.mobileMenuButton} color={location.pathname.includes('/en/FAQ') ? 'primary' : ''}
                                                                variant={location.pathname.includes('/en/FAQ') ? 'contained' : ''}
                                                                onClick={() => {
                                                                    handleCloseModal();
                                                                    history.push('/en/FAQ');
                                                                    history.go(0);
                                                                }}>
                                                            FAQ
                                                        </Button>
                                                    </Grid>

                                                    <Grid item className={classes.menuGrid}>
                                                        <Button className={classes.mobileMenuButton} color={location.pathname.includes('/en/precommande') ? 'primary' : ''}
                                                                variant={location.pathname.includes('/en/precommande') ? 'contained' : ''}
                                                                onClick={() => {
                                                                    handleCloseModal();
                                                                    history.push('/en/precommande');
                                                                    history.go(0);
                                                                }}>
                                                            Preorder
                                                        </Button>
                                                    </Grid>
                                                    <Grid item className={classes.menuGrid}>
                                                        <Button className={classes.mobileMenuButton} onClick={()=>{toggleLanguage(lang); handleCloseModal();}}>
                                                            {lang === 'fr'? 'English' : 'Français'}
                                                        </Button>
                                                    </Grid>

                                                </Grid>
                                            </Grid>
                                        </Modal>
                                    </Fragment>
                                }
                            </Fragment>
                            ) :
                            (
                                <Fragment>
                                    {lang === "fr" ? (
                                            <Fragment>
                                                <AppBar position="fixed">
                                                    <Toolbar>
                                                        <Grid container direction={'row'} className={classes.navbar}>
                                                            <Grid item>
                                                                <Button className={classes.menuButton} aria-label="Home"
                                                                        size="large"
                                                                        edge="start"
                                                                        color="inherit" onClick={() => {
                                                                    history.push('/');
                                                                    history.go(0);
                                                                }}>
                                                                    <img className={classes.logo} src={logo}></img>
                                                                </Button>
                                                            </Grid>
                                                            <Grid item>
                                                                <Button className={classes.menuButton}
                                                                        color={location.pathname === '/' ? 'primary' : ''}
                                                                        onClick={() => {
                                                                            history.push('/');
                                                                            history.go(0);
                                                                        }}>
                                                                    <Typography
                                                                        className={classes.menuText}>Accueil</Typography>
                                                                </Button>
                                                            </Grid>

                                                            <Grid item>
                                                                <Button className={classes.menuButton}
                                                                        color={location.pathname.includes('/actus') ? 'primary' : ''}
                                                                        onClick={() => {
                                                                            history.push('/actus');
                                                                            history.go(0);
                                                                        }}>
                                                                    <Typography
                                                                        className={classes.menuText}>Actualités</Typography>
                                                                </Button>
                                                            </Grid>
                                                            <Grid item>
                                                                <Button className={classes.menuButton}
                                                                        color={location.pathname.includes('/equipe') ? 'primary' : ''}
                                                                        onClick={() => {
                                                                            history.push('/equipe');
                                                                            history.go(0);
                                                                        }}>
                                                                    <Typography className={classes.menuText}>Notre
                                                                        équipe</Typography>
                                                                </Button>
                                                            </Grid>

                                                            <Grid item>
                                                                <Button className={classes.menuButton}
                                                                        color={location.pathname.includes('/FAQ') ? 'primary' : ''}
                                                                        onClick={() => {
                                                                            history.push('/FAQ');
                                                                            history.go(0);
                                                                        }}>
                                                                    <Typography
                                                                        className={classes.menuText}>F.A.Q.</Typography>
                                                                </Button>
                                                            </Grid>
                                                            <Grid item>
                                                                <Button className={classes.menuButton}
                                                                        color={location.pathname.includes('/precommande') ? 'primary' : ''}
                                                                        onClick={() => {
                                                                            history.push('/precommande');
                                                                            history.go(0);
                                                                        }}>
                                                                    <Typography
                                                                        className={classes.menuText}>Précommande</Typography>
                                                                </Button>
                                                            </Grid>
                                                            <Grid item>
                                                                <DropdownExampleSearchSelection/>
                                                            </Grid>
                                                        </Grid>
                                                    </Toolbar>
                                                </AppBar>
                                            </Fragment>
                                        ) :
                                        (
                                            <Fragment>
                                                <AppBar position="fixed" color="white">
                                                    <Toolbar>
                                                        <Grid container direction={'row'} className={classes.navbar}>
                                                            <Grid item>
                                                                <Button className={classes.menuButton} aria-label="Home"
                                                                        size="large"
                                                                        edge="start"
                                                                        color="inherit" onClick={() => {
                                                                    history.push('/en');
                                                                    history.go(0);
                                                                }}>
                                                                    <img className={classes.logo} src={logo}></img>
                                                                </Button>
                                                            </Grid>
                                                            <Grid item>
                                                                <Button className={classes.menuButton}
                                                                        color={location.pathname === '/en' ? 'primary' : ''}
                                                                        onClick={() => {
                                                                            history.push('/en');
                                                                            history.go(0);
                                                                        }}>
                                                                    <Typography
                                                                        className={classes.menuText}>Home</Typography>
                                                                </Button>
                                                            </Grid>

                                                            <Grid item>
                                                                <Button className={classes.menuButton}
                                                                        color={location.pathname.includes('/en/actus') ? 'primary' : ''}
                                                                        onClick={() => {
                                                                            history.push('/en/actus');
                                                                            history.go(0);
                                                                        }}>
                                                                    <Typography
                                                                        className={classes.menuText}>News</Typography>
                                                                </Button>
                                                            </Grid>
                                                            <Grid item>
                                                                <Button className={classes.menuButton}
                                                                        color={location.pathname.includes('/en/equipe') ? 'primary' : ''}
                                                                        onClick={() => {
                                                                            history.push('/en/equipe');
                                                                            history.go(0);
                                                                        }}>
                                                                    <Typography className={classes.menuText}>Our
                                                                        team</Typography>
                                                                </Button>
                                                            </Grid>

                                                            <Grid item>
                                                                <Button className={classes.menuButton}
                                                                        color={location.pathname.includes('/en/FAQ') ? 'primary' : ''}
                                                                        onClick={() => {
                                                                            history.push('/en/FAQ');
                                                                            history.go(0);
                                                                        }}>
                                                                    <Typography
                                                                        className={classes.menuText}>F.A.Q.</Typography>
                                                                </Button>
                                                            </Grid>
                                                            <Grid item>
                                                                <Button className={classes.menuButton}
                                                                        color={location.pathname.includes('/en/precommande') ? 'primary' : ''}
                                                                        onClick={() => {
                                                                            history.push('/en/precommande');
                                                                            history.go(0);
                                                                        }}>
                                                                    <Typography
                                                                        className={classes.menuText}>Preorder</Typography>
                                                                </Button>
                                                            </Grid>
                                                            <Grid item>
                                                                <DropdownExampleSearchSelection/>
                                                            </Grid>
                                                        </Grid>
                                                    </Toolbar>
                                                </AppBar>
                                            </Fragment>
                                        )}
                                </Fragment>)
                        }
                    </div>
                    <div>
                        <Switch>
                            <Route path="/" exact component={Accueil}/>
                            <Route path="/actus" exact component={Actus}/>
                            <Route path="/actus/:id" exact component={ZoomActu}/>
                            <Route path="/equipe" exact component={Equipe}/>
                            <Route path="/FAQ" exact component={FAQ}/>
                            <Route path="/precommande" exact component={Precommande}/>
                            <Route path="/en" exact component={AccueilEN}/>
                            <Route path="/en/actus" exact component={ActusEN}/>
                            <Route path="/en/actus/:id" exact component={ZoomActuEN}/>
                            <Route path="/en/equipe" exact component={EquipeEN}/>
                            <Route path="/en/FAQ" exact component={FAQ_EN}/>
                            <Route path="/en/precommande" exact component={PrecommandeEN}/>
                            <Route path="/admin" exact component={Admin}/>
                            <Redirect from="/en/admin" to="/admin"/>
                            <Route
                                render={() => <div><h1>404: page not found</h1><h1>404: page not found</h1><h1>404:
                                    page not
                                    found</h1><h1>404: page not found</h1><h1>404: page not found</h1><h1>404: page
                                    not
                                    found</h1><h1>404: page not found</h1></div>}/>
                        </Switch>
                    </div>
                </div>
                <ScrollButton/>

            </ThemeProvider>

        </Fragment>
    );

}
