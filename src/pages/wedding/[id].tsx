import { NextPageContext } from 'next'

import useLoadKaKao from '$hooks/useLoadKakao'

function WeddingPage() {
  useLoadKaKao()

  return <div>Wedding</div>
}

export default WeddingPage

export async function getServerSideProps(context: NextPageContext) {
  const { query } = context

  return {
    props: {
      type: query?.type || 'bride',
    }, // will be passed to the page component as props
  }
}
