import Modal from "../Assets/Modal/Modal"
import ListContainer from "../Assets/List/listContainer"
import ModalContainer from "../Assets/Modal/ModalContainer"

const Main = (props) => { 
    return ( 
        <>
           <ListContainer/>
           {props.isOpenModal && <ModalContainer/>}
        </>
    )
}

export default Main