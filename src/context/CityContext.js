import { createContext } from "react";

export const CityContext = createContext([
        { value: [51,31], label: 'Kyiv' },
        { value: [46,30], label: 'Odessa' },
        { value: [48,34], label: 'Dnepropetrovsk' }
])
