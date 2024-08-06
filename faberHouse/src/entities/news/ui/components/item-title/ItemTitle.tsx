import style from './styles.module.scss'

interface IProps {
    title: string
}

export const ItemTitle: React.FC<IProps> = (props) => {
    const {title} = props

    return(
        <div className={style.item}>
            <span></span>
            <p>{title}</p>
        </div>
    )
}