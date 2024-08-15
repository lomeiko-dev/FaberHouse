import classNames from 'classnames'
import style from './styles.module.scss'

interface IProps {
    className?: string,
    images: string[]
}

export const ImageList: React.FC<IProps> = (props) => {
    const {images, className} = props

    return(
        <div className={classNames(style.list, className)}>
            {images.map(img => 
                <img src={img} alt='image'/>
            )}
        </div>
    )
}