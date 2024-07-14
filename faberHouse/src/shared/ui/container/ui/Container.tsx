import style from './styles.module.scss'

interface IProps {
    children: React.ReactNode
}

export const Container: React.FC<IProps> = (props) => {
    const {children} = props
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}