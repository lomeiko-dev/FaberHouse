import classNames from 'classnames';
import { INews } from '../model/types';
import style from './styles.module.scss'
import { Button, enumStyleButton } from 'shared/ui/button';

interface IProps extends Omit<INews, 'body'>{
    className?: string
    onClick: () => void
}

export const NewsItem: React.FC<IProps> = (props) => {
    const {description, onClick, title, className} = props

    return(
        <div className={classNames(style.item, className)}>
            <h4>{title}</h4>
            <p>{description}</p>
            <Button stylePattern={enumStyleButton.BORDER} className={style.btn} onClick={onClick}>Читать далее</Button>
        </div>
    )
}