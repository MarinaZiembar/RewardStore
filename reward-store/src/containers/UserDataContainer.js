import { connect } from 'react-redux';
import UserData from '../components/UserData';
import { getUserData } from '../actions/index';


const mapStateToProps = (state, ownProps) => ({
    userData: state.userData,
    routeId: state.routeId,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGetUserData: () => dispatch(getUserData()),
  })

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserData)