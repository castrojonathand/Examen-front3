/* eslint-disable react/prop-types */


const Formulario = ({setNombre,setMascota,handleSubmit}) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
        <label> Nombre: </label>
        <input className='input' type="text" onChange={(e)=> setNombre(e.target.value)}/>
        <label >Mascota de 6 caracteres: </label>
        <input className='input' type="text" onChange={(e)=> setMascota(e.target.value)} />

        <button className="boton">Mostrar Targeta</button>
    </form>
  )
}

export default Formulario