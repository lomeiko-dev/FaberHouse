import classNames from 'classnames'
import style from './styles.module.scss'

interface IProps {
    isCenter?: boolean
}

export const Laoder: React.FC<IProps> = (props) => {
    const {isCenter} = props
    return(
        <span className={classNames(style.loader, isCenter && style.centered)}></span>
    )
}