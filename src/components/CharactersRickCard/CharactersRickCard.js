import React, { Component } from 'react'
import "./styles.css"

class CharactersRickCard extends Component {
 //PASAMOS LAS PROPS AL COMPONENETE CON ESTADO PARA PODER USARLO EN EL JSX
    constructor(props){
        super(props)
 }
  render() {
    return (
    //   <div> 
    //     {/* Lo que se ve en cada una de las cards en pantalla.El cual luego se importa en cahractersRick */}
    //     CharactersRickCard
    //   </div>

    //JSX QUE ARMA LA TARJETA. COMPLETAMOS LOS DATOS CON LAS PROPS
         <article className='character-card'>
         <img src={this.props.data.image} alt="" />
         <h2>{this.props.data.name} </h2> {/* Nombre */}
         <p>{this.props.data.status} </p> {/* Estado */}
         <p> {this.props.data.species}</p> {/* Especie */}
         <p className='more'>Ver más</p> 
         <section className='extra'>
             {/* ojo con no pasar la informacion completa */}
             <p>Origen:{this.props.data.origin.name} </p> 

         </section>

         {/* <button onClick={()=>this.props.agregarFavorito}>agregar a Favorito</button> */}
         <button 
        //  en el evento onclick vamos a ejecutar this.props.borrar.id --> borrar es la props definida dentro del componente este recibe un id, por lo tanto hacer this.props.data "data"es donde esta la info de los elemento (id) que es lo q nos trae la api
         onClick={()=> this.props.borrar(this.props.data.id)}
         className='delete'>Borrar</button>

     </article>

    )
  }
}
export default CharactersRickCard