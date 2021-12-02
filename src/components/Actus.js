import React, {Fragment, useEffect, useState} from "react"
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import {DataStore, Predicates, SortDirection} from '@aws-amplify/datastore';
import {API, Storage} from 'aws-amplify';
import {News} from '../models';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import {createTheme, ThemeProvider, styled} from '@mui/material/styles';
import {makeStyles} from "@material-ui/core/styles"
import "./Actus.css"
import {
    Box,
    Card,
    CardActions,
    CardContent, Checkbox,
    FormControl,
    Grid,
    InputLabel, ListItemText,
    MenuItem, Modal, OutlinedInput,
    Select, Slider,
    TextField
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {TimelineOppositeContent} from "@mui/lab";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import ZoomActu from "./ZoomActu";
import Accueil from "./Accueil";
import useAuth from "../hooks/useAuth";


const MenuProps = {
    PaperProps: {
        style: {
            borderRadius: 0,
            width: 'auto'
        },
    },
    anchorOrigin: {
        vertical: "bottom",
        horizontal: "left"
    },
    transformOrigin: {
        vertical: "top",
        horizontal: "left"
    },
    width: 'auto',
    getContentAnchorEl: null,
};
const categories = [
    'Actualité',
    'Rubrique',
    'Vidéo'
];
const mois = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
];
const auteurs = [
    'Charles'
];


const useStyles = makeStyles((theme) => ({
    root:
        {
            flexGrow: 1
        },
    box1: {
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        backgroundColor: "#ffffff",
        paddingTop: "115px",
        paddingBottom: '4%',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContent: {
        width: '65vw',
    },
    box1Content: {
        width: '80vw',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    card: {
        borderRadius: '0px',
        width: '80%',
        transition: 'all .3s',
        "&:hover": {
            transform: 'scale(1.04)',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            cursor: 'pointer',
        }
    },
    smallCard: {
        borderRadius: '0px',
        width: '80%',
    },
    cardContent: {
        textAlign: 'start',
        display: "flex",
        flexDirection: 'column',
    },
    TLContent: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    TLOppositeContent: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
    },
    titleText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: '24px',
    },
    smallTitleText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: '18px',
    },
    authorText: {
        fontSize: '14px',
        fontFamily: 'Montserrat-Medium',
    },
    contentText: {
        fontSize: '14px',
        fontFamily: 'Montserrat-Light',
    },
    cardImg: {
        minWidth: '70%',
        maxWidth: '100%',
        maxHeight: '30vh',
        objectFit: 'contain'
    },
    smallCardImg: {
        minWidth: '35%',
        maxWidth: '50%',
        maxHeight: '15vh',
        objectFit: 'contain'
    },
    TLSep: {
        height: '50%'
    },
    typeIcon: {
        marginRight: '5px'
    },
    cardActions: {
        display: "flex",
        justifyContent: 'space-between',
    },
    adminButtons: {
        borderRadius: '15px',
        padding: '5px',
        fontSize: '18px',
    },
    adminButtonsGrid: {
        paddingTop: '5px',
        paddingBottom: '5px',
    },
    modal: {
        backgroundColor: '#f2f2f2',
        minHeight: '10vh',
        padding: '2%',
        border: '2px solid #000',
        boxShadow: 24,
        width: 'auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    modalEdit: {
        backgroundColor: '#f2f2f2',
        padding: '1% 0.5% 4% 2% ',
        border: '2px solid #000',
        boxShadow: 24,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        height: '80vh',
        overflow:'hidden',
    },
    modalScrollable: {
        paddingRight:'30px',
        overflowY: 'scroll',
        overflowX:'hidden',
        height:'55vh',
    },
    modalHeader:{
        paddingBottom:'20px',
    },
    miniText:{
        fontSize:'12px',
        fontFamily:'Montserrat-Light',
        color:'#d70000'
    },
    modalButtons:{
        paddingTop:'20px',
    },
    modalValidateButton: {
        backgroundColor: '#32a823',
        color: '#ffffff'
    },
    modalCancelButton: {
        backgroundColor: '#ab1616',
        color: '#ffffff'
    },
    modalSmallValidateButton: {
        backgroundColor: '#32a823',
        color: '#ffffff',
        fontSize: '17px',
    },
    modalSmallCancelButton: {
        backgroundColor: '#ab1616',
        color: '#ffffff',
        fontSize: '17px',
    },
    textField: {
        fontSize: '15px',
        margin: '-5px',
    }
}));

export default function Actus() {
    const [offset, setOffset] = useState(0);
    const [admin, setAdmin] = useState(false);
    const {currentUser} = useAuth()
    useEffect(() => {
        if (currentUser !== null) {
            if (currentUser.hasOwnProperty('username')) {
                setAdmin(true);
            }
        }
    });

    const [modalIndex, setModalIndex] = useState('');
    const handleChangeModalIndex = (value) => {
        setModalIndex(value);
    }
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
        setOpenModal(true);
    }
    const handleCloseModal = () => {
        setOpenModal(false);
    }
    const [modalIndex2, setModalIndex2] = useState('');
    const handleChangeModalIndex2 = (value) => {
        setDatePickerValue(formatDateAWSToDatePicker(value.date));
        setModalIndex2(value);
    }
    const [openModal2, setOpenModal2] = useState(false);
    const handleOpenModal2 = () => {
        setOpenModal2(true);
    }
    const handleCloseModal2 = () => {
        setOpenModal2(false);
    }

    const [openModal3, setOpenModal3] = useState(false);
    const handleOpenModal3 = () => {
        setOpenModal3(true);
    }
    const handleCloseModal3 = () => {
        setOpenModal3(false);
    }

    const [actualites, setActualites] = useState([]);
    useEffect(() => {
        fetchNews();
    }, []);

    async function fetchNews() {
        let news = await DataStore.query(News, Predicates.ALL, {
            sort: s => s.idNews(SortDirection.ASCENDING)
        });
        let actus = [];
        await Promise.all(news.map(async newsItem => {
            let actu = {
                id: newsItem.id,
                idNews: newsItem.idNews,
                title: newsItem.title,
                titleFR: newsItem.titleFR,
                author: newsItem.author,
                date: newsItem.date,
                content: newsItem.content,
                contentFR: newsItem.contentFR,
                type: newsItem.type,
                typeFR: newsItem.typeFR,
                nbComments: newsItem.nbComments,
                nbCommentsFR: newsItem.nbCommentsFR,
                img: newsItem.img,
                imgFile: '',
            };
            if (actu.img !== '' && actu.img !== null) {
                const image = await Storage.get(actu.img);
                actu.imgFile = image;
            } else {
                actu.imgFile = null;
            }
            actus.push(actu);
        }))
        setActualites(actus);
    }

    async function deleteNews(actualite) {
        const todelete = await DataStore.query(News, actualite.id);
        DataStore.delete(todelete).then(window.location.reload());
    }

    async function editNews(actualite) {
        const toEdit = await DataStore.query(News, actualite.id);
        await DataStore.save(
            News.copyOf(toEdit, updated => {
                if(actualite.title!=='' && actualite.title !== modalIndex2.title)
                {
                    updated.title = actualite.title
                };
                if(actualite.titleFR!=='' && actualite.titleFR !== modalIndex2.titleFR)
                {
                    updated.titleFR = actualite.titleFR
                };
                if(actualite.content!=='' && actualite.content !== modalIndex2.content)
                {
                    updated.content = actualite.content
                };
                if(actualite.contentFR!=='' && actualite.contentFR !== modalIndex2.contentFR)
                {
                    updated.contentFR = actualite.contentFR
                };
                if(actualite.author!=='' && actualite.author !== modalIndex2.author)
                {
                    updated.author = actualite.author
                };
                if(actualite.date!=='' && actualite.date !== modalIndex2.date)
                {
                    updated.date = actualite.date
                };
                if(actualite.type!=='' && actualite.type !== modalIndex2.type)
                {
                    updated.type = actualite.type
                };
                if(actualite.typeFR!=='' && actualite.typeFR !== modalIndex2.typeFR)
                {
                    updated.typeFR = actualite.typeFR
                };
                if(actualite.imgFile !== null && typeof actualite.imgFile !== 'undefined')
                {
                    updated.img = 'actu' + (actualite.idNews).toString()+'.png';
                }
                else if(actualite.img !=='' && actualite.img !== modalIndex2.img)
                {
                    updated.img = actualite.img
                }
            })
        );
        if(actualite.imgFile !== null && typeof actualite.imgFile !== 'undefined')
        {
            await Storage.put('actu' + (actualite.idNews).toString()+'.png', actualite.imgFile, {
            resumable: true,
        });
        }
    }
    async function createNews(actualite) {
        const id = (Math.max.apply(Math, actualites.map(function(actu) { return actu.idNews; })))+1;
        await DataStore.save(
            new News({
                idNews : id,
                title : actualite.title,
                titleFR : actualite.titleFR,
                content : actualite.content,
                contentFR : actualite.contentFR,
                author : actualite.author,
                date : actualite.date,
                type : actualite.type,
                typeFR : actualite.typeFR,
                img : typeof actualite.imgFile !== "undefined" ? ('actu' + id.toString()+'.png') : (actualite.img !== '' ? actualite.img : ''),
                nbCommentsFR : 0,
                nbComments : 0,
            })
        );
        if(actualite.imgFile !== null && typeof actualite.imgFile !== 'undefined')
        {
            await Storage.put('actu' + id.toString()+'.png', actualite.imgFile,{
                resumable: true,
            });
        }
    }
    async function fetchNewsSearch(search) {
        let news = await DataStore.query(News, c => c.or(
            c => c.title("contains", search).titleFR("contains", search).content("contains", search).contentFR("contains", search).title("contains", search.toLowerCase()).titleFR("contains", search.toLowerCase()).content("contains", search.toLowerCase()).contentFR("contains", search.toLowerCase())
        ), {
            sort: s => s.idNews(SortDirection.ASCENDING)
        });
        let actus = [];
        await Promise.all(news.map(async newsItem => {
            let actu = {
                id: newsItem.id,
                idNews: newsItem.idNews,
                title: newsItem.title,
                titleFR: newsItem.titleFR,
                author: newsItem.author,
                date: newsItem.date,
                content: newsItem.content,
                contentFR: newsItem.contentFR,
                type: newsItem.type,
                typeFR: newsItem.typeFR,
                nbComments: newsItem.nbComments,
                nbCommentsFR: newsItem.nbCommentsFR,
                img: newsItem.img,
                imgFile: '',
            };
            if (actu.img !== '' && actu.img !== null) {
                const image = await Storage.get(actu.img);
                actu.imgFile = image;
            } else {
                actu.imgFile = null;
            }
            actus.push(actu);
        }))
        setActualites(actus);
    }

    const history = useHistory();
    const location = useLocation();
    const [search, setSearch] = React.useState('')
    const [category, setCategory] = React.useState([]);
    const [auteur, setAuteur] = React.useState([]);

    const [minDate, setMinDate] = React.useState([2019, 7]);
    const [maxDate, setMaxDate] = React.useState([2022, 1]);
    const [maxDateInterval, setMaxDateInterval] = React.useState(((maxDate[0] - minDate[0]) * 12) + (maxDate[1] - minDate[1]) + 1);
    const [value2, setValue2] = React.useState([1, 100]);
    const minDistance = 1;
    const handleChangeDate = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValue2([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue2([clamped - minDistance, clamped]);
            }
        } else {
            setValue2(newValue);
        }
    };
    const handleSearch = (search) => {
        setSearch(search.target.value);
    }
    const handleSubmit = (values) => {
        fetchNewsSearch(values.target[0].value)
        values.preventDefault()
    }
    const formatDate = (date) => {
        if(date === null || date ==='' || typeof date === 'undefined')
        {
            return ''
        }
        const month = mois[parseInt(date.substring(5, 7)) - 1]
        return date.substring(8, 10) + ' ' + month + ' ' + date.substring(0, 4);
    };
    const formatDateAWSToDatePicker= (date) => {
        if(date === null || date ==='' || typeof date === 'undefined')
        {
            return ''
        }
        return  date.substring(5, 7) + '/' + date.substring(8, 10) + '/' + date.substring(0, 4);
    }
    const formatDateDatePickerToAWS= (date) => {
        if(date === null || date ==='' || typeof date === 'undefined')
        {
            return ''
        }
        return  date.substring(6, 10) + '-' + date.substring(0, 2) + '-' + date.substring(3, 5);
    }
    const handleEdit = (values) => {
        const news = {
            id: modalIndex2.id,
            idNews: modalIndex2.idNews,
            title: values.target[0].value,
            titleFR: values.target[3].value,
            content: values.target[6].value,
            contentFR: values.target[9].value,
            author: values.target[12].value,
            date: values.target[15].value === '' ? null : formatDateDatePickerToAWS(values.target[15].value),
            type: values.target[17].value,
            typeFR: values.target[20].value,
            img: values.target[23].value,
            imgFile: values.target[26].files[0],
        }
        editNews(news).then(values.preventDefault());
    }
    const handleDelete = (actu) => {
        deleteNews(actu);
    }
    const handleCreate = (values) =>{
        const news = {
            title: values.target[0].value,
            titleFR: values.target[3].value,
            content: values.target[6].value,
            contentFR: values.target[9].value,
            author: values.target[12].value,
            date: values.target[15].value === '' ? null : formatDateDatePickerToAWS(values.target[15].value),
            type: values.target[17].value,
            typeFR: values.target[20].value,
            img: values.target[23].value,
            imgFile: values.target[26].files[0],
        }
        createNews(news).then(values.preventDefault());
    }
    const handleChangeCateg = (event) => {
        const {
            target: {value},
        } = event;
        setCategory(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleChangeAuteur = (event) => {
        const {
            target: {value},
        } = event;
        setAuteur(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const formatDateSlider = (value) => {
        const yearSurplus = Math.floor(value / 12)
        let year = minDate[0] + yearSurplus
        value = value - (yearSurplus * 12)
        if (value > (12 - minDate[1])) {
            value = value + minDate[1] - 12
            year += 1
        } else {
            value = value + minDate[1]
        }

        let month = mois[(value) - 1]
        return month + ' ' + year.toString()
    }
    const [datePickerValue, setDatePickerValue] = React.useState(null);
    const [datePickerValue2, setDatePickerValue2] = React.useState(null);
    function CategoryIcon(props) {
        switch (props.type) {
            case "Actualité":
                return (<Fragment><FeedOutlinedIcon className={classes.typeIcon}/></Fragment>)
            case "Vidéo":
                return (<Fragment><PlayCircleOutlineIcon className={classes.typeIcon}/></Fragment>)
            case "Rubrique":
                return (<Fragment><AddCommentOutlinedIcon className={classes.typeIcon}/></Fragment>)
            default:
                return (<Fragment></Fragment>)
        }
    }

    const classes = useStyles()

    return (
        <Fragment>
            <Box className={classes.header}>
                <Grid container className={classes.headerContent} direction={'column'} spacing={3}>
                    <Grid item>
                        <Typography variant={'h2'}>Actualités</Typography>
                    </Grid>
                    <Grid item>
                        <form onSubmit={handleSubmit}>
                            <Grid container direction={'row'} spacing={2}>
                                <Grid item xs>
                                    <TextField label="Effectuer une recherche" fullWidth/>
                                </Grid>
                                <Button type={'submit'}>
                                    Rechercher
                                </Button>
                            </Grid>
                        </form>
                    </Grid>
                    {admin === true ?
                            <Grid item>
                                <Button className={classes.adminButtons}
                                        variant={"contained"} color={'primary'}
                                        onClick={() => {
                                            handleOpenModal3();
                                        }}>
                                    Ajouter une actualité
                                </Button>
                            </Grid> : ''}
                </Grid>
            </Box>
            <Box className={classes.box1}>
                <Grid className={classes.box1Content} container spacing={3}>
                    {actualites.length === 0 ?
                        <Fragment>
                            <Grid container direction={'column'} spacing={4} display={'flex'} alignItems={'center'}>
                                <Grid item>
                                    <Typography variant={'h4'} color={'primary'}>
                                        Aucun résultats correspondants à la recherche...
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Button color={'primary'} variant={'contained'} onClick={() => history.go(0)}>
                                        Voir toutes les actualités
                                    </Button>
                                </Grid>
                            </Grid>
                        </Fragment>
                        :
                        <Timeline position="alternate">

                            {actualites.sort((a, b) => (a.idNews > b.idNews) ? -1 : ((b.idNews > a.idNews) ? 1 : 0)).map(actualite =>
                                <Fragment>
                                    <TimelineItem>
                                        <TimelineOppositeContent className={classes.TLOppositeContent}>
                                            <Typography variant={'h4'} color={'primary'}
                                                        style={{marginLeft: '10%', marginRight: '10%'}}>
                                                {formatDate(actualite.date)}
                                            </Typography>
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineConnector className={classes.TLSep}/>
                                            <TimelineDot/>
                                            <TimelineConnector className={classes.TLSep}/>
                                        </TimelineSeparator>
                                        <TimelineContent className={classes.TLContent}>
                                            <Card className={classes.card}
                                                  onClick={() => history.push('/actus/' + actualite.idNews)}>
                                                <CardContent className={classes.cardContent}>
                                                    {admin === true ?
                                                        <Grid container direction={'row'}
                                                              className={classes.adminButtonsGrid} spacing={2}>
                                                            <Grid item>
                                                                <Button className={classes.adminButtons}
                                                                        variant={"contained"} color={'primary'}
                                                                        onClick={(event) => {
                                                                            handleOpenModal2();
                                                                            handleChangeModalIndex2(actualite);
                                                                            event.stopPropagation();
                                                                        }}>
                                                                    Editer
                                                                </Button>
                                                            </Grid>
                                                            <Grid item>
                                                                <Button className={classes.adminButtons}
                                                                        variant={"contained"} color={'primary'}
                                                                        onClick={(event) => {
                                                                            handleOpenModal();
                                                                            handleChangeModalIndex(actualite);
                                                                            event.stopPropagation();
                                                                        }}>
                                                                    Supprimer
                                                                </Button>
                                                            </Grid>
                                                        </Grid> : ''}
                                                    {actualite.imgFile === '' ? '' : <img src={actualite.imgFile} className={classes.cardImg}/>}

                                                    <Typography className={classes.titleText}>
                                                        {actualite.titleFR}
                                                    </Typography>
                                                    <Grid item container direction={'row'} spacing={1}>
                                                        <Grid item>
                                                            <Typography className={classes.contentText}>
                                                                par
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography className={classes.authorText}>
                                                                {actualite.author}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Typography className={classes.contentText}>
                                                        {actualite.contentFR}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions className={classes.cardActions}>
                                                    {(actualite.typeFR === '' || actualite.typeFR === null) ? '' : (
                                                        <Button>
                                                            <CategoryIcon type={actualite.typeFR}/>
                                                            <Typography
                                                                className={classes.contentText}>{actualite.typeFR}</Typography>
                                                        </Button>)
                                                    }
                                                    {(actualite.nbCommentsFR === '' || actualite.nbCommentsFR === null) ? '' : (
                                                        <Button>
                                                            <CommentOutlinedIcon className={classes.typeIcon}/>
                                                            <Typography
                                                                className={classes.contentText}>{actualite.nbCommentsFR}</Typography>
                                                        </Button>)
                                                    }
                                                </CardActions>
                                            </Card>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Fragment>
                            )}
                        </Timeline>}
                    <Modal open={openModal}
                           onClose={handleCloseModal}>
                        <Grid container direction={'column'} className={classes.modal} spacing={4}
                              justifyContent={'center'} alignItems={'center'}>
                            <Grid item>
                                <Typography variant={'h5'} align={'center'}>Êtes-vous sûr de vouloir supprimer cette
                                    actualité?</Typography>
                            </Grid>
                            <Grid item container justifyContent={'center'} alignItems={'center'}>
                                <Card className={classes.smallCard}>
                                    <CardContent className={classes.cardContent}>
                                        <img src={modalIndex.imgFile} className={classes.smallCardImg}/>

                                        <Typography className={classes.smallTitleText}>
                                            {modalIndex.titleFR}
                                        </Typography>
                                        <Grid item container direction={'row'} spacing={1}>
                                            <Grid item>
                                                <Typography className={classes.contentText}>
                                                    par
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography className={classes.authorText}>
                                                    {modalIndex.author}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Typography className={classes.contentText}>
                                            {modalIndex.contentFR}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item container direction={'row'} justifyContent={'space-around'}>
                                <Grid item>
                                    <Button variant={'contained'} className={classes.modalValidateButton}
                                            startIcon={<CheckIcon/>}
                                            onClick={() => handleDelete(modalIndex)}>Oui</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant={'contained'} className={classes.modalCancelButton}
                                            startIcon={<CloseIcon/>} onClick={() => handleCloseModal()}>Non</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Modal>
                    <Modal open={openModal2}
                           onClose={handleCloseModal2}
                    >
                        <div className={classes.modalEdit}>
                            <div  className={classes.modalHeader}>
                                <Typography variant={'h5'} align={'center'}>Edition de l'actualité</Typography>
                                <Typography className={classes.miniText} >Attention : si tu upload une image et que tu rentres une valeur pour le champ "Image Existante", seule l'image uploadée sera prise en compte!</Typography>
                                <Typography className={classes.miniText} >Si tu changes le contenu d'un champ en une valeur vide, celle-ci ne sera pas prise en compte</Typography>
                            </div>
                            <div className={classes.modalScrollable}>
                                <Grid container direction={'column'} spacing={4}>
                                    <Grid item>
                                        <form onSubmit={handleEdit} id={'editNews'}>
                                            <Grid container direction={'column'} spacing={2}>
                                                <Grid item>
                                                    <Typography className={classes.contentText}>Titre
                                                        Anglais</Typography>
                                                    <TextField fullWidth multiline variant={'outlined'}
                                                               margin={'normal'} defaultValue={modalIndex2.title}
                                                               InputProps={{classes: {input: classes.textField}}}/>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className={classes.contentText}>Titre
                                                        Français</Typography>
                                                    <TextField fullWidth multiline variant={'outlined'}
                                                               margin={'normal'} defaultValue={modalIndex2.titleFR}
                                                               InputProps={{classes: {input: classes.textField}}}/>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className={classes.contentText}>Contenu
                                                        Anglais</Typography>
                                                    <TextField fullWidth multiline variant={'outlined'}
                                                               margin={'normal'} defaultValue={modalIndex2.content}
                                                               InputProps={{classes: {input: classes.textField}}}/>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className={classes.contentText}>Contenu
                                                        Français</Typography>
                                                    <TextField fullWidth multiline variant={'outlined'}
                                                               margin={'normal'} defaultValue={modalIndex2.contentFR}
                                                               InputProps={{classes: {input: classes.textField}}}/>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className={classes.contentText}>Auteur</Typography>
                                                    <TextField fullWidth multiline variant={'outlined'}
                                                               margin={'normal'} defaultValue={modalIndex2.author}
                                                               InputProps={{classes: {input: classes.textField}}}/>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className={classes.contentText}>Datepicker</Typography>
                                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                        <DatePicker
                                                            value={datePickerValue}
                                                            onChange={(newValue) => {
                                                                setDatePickerValue(newValue);
                                                            }}
                                                            renderInput={(params) => <TextField {...params} />}
                                                        />
                                                    </LocalizationProvider>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className={classes.contentText}>Type
                                                        Anglais</Typography>
                                                    <TextField fullWidth multiline variant={'outlined'}
                                                               margin={'normal'} defaultValue={modalIndex2.type}
                                                               InputProps={{classes: {input: classes.textField}}}/>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className={classes.contentText}>Type
                                                        Français</Typography>
                                                    <TextField fullWidth multiline variant={'outlined'}
                                                               margin={'normal'} defaultValue={modalIndex2.typeFR}
                                                               InputProps={{classes: {input: classes.textField}}}/>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className={classes.contentText}>Image</Typography>
                                                    <TextField fullWidth multiline variant={'outlined'}
                                                               margin={'normal'} defaultValue={modalIndex2.img}
                                                               InputProps={{classes: {input: classes.textField}}}/>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className={classes.contentText}>Uploader une image</Typography>
                                                    <input
                                                        type="file"
                                                    />
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className={classes.modalButtons}>
                                <Grid container direction={'row'} justifyContent={'space-around'}>
                                    <Grid item>
                                        <Button variant={'contained'} className={classes.modalSmallValidateButton}
                                                startIcon={<CheckIcon/>} type={'submit'} form={'editNews'}>Valider les changements</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant={'contained'} className={classes.modalSmallCancelButton}
                                                startIcon={<CloseIcon/>}
                                                onClick={() => handleCloseModal2()}>Annuler</Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Modal>
                    <Modal open={openModal3}
                           onClose={handleCloseModal3}
                    >
                        <div className={classes.modalEdit}>
                            <div  className={classes.modalHeader}>
                                <Typography variant={'h5'} align={'center'}>Ajouter une actualité</Typography>
                                <Typography className={classes.miniText} >Attention : si tu upload une image et que tu rentres une valeur pour le champ "Image Existante", seule l'image uploadée sera prise en compte!</Typography>
                            </div>
                            <div className={classes.modalScrollable}>
                                <Grid container direction={'column'} spacing={4}>
                                    <Grid item>
                                        <form onSubmit={handleCreate} id={'createNews'}>
                                            <Grid container direction={'column'} spacing={2}>
                                                <Grid item>
                                                    <Typography className={classes.contentText}>Titre
                                                        Anglais</Typography>
                                                    <TextField fullWidth multiline variant={'outlined'}
                                                               margin={'normal'}
                                                               InputProps={{classes: {input: classes.textField}}}/>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className={classes.contentText}>Titre
                                                        Français</Typography>
                                                    <TextField fullWidth multiline variant={'outlined'}
                                                               margin={'normal'}
                                                               InputProps={{classes: {input: classes.textField}}}/>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className={classes.contentText}>Contenu
                                                        Anglais</Typography>
                                                    <TextField fullWidth multiline variant={'outlined'}
                                                               margin={'normal'}
                                                               InputProps={{classes: {input: classes.textField}}}/>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className={classes.contentText}>Contenu
                                                        Français</Typography>
                                                    <TextField fullWidth multiline variant={'outlined'}
                                                               margin={'normal'}
                                                               InputProps={{classes: {input: classes.textField}}}/>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className={classes.contentText}>Auteur</Typography>
                                                    <TextField fullWidth multiline variant={'outlined'}
                                                               margin={'normal'}
                                                               InputProps={{classes: {input: classes.textField}}}/>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className={classes.contentText}>Datepicker</Typography>
                                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                        <DatePicker
                                                            value={datePickerValue2}
                                                            onChange={(newValue) => {
                                                                setDatePickerValue2(newValue);
                                                            }}
                                                            renderInput={(params) => <TextField {...params} />}
                                                        />
                                                    </LocalizationProvider>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className={classes.contentText}>Type
                                                        Anglais</Typography>
                                                    <TextField fullWidth multiline variant={'outlined'}
                                                               margin={'normal'}
                                                               InputProps={{classes: {input: classes.textField}}}/>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className={classes.contentText}>Type
                                                        Français</Typography>
                                                    <TextField fullWidth multiline variant={'outlined'}
                                                               margin={'normal'}
                                                               InputProps={{classes: {input: classes.textField}}}/>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className={classes.contentText}>Image existante</Typography>
                                                    <TextField fullWidth multiline variant={'outlined'}
                                                               margin={'normal'}
                                                               InputProps={{classes: {input: classes.textField}}}/>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className={classes.contentText}>Uploader une image</Typography>
                                                    <input
                                                        type="file"
                                                    />
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className={classes.modalButtons}>
                                <Grid container direction={'row'} justifyContent={'space-around'}>
                                    <Grid item>
                                        <Button variant={'contained'} className={classes.modalSmallValidateButton}
                                                startIcon={<CheckIcon/>} type={'submit'} form={'createNews'}>Valider</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant={'contained'} className={classes.modalSmallCancelButton}
                                                startIcon={<CloseIcon/>}
                                                onClick={() => handleCloseModal3()}>Annuler</Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Modal>
                </Grid>
            </Box>
        </Fragment>
    );
}

