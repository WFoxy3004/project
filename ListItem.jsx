import s from "./list.module.scss"
const ListItem = (props) => { 
    const handleAdd = () => { 
        props.setWishCandidate(props.id)
    }
    return (
        <li className={s.container_item}>
            <p className={s.container_item_text}>Name: {props.name}</p>
            <p className={s.container_item_price}>Price: {props.price}$</p>
            <button onClick={handleAdd} className={s.container_item_btn}>Add to wish</button>
        </li>
    )
}

export default ListItem