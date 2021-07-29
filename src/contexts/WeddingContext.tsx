import React, { createContext, useContext, useState } from 'react'

import { Wedding } from '$types/wedding'

interface ContextValues {
  state: {
    wedding: Wedding
  }
  actions: {
    setWedding: (wedding: Wedding) => void
  }
}

const Context = createContext<ContextValues>({} as ContextValues)

export function WeddingContextProvider({
  initialValue,
  children,
}: {
  initialValue?: Wedding
  children: React.ReactNode
}) {
  const [wedding, setWedding] = useState<Wedding>(initialValue as Wedding)

  const values = {
    state: { wedding },
    actions: { setWedding },
  }

  return <Context.Provider value={values}>{children}</Context.Provider>
}

export function useWeddingContext() {
  return useContext(Context)
}
