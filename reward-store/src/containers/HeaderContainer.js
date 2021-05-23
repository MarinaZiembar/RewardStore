import { connect } from 'react-redux';
import Header from '../components/Header';
import { getRouteId, getUserData } from '../actions/index';


const mapStateToProps = (state, ownProps) => ({
  addedPoints: state.addedPoints,
  userData: state.userData,
  redeemProduct: state.redeemProduct,
  products: state.products
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGetRouteId: (id) => dispatch(getRouteId(id)),
    onGetUserData: () => dispatch(getUserData())
  })


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header)
