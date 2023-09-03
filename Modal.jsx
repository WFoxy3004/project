import s from "./modal.module.scss"
const Modal = (props) => { 
    return ( 
        <div className={s.container}>
            <div className={s.container_window}>
                <div className={s.container_window_header}>
                    <p className={s.container_window_header_text}>Modal wish</p>
                </div>
                <div  className={s.container_window_body}>
                    <p className={s.container_window_body_text}>Exactly?</p>
                    <div className={s.container_window_body_btns}>
                        <button 
                            onClick={props.cancelWish}
                            className={`${s.container_window_body_btns_item} ${s.btn_cancel}`}
                        >Um... no</button>
                        <button 
                            onClick={props.confirmWish}
                            className={`${s.container_window_body_btns_item} ${s.btn_buy}`}
                        >Yes, add to wish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Modal