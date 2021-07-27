import React, {
  createContext,
  useState,
  useMemo,
  useCallback,
  useContext,
} from 'react'

import Alert from '$shared/Alert'

interface AlertOptions {
  message: string
}

interface ContextValue {
  showAlert: (message: string) => void
}

const Context = createContext<ContextValue>({} as ContextValue)

export function AlertContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [options, setOptions] = useState<AlertOptions | null>(null)

  const showAlert = useCallback((message: string) => {
    setOptions({
      message,
    })
  }, [])

  const closeAlert = useCallback(() => {
    setOptions(null)
  }, [])

  const actions = useMemo(() => ({ showAlert }), [showAlert])

  return (
    <Context.Provider value={actions}>
      {children}
      <Alert show={!!options} onClose={closeAlert} message={options?.message} />
    </Context.Provider>
  )
}

export function useAlertContext() {
  return useContext(Context)
}
