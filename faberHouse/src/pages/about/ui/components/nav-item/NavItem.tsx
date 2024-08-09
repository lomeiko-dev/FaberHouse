import classNames from 'classnames'
import style from './styles.module.scss'
import { Button } from 'shared/ui/button'

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
            <Button className={style.btn}>Перейти в раздел</Button>
        </div>
    )
}