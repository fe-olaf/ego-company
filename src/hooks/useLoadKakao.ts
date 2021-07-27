import { useEffect } from 'react'

function useLoadKakao() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
    script.async = true

    document.body.appendChild(script)

    script.onload = () => {
      const kakao = window.Kakao

      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_CLIENT_ID)
      }
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])
}

export default useLoadKakao
