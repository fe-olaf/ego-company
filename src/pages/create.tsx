import { database } from '$utils/firebase'

const real = {}

function CreatePage() {
  const handleCreate = () => {
    database.collection('wedding').add(real)
  }

  return <div onClick={handleCreate}>생성</div>
}

export default CreatePage
