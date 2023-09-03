import { connect } from 'react-redux';
import { cancelWish, confirmWish } from '../../../redux/productsReducer';
import Modal from './Modal';

const mapStateToProps = () => {}

const mapDispatchToProps = { 
    confirmWish,
    cancelWish
}

export default connect (mapStateToProps, mapDispatchToProps) (Modal)