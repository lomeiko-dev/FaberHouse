import style from './styles.module.scss'

interface IProps {
    image: string,
    title: string
    price: number,
    onClick: () => void
}

export const ItemClass: React.FC<IProps> = (props) => {
    const {image, onClick, price, title} = props
    return(
        <div className={style.item}>
            <img src={image} alt="illustration project" />
            <p className={style.title}>{title}</p>
            <p className={style.price}>от {price} ₽</p>
            <button onClick={onClick}>Посмотрет проекты</button>
        </div>
    )
}