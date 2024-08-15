import { serviceSelection } from "../service-selection"

export const findServiceById = (id: number) => {
    return serviceSelection.find(service => service.id === id)
}