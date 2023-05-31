import { useState } from 'react'

import './App.css'
import Card from './Componentes/Card'
import Formulario from './Componentes/Formulario'
function App() {
  
  const [nombre,setNombre] = useState('')
  const [mascota,setMascota] = useState('')
  const [mostrar,setMostrar] = useState(false)
  const [error,setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nombre.length >= 3 && mascota.length >= 6) {      
      setMostrar(true)
      setError(false)
    }else{
      setMostrar(false)
      setError(true)
      setError('Por favor chequea que la información sea correcta')
      
    }

  }

  return (
    <>
      <Formulario handleSubmit={handleSubmit}  setNombre={setNombre} setMascota={setMascota}/>
      {mostrar &&< Card nombre={nombre} mascota={mascota} error={error} /> }
      {error && <h3 className="error">{error}</h3>}
    </>
  )
}

export default App

