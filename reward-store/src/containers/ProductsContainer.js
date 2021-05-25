import { connect } from 'react-redux';
import ProductsList from '../components/ProductsList';
import { getProducts, getUserHistory, getUserData, redeemProduct, setShowSuccess, setShowFailure } from '../actions/index';


const mapStateToProps = (state, ownProps) => ({
    products: state.products,
    routeId: state.routeId,
    userData: state.userData,
    category: state.category,
    order: state.order,
    showSuccessModal:state.showSuccessModal,
    showFailureModal:state.showFailureModal
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGetProducts: () => dispatch(getProducts()),
    onGetUserHistory: () => dispatch(getUserHistory()),
    onGetUserData: () => dispatch(getUserData()),
    onRedeemProduct: (id) => dispatch(redeemProduct(id)),
    onSetShowSuccess: (bool) => dispatch(setShowSuccess(bool)),
    onSetShowFailure: (bool) => dispatch(setShowFailure(bool)),
  })

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductsList)
