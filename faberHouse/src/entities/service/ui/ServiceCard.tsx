import classNames from 'classnames';
import { IService } from '../model/types';
import style from './styles.module.scss'

interface IProps extends IService {
    className?: string,
    index: number
}

export const ServiceCard: React.FC<IProps> = (props) => {
    const {description, index, title, className} = props

    return(
        <div className={classNames(style.card, className)}>
            <div className={style.index}>{index}</div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}