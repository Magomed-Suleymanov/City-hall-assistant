import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import ButtonRegistration from './ButtonRegistration';

function GridItem(props) {
  const users = useSelector((state) => state.users.items);
  const [login, setLogin] = useState(users.login);
  const [password, setPassword] = useState(users.password);

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            variant="outlined"
            required
            fullWidth
            id="login"
            label="Login"
            name="login"
            autoComplete="login"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </Grid>
      </Grid>
      <ButtonRegistration login={login} password={password}/>
    </Box>
  );
}

export default GridItem;
