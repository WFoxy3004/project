import { connect } from 'react-redux';
import { setWishCandidate, confirmWish, cancelWish } from '../../redux/productsReducer';
import Main from './Main';

const mapStateToProps = (state) => ({
    isOpenModal: state.products.isOpenModal
})

const mapDispatchToProps = { 
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)