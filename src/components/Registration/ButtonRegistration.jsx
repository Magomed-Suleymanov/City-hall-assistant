import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

function ButtonRegistration({ login, password }) {
    const dispatch = useDispatch();
    const useStyles = makeStyles((theme) => ({
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));


    const classes = useStyles();


    return (
        <Box>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Зарегистрироваться
            </Button>
            <NavLink to="/auth/login" variant="body2">
                У вас уже есть аккаунт? Войдите в него
            </NavLink>
        </Box>
    );
}

export default ButtonRegistration;
