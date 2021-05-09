import { connect } from 'react-redux';
import ProductsList from '../components/ProductsList';
import { getProducts, getUserHistory } from '../actions/index';


const mapStateToProps = (state, ownProps) => ({
    products: state.products,
    routeId: state.routeId,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGetProducts: () => dispatch(getProducts()),
    onGetUserHistory: () => dispatch(getUserHistory()),
  })

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductsList)
