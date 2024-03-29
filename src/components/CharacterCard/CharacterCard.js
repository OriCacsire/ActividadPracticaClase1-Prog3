import React, { Component } from 'react'

import "./styles.css"
//recibe informacion del contenedor padre por lo tanto tiene que recibir props

//VAMOS A CAMBIAR EL COMPONENTE A UNO CON ESTADO
class CharacterCard extends Component { //va a tener toda la estructura de cada tarjeta con su data. 

    constructor(props) {
        super(props) //habilita las props

        this.state = {
            contenidoOculto: true,
            botonText: "Ver más"
        }
        // console.log("constructor")
    }

/************************************************* */    
//CICLO DE VIDA DE LOS COMPONENTES.
    //EL ORDEN DE POSICION NO ES EL ORDEN DE EJECUCION 
    //1. CONSTRUCTOR 2. RENDER 3. COMPONENTDIDMOUNT
    componentDidMount(){
        // console.log("Soy Mount")
    }

    componentDidUpdate(){
        // console.log("Soy Update")
        if(this.state.contenidoOculto===false){
            alert ("Desde el componente hicimos algo")
        }
    }

    componentWillUnmount(){
        // console.log ("Unmount")
    }

/*************************************************** */
    //DECLARO METODO PARA OCULTAR, MOSTRAR CONTENIDO --> se setea por true o por false dependiendo cual fuese el caso
    ocultarYMostrarContenido() {
        if (this.state.contenidoOculto === true) {
            this.setState({ // se pone el cambio de valores de state
                contenidoOculto: false,
                botonText: "Ver menos"

            })
        } else {
            this.setState({ // se pone el cambio de valores de state
                contenidoOculto: true,
                botonText: "Ver más"
            })

        }
    }
    
    //a.  conecto esto con el boton  de abajo. Para esto se hace un evento

    render() {
        // console.log("soy el render")
        return (
            <div className="card-heros">
                <img src={`/img/characters/${this.props.data.img}`} alt="" />
                <h4>{this.props.data.name}</h4>
                <p> {this.props.data.description}</p>


                {/* Quiero q este contenido aparezca si se da un click en ver más, sino no lo quiero. HACEMOS un if ternario */}

                {
                    this.state.contenidoOculto
                        ? //si es true
                        ""
                        : //si me dice mostrar mas entonces mostrar el extra

                        <p>{this.props.data.extra}</p>

                }

                {/* boton con su nombre del texto. Ademas se le da el evento de onclick para que haga lo q se especifica en el metodo creado arriba */}
                <button href="#" onClick={() => this.ocultarYMostrarContenido()}>{this.state.botonText}</button>
            </div>

        )
    }



}

export default CharacterCard
