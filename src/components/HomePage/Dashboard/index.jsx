import React from "react";
import { Box, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

function Dashboard(props) {
    const useStyle = makeStyles({
        box: {
            width: "24vw",
            height: "100vh",
            background: 'white',
            boxShadow: "7px 0px 4px 0px rgba(34, 60, 80, 0.2)",
            zIndex: '100',
        },

        inputBlock: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#299400",
            height: "100px",
        },

        input: {
            width: "90%",
            background: "white",
            borderRadius: "5px",
        },
    });

    const classes = useStyle();

    return (
        <Box className={classes.box}>
            <Box className={classes.inputBlock}>
                <TextField
                    className={classes.input}
                    id="outlined-basic"
                    label="Поиск"
                    variant="outlined"
                />
            </Box>
        </Box>
    );
}

export default Dashboard;