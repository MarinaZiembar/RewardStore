import { connect } from 'react-redux';
import ProductsList from '../components/ProductsList';
import { getProducts, getUserHistory, getUserData, redeemProduct } from '../actions/index';


const mapStateToProps = (state, ownProps) => ({
    products: state.products,
    routeId: state.routeId,
    userData: state.userData,
    category: state.category,
    order: state.order,
    redeemSuccess:state.redeemProduct,
    redeemError:state.redeemProductError
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGetProducts: () => dispatch(getProducts()),
    onGetUserHistory: () => dispatch(getUserHistory()),
    onGetUserData: () => dispatch(getUserData()),
    onRedeemProduct: (id) => dispatch(redeemProduct(id))
  })

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductsList)
