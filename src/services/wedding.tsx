import { ThemeBase } from '$types/wedding'

import { database } from '$utils/firebase'

export async function fetchWedding(id: string) {
  const response = await database.collection('wedding').doc(id).get()

  return response.data() as ThemeBase
}
