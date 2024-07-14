import style from './styles.module.scss'
import SearchIcon from 'shared/assets/icons/search.svg?react'

export const SearchBox = () => {
    return(
        <div className={style.wrapper}>
            <input type="text" placeholder='Поиск'/>
            <SearchIcon/>
        </div>
    )
}