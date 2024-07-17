import { IGuarantee } from 'widgets/guarantees/model/types'
import style from './styles.module.scss'

interface IProps {
    guarantee: IGuarantee
}

export const ItemGuarantee: React.FC<IProps> = (props) => {
    const {guarantee} = props

    return(
        <div className={style.item}>
            <h2>{guarantee.title}</h2>
            <p>{guarantee.text}</p>
        </div>
    )
}