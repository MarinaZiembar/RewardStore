import { connect } from 'react-redux';
import Menu from '../components/Menu';
import { getRouteId, getUserData } from '../actions/index';


const mapStateToProps = (state, ownProps) => ({
  addedPoints: state.addedPoints,
  userData: state.userData,
  redeemProduct: state.redeemProduct
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGetRouteId: (id) => dispatch(getRouteId(id)),
    onGetUserData: () => dispatch(getUserData())
  })


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Menu)
