import React, {Fragment, useEffect, useRef} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Box, CircularProgress, Divider, Grid, TextField, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useNavigate, useSearchParams} from "react-router-dom";
import {Controller, useForm} from "react-hook-form";

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
    finalGap: {
        marginBottom: '100px'
    },
    gridElements: {
        paddingBottom: '20px',
    },
    required: {
        fontSize: '12px',
        fontFamily: 'Montserrat-Light',
        color: 'red'
    },
    errorText: {
        fontSize: '24px',
        fontFamily: 'Montserrat-Medium',
        color: 'red',
        marginBottom: '50px',
    },

    validateText: {
        fontSize: '24px',
        fontFamily: 'Montserrat-Medium',
        color: 'green',
        marginBottom: '50px',
    },
}));

export default function PasswordReset() {
    const {handleSubmit, control, formState: {errors}, watch} = useForm();
    const classes = useStyles();
    const history = useNavigate();
    useEffect(() => {
        setToken(searchParams.get("token"));
    });
    const password = useRef({});
    password.current = watch("password", "");
    const [searchParams, setSearchParams] = useSearchParams();

    function resetPassword(password, passwordConfirm) {
        if (searchParams.get("token") != null) {
            setToken(searchParams.get("token"));
        } else {
            setToken("token");
        }
        const body = JSON.stringify({
            password: password,
            password_repeat: passwordConfirm,
            verification_token: token
        })
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: body
        };
        fetch('http://3.97.210.43:5001/reset_pass', requestOptions)
            .then(response => response.json())
            .then(data => {
                checkResponse(data.message);
            })
    }

    const [postResponse, setPostResponse] = React.useState();
    const [error, setError] = React.useState(false);
    const updateError = (data) => {
        setError(data);
    }
    const submitForm = (values) => {
        resetPassword(values.password, values.confirmPassword)
    }

    function checkResponse(value) {
        switch (value) {
            case "Password changed.":
                setRequestError("Password changed");
                break;
            case "Invalid token." :
                setRequestError("Invalid token");
                break;
            case "User not found." :
                setRequestError("User not found");
                break;
            case "Token Error." :
                setRequestError("Token Error");
                break;
            default :
                setRequestError("Erreur while changing password");
                break;
        }
    }

    const [token, setToken] = React.useState();
    const [requestError, setRequestError] = React.useState('');
    return (
        <Fragment>
            <div className={classes.box1}>
                <div className={classes.box2}>
                    {requestError === "Password changed" ?
                        <Grid className={classes.validateText}>
                            {requestError}
                        </Grid>
                        :
                        <Grid className={classes.errorText}>
                            {requestError}
                        </Grid>
                    }
                    <form onSubmit={handleSubmit(submitForm)}>
                        <Grid container direction={'column'}>
                            <Grid item className={classes.gridElements}>
                                <Controller
                                    control={control}
                                    name="password"
                                    rules={{required: true}}
                                    render={({
                                                 field: {onChange, value, ref}
                                             }) => (
                                        <TextField fullWidth variant='outlined'
                                                   label={'Mot de passe'}
                                                   id="password"
                                                   inputRef={ref}
                                                   onChange={onChange} value={value} error={!!errors.password}/>
                                    )}/>
                                {errors.password && <span className={classes.required}>Champ requis *</span>}
                            </Grid>
                            <Grid item className={classes.gridElements}>
                                <Controller
                                    control={control}
                                    name="confirmPassword"
                                    rules={{required: true, validate: value => value === password.current}}
                                    render={({
                                                 field: {onChange, value, ref}
                                             }) => (
                                        <TextField fullWidth variant='outlined'
                                                   label={'Confirmation de mot de passe'}
                                                   id="confirmPassword"
                                                   inputRef={ref}
                                                   onChange={onChange} value={value} error={!!errors.confirmPassword}/>
                                    )}/>
                                {errors.confirmPassword && <span className={classes.required}>Valeur invalide</span>}
                            </Grid>
                            <Grid item>
                                <Button type={'submit'}
                                        color={'primary'} variant={'contained'}
                                        className={classes.button}>
                                    Changer votre mot de passe
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

