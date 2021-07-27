import firebase from 'firebase'
import 'firebase/firestore'

import { ThemeBase } from '$types/theme'

export async function fetchWedding(id: string) {
  const db = firebase.firestore()

  const response = await db.collection('weddings').doc(id).get()

  return response.data() as ThemeBase
}
