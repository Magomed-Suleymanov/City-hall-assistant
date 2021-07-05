import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

import Appeal from './Appeal';
import { addAppeal } from '../../../redux/actions/appeals';

const useStyle = makeStyles(() => ({
  inputModal: {
    width: '97.5%',
    padding: '12px 5px',
    fontSize: '16px',
    color: 'black',
    border: '1px solid lightgray',
    outline: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  blockWishes: {
    height: '170px',
    overflowY: 'scroll',
    padding: '15px 10px',
    fontSize: '16px',
    marginBottom: '12px',
    color: 'black',
    background: '#fdfcf9',
    borderRadius: '2px',
    boxShadow: '0px 0px 5px inset rgb(193, 193, 193)',
  },
  buttonAppeals: {
    width: '100%',
  },
  deleteAppeal: {
    cursor: 'pointer',

    '&:hover': {
      color: 'red',
    },
  },
}));

function Appeals() {
  const appeals = useSelector((state) => state.appeals.appeals);
  const user = useSelector((state) => state.authReducer.user);
  const modalListItems = useSelector(
    (state) => state.application.modalListItems,
  );
  const dispatch = useDispatch();

  // const modalListItems = useSelector(
  //   (state) => state.application.modalListItems,
  // );
  // const appeals = useSelector((state) => state.appeals.appeals);

  const classes = useStyle();

  const [appeal, setAppeal] = useState('');

  const [streetId, setStreetId] = useState('');
  const handleAddAppeal = () => {
    dispatch(addAppeal(appeal, streetId));
    setAppeal('');
  };

  return (
    <Box width="500px" padding="0px 2px 2px 2px">
      <Box
        padding="4px 0 10px 0px"
        fontSize="18px"
        color="black"
        textAlign="center"
      >
        Пожелания или замечания:
      </Box>
      <Box className={classes.blockWishes}>
        {appeals.map((item) => {
          if (item.id === modalListItems.id) {
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
        <input
          value={appeal}
          className={classes.inputModal}
          placeholder="Введите пожелания или замечания"
          onChange={(e) => setAppeal(e.target.value)}
        />
      </Box>
      <Box padding="12px 0px 0px 0px ">
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
              onClick={handleAddAppeal}
              variant="outlined"
              color="primary"
            >
              Добавить
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Appeals;
