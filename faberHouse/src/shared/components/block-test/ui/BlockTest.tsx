import classNames from 'classnames'
import style from './styles.module.scss'
import woman from 'shared/assets/img/woman.png'
import { Button } from 'shared/ui/button'

interface IProps {
    className?: string
}

export const BlockTest: React.FC<IProps> = (props) => {
    const {className} = props

    return(
        <div className={classNames(style.block, className)}>
            <img src={woman} alt='woman'/>
            <div>
                <h2>Пройдите тест</h2>
                <h3>И получите 3% скидку</h3>
                <Button>Пройти тест</Button>
            </div>
        </div>
    )
}