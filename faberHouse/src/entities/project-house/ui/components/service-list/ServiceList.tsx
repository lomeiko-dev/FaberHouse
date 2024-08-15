import classNames from 'classnames'
import style from './styles.module.scss'
import { findServiceById, ServiceItem } from 'shared/lib/selections/services'

interface IProps {
    className?: string
    ids: number[]
}

export const ServiceList: React.FC<IProps> = (props) => {
    const {ids, className} = props

    return(
        <div className={classNames(style.lsit, className)}>
            {ids.map(id => <ServiceItem service={findServiceById(id)}/>)}
        </div>
    )
}