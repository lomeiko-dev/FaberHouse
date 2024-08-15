import classNames from 'classnames'
import { IServiceSelection } from '../model/types'
import style from './styles.module.scss'

interface IProps {
    className?: string
    service?: IServiceSelection
}

export const ServiceItem: React.FC<IProps> = (props) => {
    const {service, className} = props

    return(
        <div className={classNames(style.item, className)}>
            {service?.icon}
            <p>{service?.title}</p>
        </div>
    )
}