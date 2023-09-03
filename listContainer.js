import { connect } from 'react-redux';
import { setWishCandidate } from '../../../redux/productsReducer';
import List from './List';
const mapStateToProps = (state)=> ({
    list: state.products.list,
})

const mapDispatchToProps = {
    setWishCandidate
}

export default connect(mapStateToProps, mapDispatchToProps)(List)