import { LayoutApp } from 'widgets/layouts/layout-app'
import './style/index.css'
import { Routing } from './providers/routing/Routing'

export const App = () => {
    return (
        <LayoutApp>
            <Routing/>
        </LayoutApp>
    )
}