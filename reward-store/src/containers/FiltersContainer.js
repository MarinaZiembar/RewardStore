import { connect } from 'react-redux';
import Filters from '../components/Filters';
import { getCategory, getOrder } from '../actions/index';


const mapStateToProps = (state, ownProps) => ({
  products: state.products
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onGetCategory: (category) => dispatch(getCategory(category)),
    onGetOrder: (order) => dispatch(getOrder(order)),
  })


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Filters)
