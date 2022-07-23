import { createContext } from "react";

export const TabsContext = createContext([
    {
      value: 'Weather every 12 hours',
      length: 10
    },
    {
      value: 'Weather every 6 hours',
      length: 20
    },
    {
      value: 'Weather every 3 hours',
      length: 40
    },
  ])