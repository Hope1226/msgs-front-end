const GET_DATA = 'get_data';
const initialState = [];

const populateState = (payload) => ({
  type: GET_DATA,
  payload,
});

export const getData = () => (dispatch) => fetch('http://127.0.0.1:3000/messages')
  .then((response) => response.json())
  .then((data) => dispatch(populateState(data)));

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
