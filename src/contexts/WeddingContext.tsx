import React, { createContext, useContext, useState } from 'react'

import { ThemeBase } from '$types/theme'

interface ContextValues {
  state: {
    wedding: ThemeBase | null
  }
  actions: {
    setWedding: (wedding: ThemeBase) => void
  }
}

const Context = createContext<ContextValues>({} as ContextValues)

export function WeddingContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [wedding, setWedding] = useState<ThemeBase | null>(null)

  const values = {
    state: { wedding },
    actions: { setWedding },
  }

  return <Context.Provider value={values}>{children}</Context.Provider>
}

export function useWeddingContext() {
  return useContext(Context)
}
