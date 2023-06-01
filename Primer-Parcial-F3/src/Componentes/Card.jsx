/* eslint-disable react/prop-types */
const Card = ({nombre , mascota}) => {

  console.log(nombre, mascota);

  return (
    <div className="card">              
        
        <h2> Tu nombre es: {nombre}</h2>
        <h2> y tu mascota preferida es: {mascota}</h2>
        <h3>Gracias por responder..</h3>    
        

    </div>
  )
}

export default Card