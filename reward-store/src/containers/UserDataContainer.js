import { connect } from 'react-redux';
import UserData from '../components/UserData';
import { getUserData, addPoints } from '../actions/index';


const mapStateToProps = (state, ownProps) => ({
    userData: state.userData,
    routeId: state.routeId,
    addedPoints: state.addedPoints
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGetUserData: () => dispatch(getUserData()),
    onAddPoints: (points) => dispatch(addPoints(points))
})

  export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserData)
