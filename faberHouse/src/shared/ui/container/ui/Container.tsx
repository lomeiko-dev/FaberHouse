import classNames from 'classnames'
import style from './styles.module.scss'

interface IProps {
    children: React.ReactNode
    className?: string
}

export const Container: React.FC<IProps> = (props) => {
    const {children, className} = props
    return (
        <div className={classNames(style.container, className)}>
            {children}
        </div>
    )
}