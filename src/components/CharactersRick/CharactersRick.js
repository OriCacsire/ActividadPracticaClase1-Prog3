import React, { Component } from 'react'
//importamos characterRickCard
import CharactersRickCard from '../CharactersRickCard/CharactersRickCard'
class CharactersRick extends Component {
    //Como es un componente con clase se le declara un constructor que recibe unas props y tiene un super q tambien recibe unos props.Luego, declaramos un estado que deben de tener un objeto literal con propiedades, en este caso recibe como valor un array vacio para que esten dentro los personajes.

    //Queremos que cuando se renderise se llame a la endpoint "https://rickandmortyapi.com/api/character" de characters, entonces usamos esa api para esto uso un componentDidMount y un fetch que son promesas, tienen un metodo concatretano que son los  2 .then() y el .catch()

    constructor(props) {
        super(props)
        this.state = {
            personajes: [],
            //estado de que pagina estamos
            page: 0,
            favoritos: []//aqui almacenammos los IDs de los personajes favoritos

        };
    }

    componentDidMount() {
        fetch("https://rickandmortyapi.com/api/character")//Es una promesa q reciben:
            .then(resp => resp.json())//recibe respuestas de la api, es decir la cartera con todo lo que tiene dentro y cambia su formato de json a uno manipalable. Luego, se pasa al siguiente then

            //se tiene la informacion para procesar. Este console.log(data) me ayuda a ver data en consola
            .then(data => {
                console.log(data)
                this.setState({
                    personajes: data.results, //data q se recibe del then anterior y el results es lo que tomamos de la api

                    //LUEGO DEL PRIMER LLAMADO 
                    page: this.state.page + 1
                })
            }) //como lo quiero coo un estado el metodo que se usa es this.setState y guardo en mis personajes lo que me traiga la api
            .catch(error => console.log(error)) //se crea un parametro para mostrar por consola el error q se pueda producir. 
    }
    //quiero traer más personajes, por lo tanto se cambia el link del fetch apra que se diriga a la siguiente pagina

    traerMasPersonajes() {
        fetch(`https://rickandmortyapi.com/api/character?page=` + (this.state.page + 1))
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                //Agreguen al this.state
                this.setState({
                    //actualizo pa page
                    page: this.state.page + 1,

                    // personajes:data.results //le agrego al array de pesonjaes nuevos. Le asigno el array que me traer

                    personajes: this.state.personajes.concat(data.results) //concatreno un array nuevo al anterior
                })
            })
            .catch(err => console.log(err))
    }

    //implementar la funcionalidad de borrar la tarjeta de la vista actual, este tiene que estar donde se declara el estado de personajes

    //cada personaje va a tener un id como identificador por lo tanto tiene que tener un parametro --> llamado id

    borrarPersonaje(id) {
        //cuando se ejecute el evento de borrar quiero que me aparezca el id del elemento borrado 
        // console.log(id)

        //filtro los personajes: llamo al lugar donde estan guardados los eprsonajes y los filtro. Entonces recibimos un elemento como parametro y validadmos si el elmento por el que estamos pasando elem.id es igual igual al id q se recibe como parametro. Lo q hace filter es crear un array con todos los q tienen condicion de true. En este caso como quiero los que no tienen igual id que les pase coo parametro quiero eliminar 
        let personajesFiltrados = this.state.personajes.filter(elm=>elm.id !==id) 
        this.setState({
            personajes:personajesFiltrados
        })

    }

    //Método para agregar un personaje a la lista de favoritos
    agregarFavorito(id){
        // if (!this.state.favoritos.includes(id)) {
        //     this.setState (
        //         prevState =>({
        //             favoritos: [prevState.favoritos,id]

        //         }), ()=>
        //         // Después de actualizar el estado, guardar en localStorage
        //         localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
              
        //     )           
        // }
    }

    // Método para eliminar un personaje de la lista de favoritos
    eliminarFavorito(id) {
    //     const nuevosFavoritos = this.state.favoritos.filter(favId => favId !== id);
    //     this.setState({
    //         favoritos: nuevosFavoritos
    //     }, () => {
    //         localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos));
    //     });
    }



    render() {
        return (
            <div>
                <section className='cardContainer'>
                    {/* //si el estado de personajes su largo es mayor que cero, muestro el array completo de los personajes y si esta vacio que diga q esta cargando */}
                    {
                        //COMO ESTA DENTRO DE UN SECTION DE JSX SE AGREGA LOGICA CON {}
                        this.state.personajes.length > 0 ?
                            this.state.personajes.map((elm, idx) => <CharactersRickCard  // para pasarle infromacion de cada uno de los "elm" del map --> se usan las props
                                key={idx + elm.name}
                                data={elm} 
                                borrar ={(id)=>this.borrarPersonaje(id)}
                                // agregarFavorito={()=>this.agregarFavorito(elm.id)}
                                // eliminarFavorito={()=>this.eliminarFavorito(elm.id)}

                                />) //el map recibe solo un parametro que es un callback el cual recibe dos parametros que es un elemento y el indice de ese elementos. Por cada uno de ellos se retorna un CharactersRickCard

                            :
                            <h1>Cargando...</h1>
                    }
                    {/* creamos un boton para ver mas personajes de forma que siempre q querramos nuevos personajes va a la api y trae nuevos personajes */}
                    <div>
                        <button onClick={() => this.traerMasPersonajes()}>Mas Personajes</button>
                    </div>
                </section>
            </div>


        )
    }
}

export default CharactersRick
