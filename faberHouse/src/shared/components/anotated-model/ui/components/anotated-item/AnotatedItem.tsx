import classNames from 'classnames'
import style from './styles.module.scss'

interface IProps {
    className?: string,
    index: number,
    title: string,
    description: string,
    isActive?: boolean,
    onClick?: () => void
}

export const AnotatedItem: React.FC<IProps> = (props) => {
    const {description, onClick, index, title, className, isActive} = props

    const mods = {
        [style.active]: isActive,
        [style.item]: !isActive
    }

    return(
        <div onClick={onClick} className={classNames(className, mods)}>
            <h4 className={style.title}>{index}. {title}</h4>
            <p className={style.descr}>{description}</p>
        </div>
    )
}