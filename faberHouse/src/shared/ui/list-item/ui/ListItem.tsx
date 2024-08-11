import classNames from 'classnames'
import style from './styles.module.scss'

interface IProps {
    className?: string
    title: string
}

export const ListItem: React.FC<IProps> = (props) => {
    const {className, title} = props

    return(
        <div className={classNames(style.item, className)}>
            <span></span>
            <p>{title}</p>
        </div>
    )
}