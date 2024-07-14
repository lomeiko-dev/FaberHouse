import style from './styles.module.scss'
import FacebookIcon from 'shared/assets/icons/facebook.svg?react'
import InstagramIcon from 'shared/assets/icons/instagram.svg?react'
import VkIcon from 'shared/assets/icons/vk.svg?react'

export const SocialList = () => {
    return(
        <div className={style.list}>
            <a href="#">
                <InstagramIcon/>
            </a>
            <a href="#">
                <VkIcon/>
            </a>
            <a href="#">
                <FacebookIcon/>
            </a>
        </div>
    )
}