import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function useScrollTop() {
  const routePath = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [routePath])
}

export default useScrollTop
