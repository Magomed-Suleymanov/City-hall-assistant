import HomePage from '../HomePage';
import { useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import { loadUsers } from '../../redux/actions/users';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <Box className="app">
      <HomePage />
    </Box>
  );
}

export default App;
