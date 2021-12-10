import React, {Fragment, useEffect, useState} from "react"
import ReCAPTCHA from "react-google-recaptcha";
import {makeStyles} from "@material-ui/core/styles"
import {Avatar, Box, Chip, Divider, FormControl, Grid, TextField, withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useHistory, useParams} from "react-router-dom";
import {DataStore, Predicates, SortDirection} from "@aws-amplify/datastore";
import {News, Comments} from "../models";
import {API, Storage} from "aws-amplify";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import {useForm, Controller} from "react-hook-form";
import {blue} from '@mui/material/colors';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
} from "react-share";
import Button from "@material-ui/core/Button";
import useAuth from "../hooks/useAuth";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import {useMediaQuery} from "react-responsive";

const CustomTextField = withStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderRadius: `10px`,
            },
        }
    },
})(TextField);
const useStyles = makeStyles((theme) => ({
    root:
        {
            flexGrow: 1
        },
    pageContent: {
        backgroundColor: "#f2F2F2",
        paddingTop: "75px",
        minHeight: '100vh',
        display: "flex",
        alignItems: 'center',
        flexDirection: 'column'
    },
    pageContentMobile: {
        backgroundColor: "#f2F2F2",
        paddingTop: "75px",
        minHeight: '100vh',
        display: "flex",
        alignItems: 'center',
        flexDirection: 'column'
    },
    box1: {
        backgroundColor: "#ffffff",
        width: '60vw',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box1Mobile: {
        backgroundColor: "#ffffff",
        width: '90vw',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box1Content: {
        width: '96%',
        marginTop: '3%',
        marginLeft: '2%',
        marginRight: '2%',
        display: "flex",
        justifyContent: 'center',

    },
    box2: {
        backgroundColor: "#ffffff",
        marginTop: '25px',
        width: '60vw',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box2Mobile: {
        backgroundColor: "#ffffff",
        marginTop: '25px',
        width: '90vw',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box2Content: {
        width: '96%',
        marginTop: '2%',
        marginLeft: '2%',
        marginRight: '2%',
        display: "flex",
        justifyContent: 'center',

    },
    box3: {
        backgroundColor: "#ffffff",
        marginTop: '25px',
        width: '60vw',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box3Mobile: {
        backgroundColor: "#ffffff",
        marginTop: '25px',
        width: '90vw',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    box3Content: {
        width: '96%',
        marginTop: '2%',
        marginLeft: '2%',
        marginRight: '2%',
        display: "flex",
        justifyContent: 'center',

    },
    imgNews: {
        marginLeft: '1vw',
        marginRight: '1vw',
        marginTop: '2vh',
        marginBottom: '1vh',
        padding: '3px',
        minHeight: '30vh',
        maxHeight: '60vh',
        maxWidth: '58vw',
        objectFit: 'contain',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '#efefef'
    },
    gridElements: {
        paddingBottom: '20px',
    },
    comments: {
        width: '95%',
        marginBottom: '20px',
        backgroundColor: '#f4f6ff',
        transition: 'all .3s',
        "&:hover": {
            transform: 'scale(1.01)',
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1)',
        },
    },
    commentContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    customDiv: {
        paddingTop: '5px',
        backgroundColor: '#000000',
        width: '35%',
        borderRadius: '15px',
        marginBottom: '5%'
    },
    imgRecentNews: {
        minWidth: '70%',
        maxWidth: '100%',
        maxHeight: '30vh',
        objectFit: 'contain'
    },
    gridRecentNews: {
        transition: 'all .3s',
        "&:hover": {
            transform: 'scale(1.04)',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            cursor: 'pointer',
        },
        borderStyle:'solid',
        borderWidth:'1px',
        borderColor:'#f3f3f3'
    },
    recentNewsTitle: {
        fontFamily: '"Montserrat-Bold"',
        fontSize: 17,
    },
    smallBold: {
        fontFamily: '"Montserrat-Bold"',
        fontSize: 18,
    },
    commentAuthor: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#0077ff',
        fontSize: 18,
    },
    commentDate: {
        fontFamily: 'Montserrat-Medium',
        color: '#afafaf',
        fontSize: 16,
    },
    borderModif: {
        borderRadius: '0px',
    },
    returnButton: {
        width: 'fit-content',
        padding: '1%',
        marginBottom: '20px',
        transition: 'all .2s',
        fontFamily: "Montserrat-Light",
        fontSize: 22,
        borderWidth: '0px',
        borderStyle: 'solid',
        borderRadius: '20px',
        "&:hover": {
            cursor: 'pointer',
            transform: 'scale(1.02)',
            backgroundColor: '#eaeaea',
            borderWidth: '2px',
            color: '#0077ff',
            fontFamily: "Montserrat-Medium",
        }
    },
    button: {
        borderRadius: '15px',
        fontSize: '14px',
    },
    required:{
        fontSize:'12px',
        fontFamily:'Montserrat-Light',
        color:'red'
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

export default function ZoomActu() {

    const actuDefault = {
        id: 0,
        idNews: 0,
        title: '',
        titleFR: '',
        author: '',
        date: '',
        content: '',
        contentFR: '',
        type: '',
        typeFR: '',
        nbComments: '',
        img: '',
        imgFile: '',
    }
    const [actualite, setActualite] = useState(actuDefault);
    const [actualiteRaw, setActualiteRaw] = useState();
    const [actusRecentes, setActusRecentes] = useState([]);
    const [comments, setComments] = useState([]);
    const [captchaVerif, setCaptchaVerif] = useState(false);
    const {handleSubmit, control, formState:{errors}} = useForm();
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
    async function callApi(token) {
        const data = {
            body: {
                captcha: token
            },
        }
        const resp = await API.post('captchaapi', '/captcha', data);
            if (resp.hasOwnProperty('success')) {
                if (resp.success === true) {
                    setCaptchaVerif(true);
                }
            }
    }

    React.useEffect(() => {
        const err = fetchNews(id.id);
        fetchRecentNews();
    }, []);
    /*const handleDelete = (comment) =>{
        deleteComment(comment)
    }

    async function deleteComment(comment){
        const todelete = await DataStore.query(Comments, comment.id);
        DataStore.delete(todelete).then(window.location.reload());
    }*/

    async function addComment(author, content) {
        let today = new Date();
        const date = today.getFullYear() + '-' +
            String(today.getMonth() + 1).padStart(2, '0') + '-' +
            String(today.getDate()).padStart(2, '0') + 'T' +
            String(today.getHours()).padStart(2, '0') + ':' +
            String(today.getMinutes()).padStart(2, '0') + 'Z';
        await DataStore.save(
            new Comments({
                idNews: actualite.id,
                author: author,
                content: content,
                language: "FR",
                date: date,
            })
        )

        await DataStore.save(
            News.copyOf(actualiteRaw, updated => {
                updated.nbCommentsFR = actualiteRaw.nbCommentsFR + 1;
            })
        ).then(window.location.reload())
    }

    async function fetchRecentNews() {
        let news = await DataStore.query(News, Predicates.ALL, {
            sort: s => s.idNews(SortDirection.DESCENDING),
            limit: 4
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
        setActusRecentes(actus);
    }

    async function fetchNews(id) {
        let news = await DataStore.query(News, c => c.idNews("eq", parseInt(id)));
        if (news.length <= 0 || (id.match(/^[0-9]+$/)) === null) {
            updateError(true)
            return false;
        }
        setActualiteRaw(news[0]);
        let newsItem = news[0];
        let commentsFetch = (await DataStore.query(Comments, c => c.idNews("eq", newsItem.id).language('eq','FR')));

        let a = {
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
            nbComments: commentsFetch.length,
            img: newsItem.img,
            imgFile: '',
        };
        if (a.img !== '' && a.img !== null) {
            const image = await Storage.get(a.img);
            a.imgFile = image;
        } else {
            a.imgFile = null;
        }
        setActualite(a);

        let comms = [];
        await Promise.all(commentsFetch.map(async comment => {
            let comm = {
                id: comment.id,
                idNews: comment.idNews,
                language: comment.language,
                author: comment.author,
                date: comment.date,
                content: comment.content,
            };
            comms.push(comm);
        }))
        setComments(comms);
        return true;
    }

    const history = useHistory();
    const id = useParams()
    const classes = useStyles()
    const submitForm = (values) => {
        addComment(values.firstName, values.comment);
    }
    const handleCaptcha = (value) => {
        callApi(value);
    }
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
    const formatDate = (date) => {
        if (date === null || date === '' || typeof date === 'undefined') {
            return ''
        }
        const month = mois[parseInt(date.substring(5, 7)) - 1]
        return date.substring(8, 10) + ' ' + month + ' ' + date.substring(0, 4);
    };
    const formatHour = (date) => {
        return date.substring(11, 13) + 'h' + date.substring(14, 16);
    };

    const [error, setError] = React.useState(false);
    const updateError = (data) => {
        setError(data);
    }
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
            {error ?
                <div><h1>404: page not found</h1><h1>404: page not found</h1><h1>404: page not found</h1><h1>404: page
                    not found</h1><h1>404: page not found</h1><h1>404: page not found</h1><h1>404: page not found</h1>
                </div> :
                <Fragment>
                {isTabletOrMobile ?
                    <Fragment>
                        <Box className={classes.pageContentMobile}>
                            <Box className={classes.box1Mobile}>
                                <Grid container item direction={'column'} className={classes.box1Content}>
                                    <Grid item container direction={'row'} className={classes.returnButton} spacing={1}
                                          alignItems={'center'} onClick={() => history.push('/actus/')}>
                                        <Grid item>
                                            <ArrowBackIcon style={{display: "block"}}/>
                                        </Grid>
                                        <Grid item>
                                            Retour aux actualités
                                        </Grid>
                                    </Grid>
                                    <Grid item className={classes.gridElements}>
                                        <Typography className={classes.h3Mobile}>{actualite.titleFR}</Typography>
                                    </Grid>
                                    <Grid item container direction={'row'} spacing={1} className={classes.gridElements}>
                                        <Grid item>
                                            <Chip
                                                color={'secondary'}
                                                avatar={<Avatar>{actualite.author.charAt(0)}</Avatar>}
                                                label={actualite.author}
                                                clickable
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Chip
                                                color={'primary'}
                                                avatar={<Avatar color={'primary'}>
                                                    <CategoryIcon type={actualite.typeFR}/>
                                                </Avatar>}
                                                label={actualite.typeFR}
                                                clickable
                                            />
                                        </Grid>
                                    </Grid>
                                    {actualite.imgFile === '' ? '' :
                                    <Grid item className={classes.gridElements}>
                                        <img className={classes.imgNews} src={actualite.imgFile}/>
                                    </Grid>}
                                    <Grid item container direction={'row'} spacing={1} className={classes.gridElements}>
                                        <Grid item>
                                            <Typography className={classes.body1Mobile}>
                                                Publiée par
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.smallBold}>
                                                {actualite.author}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.body1Mobile}>
                                                le
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.smallBold}>
                                                {formatDate(actualite.date)}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item className={classes.gridElements}>
                                        <Divider/>
                                    </Grid>
                                    <Grid item className={classes.gridElements}>
                                        <Typography className={classes.body1Mobile}>{actualite.contentFR}</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box className={classes.box3Mobile}>
                                <Grid container item direction={'column'} className={classes.box3Content}>
                                    <Grid item className={classes.gridElements}>
                                        <Typography variant={'h5'} align={'center'}>
                                            Actualités récentes
                                        </Typography>
                                    </Grid>
                                    <Grid item className={classes.gridElements}>
                                        <Divider/>
                                    </Grid>
                                    <Grid container item direction={'row'} className={classes.gridElements} spacing={4}>
                                        {actusRecentes.slice(0,2).map(actu =>
                                            <Grid container item direction={'column'} xs={6}
                                                  className={classes.gridRecentNews} onClick={() => {
                                                history.push('/actus/' + actu.idNews);
                                                history.go(0);
                                            }}>
                                                <Grid item container justifyContent={'center'}>
                                                    <img className={classes.imgRecentNews} src={actu.imgFile}/>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className={classes.recentNewsTitle} align={'center'}>
                                                        {actu.titleFR}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        )}
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box className={classes.box2Mobile}>
                                <Grid container item direction={'column'} className={classes.box2Content}>
                                    <Grid item container justifyContent={'space-between'} direction={'row'}
                                          alignItems={'flex-start'} className={classes.gridElements}>
                                        <Grid item>
                                            <Typography variant={'h5'}>
                                                {'Commentaires (' + actualite.nbComments + ')'}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item className={classes.gridElements}>
                                        <Divider/>
                                    </Grid>
                                    <Grid item className={classes.gridElements}>
                                        {actualite.nbComments === 0 ?
                                            <Typography variant={'body1'}>
                                                Aucun commentaire pour le moment
                                            </Typography>
                                            :
                                            <Grid container direction={'column'}>
                                                {comments.map(comment =>
                                                    <Grid>
                                                        <Grid className={classes.commentContainer}>
                                                            <Grid item container direction={'column'}
                                                                  className={classes.comments}
                                                                  spacing={1} /*onClick={()=>handleDelete(comment)}*/>
                                                                <Grid item>
                                                                    <Typography className={classes.commentAuthor}>
                                                                        {comment.author}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item>
                                                                    <Typography>
                                                                        {comment.content}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item>
                                                                    <Typography className={classes.commentDate}>
                                                                        Posté
                                                                        le {formatDate(comment.date)} à {formatHour(comment.date)}
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item>
                                                            <Divider/>
                                                        </Grid>
                                                    </Grid>
                                                )}
                                            </Grid>
                                        }
                                        <Grid container direction={'column'}>
                                            <Grid item className={classes.gridElements}>
                                                <Typography className={classes.smallBold}>
                                                    Laissez un commentaire :
                                                </Typography>
                                            </Grid>
                                            <Grid item className={classes.gridElements}>
                                                <form onSubmit={handleSubmit(submitForm)}>
                                                    <Grid container direction={'column'}>
                                                        <Grid item className={classes.gridElements}>
                                                            <Controller
                                                                control={control}
                                                                name="firstName"
                                                                rules={{required: true}}
                                                                render={({
                                                                             field: {onChange, value, ref}
                                                                         }) => (
                                                                    <TextField fullWidth variant='outlined'
                                                                               label={'Votre nom'}
                                                                               id="firstName"
                                                                               inputRef={ref}
                                                                               onChange={onChange} value={value} error={!!errors.firstName}/>
                                                                )}/>
                                                            {errors.firstName && <span className={classes.required}>Champ requis *</span>}
                                                        </Grid>
                                                        <Grid item className={classes.gridElements}>
                                                            <Controller
                                                                control={control}
                                                                name="comment"
                                                                rules={{required: true}}
                                                                render={({
                                                                             field: {onChange, value, ref}
                                                                         }) => (
                                                                    <TextField fullWidth variant='outlined'
                                                                               label={'Votre commentaire'}
                                                                               id="comment"
                                                                               inputRef={ref}
                                                                               onChange={onChange} value={value} error={!!errors.comment}/>
                                                                )}/>
                                                            {errors.comment && <span className={classes.required}>Champ requis *</span>}
                                                        </Grid>
                                                        <Grid item className={classes.gridElements}>
                                                            <ReCAPTCHA
                                                                sitekey="6LekmF4dAAAAAI5KDwNpa4MibUpuJ4BZMCXDuRbb"
                                                                onChange={handleCaptcha}
                                                            />
                                                        </Grid>
                                                        <Grid item>
                                                            <Button disabled={!captchaVerif} type={'submit'}
                                                                    color={'primary'} variant={'contained'}
                                                                    className={classes.button}>
                                                                Envoyer votre commentaire
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </form>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Fragment>
                    :
                        <Fragment>
                            <Box className={classes.pageContent}>
                                <Box className={classes.box1}>
                                    <Grid container item direction={'column'} className={classes.box1Content}>
                                        <Grid item container direction={'row'} className={classes.returnButton} spacing={1}
                                              alignItems={'center'} onClick={() => history.push('/actus/')}>
                                            <Grid item>
                                                <ArrowBackIcon style={{display: "block"}}/>
                                            </Grid>
                                            <Grid item>
                                                Retour aux actualités
                                            </Grid>
                                        </Grid>
                                        <Grid item className={classes.gridElements}>
                                            <Typography variant={'h3'}>{actualite.titleFR}</Typography>
                                        </Grid>
                                        <Grid item container direction={'row'} spacing={1} className={classes.gridElements}>
                                            <Grid item>
                                                <Chip
                                                    color={'secondary'}
                                                    avatar={<Avatar>{actualite.author.charAt(0)}</Avatar>}
                                                    label={actualite.author}
                                                    clickable
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Chip
                                                    color={'primary'}
                                                    avatar={<Avatar color={'primary'}>
                                                        <CategoryIcon type={actualite.typeFR}/>
                                                    </Avatar>}
                                                    label={actualite.typeFR}
                                                    clickable
                                                />
                                            </Grid>
                                        </Grid>
                                        {actualite.imgFile === '' ? '' :
                                            <Grid item className={classes.gridElements}>
                                                <img className={classes.imgNews} src={actualite.imgFile}/>
                                            </Grid>
                                        }

                                        <Grid item container direction={'row'} spacing={1} className={classes.gridElements}>
                                            <Grid item>
                                                <Typography variant={'body1'}>
                                                    Publiée par
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography className={classes.smallBold}>
                                                    {actualite.author}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant={'body1'}>
                                                    le
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography className={classes.smallBold}>
                                                    {formatDate(actualite.date)}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item className={classes.gridElements}>
                                            <Divider/>
                                        </Grid>
                                        <Grid item className={classes.gridElements}>
                                            <Typography variant={'body1'}>{actualite.contentFR}</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box className={classes.box3}>
                                    <Grid container item direction={'column'} className={classes.box3Content}>
                                        <Grid item className={classes.gridElements}>
                                            <Typography variant={'h5'}>
                                                Actualités récentes
                                            </Typography>
                                        </Grid>
                                        <Grid item className={classes.gridElements}>
                                            <Divider/>
                                        </Grid>
                                        <Grid container item direction={'row'} className={classes.gridElements} spacing={4}>
                                            {actusRecentes.map(actu =>
                                                <Grid container item direction={'column'} xs={3}
                                                      className={classes.gridRecentNews} onClick={() => {
                                                    history.push('/actus/' + actu.idNews);
                                                    history.go(0);
                                                }}>
                                                    <Grid item>
                                                        <img className={classes.imgRecentNews} src={actu.imgFile}/>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography className={classes.recentNewsTitle}>
                                                            {actu.titleFR}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            )}
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box className={classes.box2}>
                                    <Grid container item direction={'column'} className={classes.box2Content}>
                                        <Grid item container justifyContent={'space-between'} direction={'row'}
                                              alignItems={'flex-start'} className={classes.gridElements}>
                                            <Grid item>
                                                <Typography variant={'h5'}>
                                                    {'Commentaires (' + actualite.nbComments + ')'}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item className={classes.gridElements}>
                                            <Divider/>
                                        </Grid>
                                        <Grid item className={classes.gridElements}>
                                            {actualite.nbComments === 0 ?
                                                <Typography variant={'body1'}>
                                                    Aucun commentaire pour le moment
                                                </Typography>
                                                :
                                                <Grid container direction={'column'}>
                                                    {comments.map(comment =>
                                                        <Grid>
                                                            <Grid className={classes.commentContainer}>
                                                                <Grid item container direction={'column'}
                                                                      className={classes.comments}
                                                                      spacing={1} /*onClick={()=>handleDelete(comment)}*/>
                                                                    <Grid item>
                                                                        <Typography className={classes.commentAuthor}>
                                                                            {comment.author}
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item>
                                                                        <Typography>
                                                                            {comment.content}
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item>
                                                                        <Typography className={classes.commentDate}>
                                                                            Posté
                                                                            le {formatDate(comment.date)} à {formatHour(comment.date)}
                                                                        </Typography>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid item>
                                                                <Divider/>
                                                            </Grid>
                                                        </Grid>
                                                    )}
                                                </Grid>
                                            }
                                            <Grid container direction={'column'}>
                                                <Grid item className={classes.gridElements}>
                                                    <Typography className={classes.smallBold}>
                                                        Laissez un commentaire :
                                                    </Typography>
                                                </Grid>
                                                <Grid item className={classes.gridElements}>
                                                    <form onSubmit={handleSubmit(submitForm)}>
                                                        <Grid container direction={'column'}>
                                                            <Grid item className={classes.gridElements}>
                                                                <Controller
                                                                    control={control}
                                                                    name="firstName"
                                                                    rules={{required: true}}
                                                                    render={({
                                                                                 field: {onChange, value, ref}
                                                                             }) => (
                                                                        <TextField fullWidth variant='outlined'
                                                                                   label={'Votre nom'}
                                                                                   id="firstName"
                                                                                   inputRef={ref}
                                                                                   onChange={onChange} value={value} error={!!errors.firstName}/>
                                                                    )}/>
                                                                {errors.firstName && <span className={classes.required}>Champ requis *</span>}
                                                            </Grid>
                                                            <Grid item className={classes.gridElements}>
                                                                <Controller
                                                                    control={control}
                                                                    name="comment"
                                                                    rules={{required: true}}
                                                                    render={({
                                                                                 field: {onChange, value, ref}
                                                                             }) => (
                                                                        <TextField fullWidth variant='outlined'
                                                                                   label={'Votre commentaire'}
                                                                                   id="comment"
                                                                                   inputRef={ref}
                                                                                   onChange={onChange} value={value} error={!!errors.comment}/>
                                                                    )}/>
                                                                {errors.comment && <span className={classes.required}>Champ requis *</span>}
                                                            </Grid>
                                                            <Grid item className={classes.gridElements}>
                                                                <ReCAPTCHA
                                                                    sitekey="6LekmF4dAAAAAI5KDwNpa4MibUpuJ4BZMCXDuRbb"
                                                                    onChange={handleCaptcha}
                                                                />
                                                            </Grid>
                                                            <Grid item>
                                                                <Button disabled={!captchaVerif} type={'submit'}
                                                                        color={'primary'} variant={'contained'}
                                                                        className={classes.button}>
                                                                    Envoyer votre commentaire
                                                                </Button>
                                                            </Grid>
                                                        </Grid>
                                                    </form>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Fragment>
                }
                </Fragment>
            }
        </Fragment>
    );
}
