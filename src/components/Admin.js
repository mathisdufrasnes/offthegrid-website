import React, {Fragment, useEffect} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {
    withAuthenticator,
    AmplifySignOut,
    AmplifyAuthenticator,
    AmplifyAuthContainer,
    AmplifySignIn
} from '@aws-amplify/ui-react';
import useAuth from "../hooks/useAuth";
import {Box, Grid, Typography} from "@material-ui/core";
import {setLang} from "../reducers/languageSlice";
import Button from "@material-ui/core/Button";
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root:
        {
            flexGrow: 1
        },
    box1: {
        padding: '75px',
    },
    box2: {
        padding: '5%',
        height: '100vh',
    },
    signOut: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
    }
}));

export default function Admin() {
    const classes = useStyles();
    const history = useNavigate();
    const {currentUser} = useAuth()
    useEffect(() => {
        if (currentUser !== null) {
            if (currentUser.hasOwnProperty('username')) {
            }
        }
    })
    return (
        <Fragment>
            <Box className={classes.box1}>
                <AmplifyAuthContainer>
                    <AmplifyAuthenticator>
                        <AmplifySignIn
                            headerText="Admin Off The Grid"
                            slot="sign-in"
                            hideSignUp
                        ></AmplifySignIn>
                        <Box className={classes.box2} alignItems={'center'} justifyContent={'center'}>
                            <Typography variant={'h5'} align={'center'}>
                                Vous êtes connecté au compte Admin.
                            </Typography>
                            <Button onClick={() => history('/actus')} variant={'contained'} color={'primary'}>Voir les actualités</Button>
                            <AmplifySignOut className={classes.signOut}/>
                        </Box>
                    </AmplifyAuthenticator>
                </AmplifyAuthContainer>
            </Box>
        </Fragment>
    );
}

