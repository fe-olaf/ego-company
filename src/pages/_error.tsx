import React, { PropsWithChildren } from 'react'
import { NextPageContext } from 'next'

function Error({
  type,
  statusCode,
}: PropsWithChildren<{
  type?: string
  statusCode?: number
}>) {
  return <>{type || statusCode}</>
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404

  return { statusCode }
}

export default Error
