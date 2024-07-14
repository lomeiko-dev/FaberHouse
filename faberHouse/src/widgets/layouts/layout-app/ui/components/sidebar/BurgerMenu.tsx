import style from './styles.module.scss'

interface IProps {
    onClick: () => void;
}

export const BurgerMenu: React.FC<IProps> = (props) => {
    const {onClick} = props
    return(
        <button onClick={onClick} className={style.burger}>
            <span className={style.item}></span>
            <span className={style.item}></span>
            <span className={style.item}></span>
        </button>
    )
}