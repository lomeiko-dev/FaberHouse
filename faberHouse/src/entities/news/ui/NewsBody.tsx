import classNames from 'classnames';
import { enumNewsBody, INewsBody } from '../model/types';
import { ItemTitle } from './components/item-title/ItemTitle';
import style from './styles.module.scss'

interface IProps extends INewsBody {
    className?: string
}

export const NewsBody: React.FC<IProps> = (props) => {
    const {content, type, className, subtitle, title, signature} = props

    const generateBody = () => {
        switch(type){
            case enumNewsBody.TEXT:
                return(
                    <p className={style.text}>{content}</p>
                )
            case enumNewsBody.IMAGE:
                return(
                    <div className={style.image}>
                        <img src={content} alt="illustration" />
                        <p>{signature}</p>
                    </div>
                )
            case enumNewsBody.IMAGES:
                const images: string[] = content
                return(
                    <div className={style.image_list}>
                        {images.map(img => <img src={img} alt='illustration'/>)}
                    </div>
                )
            case enumNewsBody.LIST:
                const contents: string[] = content
                return(
                    <div className={style.p_list}>
                        {contents.map(item => <ItemTitle title={item}/>)}
                    </div>
                )
        }
    }

    return(
        <div className={classNames(style.body, className)}>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            {generateBody()}
        </div>
    )
}