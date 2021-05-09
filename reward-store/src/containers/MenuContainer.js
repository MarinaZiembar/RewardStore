import { connect } from 'react-redux';
import Menu from '../components/Menu';
import { getRouteId } from '../actions/index';


const mapDispatchToProps = (dispatch, ownProps) => ({
    onGetRouteId: (id) => dispatch(getRouteId(id)),
  })


export default connect(
    null,
    mapDispatchToProps,
)(Menu)
