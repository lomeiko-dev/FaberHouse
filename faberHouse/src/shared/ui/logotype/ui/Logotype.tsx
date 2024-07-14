import React from 'react'
import logo from 'shared/assets/img/logo.webp'

interface IProps {
    className?: string
}

export const Logotype:React.FC<IProps> = (props) => {
    const {className} = props
    return(
        <h1 className={className}>
            <img src={logo} alt="site logotype" />
        </h1>
    )
}