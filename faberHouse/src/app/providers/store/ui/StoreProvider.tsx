import { Provider } from "react-redux"
import { store } from "../model/store"

interface IProps {
    children: React.ReactNode
}

export const StoreProvier: React.FC<IProps> = (props) => {
    const {children} = props
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}