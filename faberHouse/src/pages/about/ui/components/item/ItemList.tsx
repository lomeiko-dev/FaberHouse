import classNames from 'classnames'
import style from './styles.module.scss'

interface IProps {
    className?: string,
    value: string,
}

export const ItemList: React.FC<IProps> = (props) => {
    const {value, className} = props

    return(
        <div className={classNames(style.item, className)}>
            <span></span>
            <p>{value}</p>
        </div>
    )
}