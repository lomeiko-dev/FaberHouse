import classNames from 'classnames'
import style from './styles.module.scss'

interface IProps {
    className?: string
    title: string,
    link: string,
}

export const NavItem: React.FC<IProps> = (props) => {
    const {link, title, className} = props

    return(
        <div className={classNames(style.item, className)}>
            <p>{title}</p>
            <button>Перейти в раздел</button>
        </div>
    )
}