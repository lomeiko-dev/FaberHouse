import { IFoundation } from 'entities/project-house/model/types'
import style from './styles.module.scss'
import classNames from 'classnames'

interface IProps {
    className?: string,
    foundations: IFoundation[]
}

export const FoundationList: React.FC<IProps> = (props) => {
    const {foundations, className} = props

    return(
        <div className={classNames(style.list, className)}>
            {foundations.map(item =>
                <div className={style.item}>
                    <img src={item.image} alt="foundation image" />
                    <p>{item.title}</p>
                </div>
            )}
        </div>
    )
}