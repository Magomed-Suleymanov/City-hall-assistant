import React from 'react';
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import RestaurantIcon from '@material-ui/icons/Restaurant';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Tooltip from "@material-ui/core/Tooltip";

const useStyle = makeStyles({
    placesBlock: {
        width: '100%',
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: "space-around",
        marginTop: '20px',
    },

    place: {
        width: '64px',
        height: '64px',
        display: "flex",
        margin: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #B6B6B6',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: '0.3s',
        color: "orange",

        '&:hover': {
            border: "2px solid #B6B6B6",
            fontSize: 'small',
            transition: '0.3s'
        }
    },

    icon: {
        width: '100%',
        fontSize: "35px",
        transition: '0.3s',
        padding: '10px',
        display: 'inline-block',

        '&:hover': {
            content: 'attr(data-title)',
            fontSize: '31px',
            transition: '0.3s'
        },

    }
})

function Places(props) {
    const classes = useStyle()

    return (
        <Box className={classes.placesBlock} >
            <Tooltip title='Покушать'>
            <Box className={classes.place} title='покушать'>
                <RestaurantIcon  className={classes.icon}/>
            </Box>
            </Tooltip>
            <Tooltip title='АЗС'>
            <Box className={classes.place}>
                <LocalGasStationIcon color={'primary'} className={classes.icon}/>
            </Box>
            </Tooltip>
            <Tooltip title='Аптеки'>
            <Box className={classes.place}>
                <LocalPharmacyIcon style={{ color: "green" }} className={classes.icon}/>
            </Box>
            </Tooltip>
            <Tooltip title='Магазины'>
            <Box className={classes.place}>
                <ShoppingCartIcon className={classes.icon} color={'secondary'}/>
            </Box>
            </Tooltip>
            </Box>
    );
}

export default Places;