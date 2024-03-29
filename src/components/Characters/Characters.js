import React from 'react'
import CharacterCard from '../CharacterCard/CharacterCard'
 //Si quiero que la informacion no este en characters (osea el const info). Entonces lo ponemos en app y lo recibimos commo props. LO RECIBO COMO PROPS Y LO PONGO EN APP.js
 import "./styles.css"

//COMO CREO UN COMPONENTE SIN ESTADO EMPEZAMOS ASI 
function Characters(props) {
  return (
    <section className='container--cards'>
        { //elm = cada uno de los objetos q estan dentro del array info {},{},...
            props.personajes.map((elm)=>
            <CharacterCard
            
            data = {elm} //le doy cada uno de los elementos del array. Es como un pasa manos, el componente padre le manda data al hijo
            />
            
            )//En vez de usar esto <h1>{elm.name}</h1> vamos a usar el contenedor hijo para traer infor.
        }
    </section>
  )
}

export default Characters
