import React, { useState } from 'react'
import { database } from '$utils/firebase'

import { Wedding } from '$types/wedding'

// const real = {}

function ModifyPage() {
  const [id, setId] = useState('')

  const handleModify = async () => {
    const weddingRef = database.collection('wedding').doc(id)

    const response = await weddingRef.get()
    const wedding = response.data() as Wedding

    await weddingRef.update({
      ...wedding,
      message: {
        ...wedding.message,
      },
    })
  }

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value)
  }

  return (
    <div>
      <input value={id} onChange={handleId} />
      <div onClick={handleModify}>생성</div>
    </div>
  )
}

export default ModifyPage
