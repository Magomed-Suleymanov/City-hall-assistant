import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Appeal from './Appeal';
import { addAppeal } from '../../../redux/actions/appeals';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const useStyle = makeStyles(() => ({
  inputModal: {
    width: '280px',
    marginBottom: '15px',
    padding: '12px 10px',
    fontSize: '16px',
    color: 'black',
    border: '1px solid lightgray',
    outline: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  blockWishes: {
    maxWidth: '700px',
    minWidth: '350px',
    height: '160px',
    marginRight: '20px',
    overflowY: 'scroll',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '12px',
    color: 'black',
    borderRadius: '2px',
    boxShadow: '0px 0px 5px inset rgb(205, 205, 205)',
  },
  buttonAppeals: {
    padding: '5px 0',
    width: '100%',
  },
  deleteAppeal: {
    cursor: 'pointer',

    '&:hover': {
      color: 'red',
    },
  },
}));

function Appeals({ id }) {
  const appeals = useSelector((state) => state.appeals.appeals);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const [appeal, setAppeal] = useState('');
  const streetId = id;

  const modalListItems = useSelector(
    (state) => state.application.modalListItems,
  );

  const handleAddAppeal = () => {
    let status = 'Рассмотрение';
    if (appeal.length === 0) return;
    dispatch(addAppeal(appeal, streetId, status));
    setAppeal('');
  };

  const classes = useStyle();

  return (
    <Grid container>
      <Box className={classes.blockWishes}>
        {appeals.map((item) => {
          if (item.streetId === id) {
            return (
              <Appeal
                key={item.id}
                modalListItems={modalListItems}
                item={item}
                user={user}
              />
            );
          }
          return '';
        })}
      </Box>
      <Box>
        <Box>
          <input
            value={appeal}
            className={classes.inputModal}
            placeholder="Введите пожелания или замечания"
            onChange={(e) => setAppeal(e.target.value)}
          />
        </Box>
        <Box>
          {user.token ? (
            <Button
              className={classes.buttonAppeals}
              onClick={handleAddAppeal}
              variant="outlined"
              color="primary"
            >
              Добавить
            </Button>
          ) : (
            <Box title="Авторизуйтесь для добавления пожелания">
              <Button
                disabled={true}
                className={classes.buttonAppeals}
                variant="outlined"
                color="primary"
              >
                Добавить
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Grid>
  );
}

Appeals.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Appeals;
