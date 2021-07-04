export const loadingAppeals = () => {
  return (dispatch) => {
    dispatch({
      type: 'loading/appeals/start',
    });

    fetch(`/appeals`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'loading/appeals/success',
          payload: json,
        });
      });
  };
};

export const addAppeal = (title, text, clientId) => {
  return (dispatch) => {
    dispatch({
      type: 'appeals/add/start',
    });

    fetch('/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        content: text,
        clientId: clientId,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'appeals/add/success',
          payload: json,
        });
      });
  };
};

export const deleteAppeals = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'appeals/delete/start',
    });

    fetch(`/appeals/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'appeals/delete/success',
          payload: id,
        });
      });
  };
};

// export const loadAppeals = () => {
//   return (dispatch) => {
//     dispatch({ type: 'loading/appeals/start' });
//     fetch('/appeals')
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch({
//           type: 'loading/appeals/success',
//           payload: json,
//         });
//         console.log(json);
//       });
//   };
// };
//
// export const LoadAppealsModal = (id) => {
//   return (dispatch) => {
//     dispatch({ type: 'loading/appeals/start' });
//     fetch(`/appeals/${id}`)
//       .then((response) => response.json())
//       .then((json) =>
//         dispatch({
//           type: 'loading/appeals/success',
//           payload: json,
//         }),
//       );
//   };
// };
//
//
// export const AddAppeals = (text, streetId) => {
//   return (dispatch) => {
//     dispatch({
//       type: 'add/text/start',
//     });
//
//     fetch(`/appeals`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         text,
//         streetId
//
//       }),
//     }).then((res) =>
//       res.json().then((json) => {
//         dispatch({
//           type: 'add/text/success',
//           payload: json,
//         });
//       }),
//     );
//   };
// }
