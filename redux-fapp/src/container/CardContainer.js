import { getCard } from "../actions/action.card";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import User from "../component/User";

const mapDispatchToProps = dispatch => {
  return {
    getCard: () => {
      dispatch(getCard());
    }
  };
};

const mapStateToProps = state => {
  return {
    userData: state
  };
};

const CardContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(User)
);

export default CardContainer;
