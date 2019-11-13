import * as actionCard from '../actions/action.card'

const reducerCard = (
  state = {
    loading: false,
    userData: null,
    error: null,
    status: null
  },
  action
) => {
  switch (action.type) {
    case actionCard.CARD_REQUESTING:
      return Object.assign({}, state, {
        loading: true,
        status: action.status
      });

    case actionCard.CARD_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        userData: action.userData,
        status: action.status
      });

    case actionCard.CARD_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
        status: action.status
      });

    default:
      return state;
  }
};
export default reducerCard;
