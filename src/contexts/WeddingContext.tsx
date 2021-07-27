import React, { createContext, useContext, useState } from 'react'

import { ThemeBase } from '$types/theme'

interface ContextValues {
  state: {
    wedding: ThemeBase
  }
  actions: {
    setWedding: (wedding: ThemeBase) => void
  }
}

const Context = createContext<ContextValues>({} as ContextValues)

export function WeddingContextProvider({
  initialValue,
  children,
}: {
  initialValue?: ThemeBase
  children: React.ReactNode
}) {
  const [wedding, setWedding] = useState<ThemeBase>(initialValue as ThemeBase)

  const values = {
    state: { wedding },
    actions: { setWedding },
  }

  return <Context.Provider value={values}>{children}</Context.Provider>
}

export function useWeddingContext() {
  return useContext(Context)
}
