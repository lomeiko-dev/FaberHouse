import { IServiceSelection } from "./types";
import WrenchIcon from 'shared/assets/icons/wrench.svg?react'
import WallsIcon from 'shared/assets/icons/walls.svg?react'
import WindowIcon from 'shared/assets/icons/window.svg?react'
import DoorIcon from 'shared/assets/icons/door.svg?react'
import LadderIcon from 'shared/assets/icons/ladder.svg?react'
import OverlapsIcon from 'shared/assets/icons/overlaps.svg?react'
import RoofIcon from 'shared/assets/icons/roof.svg?react'
import FloorIcon from 'shared/assets/icons/floor.svg?react'
import DeliveryIcon from 'shared/assets/icons/delivery.svg?react'

export const serviceSelection: IServiceSelection[] = [
    {
        id: 1,
        title: "Сборка",
        icon: <WrenchIcon/>
    },
    {
        id: 2,
        title: "Стены",
        icon: <WallsIcon/>
    },
    {
        id: 3,
        title: "Окна",
        icon: <WindowIcon/>
    },
    {
        id: 4,
        title: "Двери",
        icon: <DoorIcon/>
    },
    {
        id: 5,
        title: "Лестницы",
        icon: <LadderIcon/>
    },
    {
        id: 6,
        title: "Перекрытия",
        icon: <OverlapsIcon/>
    },
    {
        id: 7,
        title: "Крыши",
        icon: <RoofIcon/>
    },
    {
        id: 8,
        title: "Полы и лаги",
        icon: <FloorIcon/>
    },
    {
        id: 9,
        title: "Доставка",
        icon: <DeliveryIcon/>
    }
]