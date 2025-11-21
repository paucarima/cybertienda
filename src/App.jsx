import { API_URL } from "../env"


function App({ name }) {
  console.log('import.meta.env =', import.meta.env)
  console.log('import.meta.env.VITE_API_URL =', import.meta.env.VITE_API_URL)
  console.log('API_URL (from env.js) =', API_URL)

  const api = API_URL ?? '<<sin valor>>'

  return (
    <h1 style={{ color: 'blue' }}>Hola desarrollo{api} </h1>
  )
}

export default App
