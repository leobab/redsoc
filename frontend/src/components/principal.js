import React, { Component } from 'react'

import Publication from './Publication'
import SidePanel from './sidepanel'
import Conectados from './conectados'
import CreatePublication from './CreatePublication'
import VerHistorias from './VerHistorias'

import axios from 'axios'

import config from '../metodos/config_session';

export default class principal extends Component {
    state = {

        conectado: false,
        id_usuario: '',
        nombre: '',
        link_perfil: '',
        
    }

    async componentDidMount() {

        const response = await axios.get('http://localhost:5000/api/ver_sesion', config);


        if (response.data.mensaje) {

            const data = response.data.datos;

            this.setState({ conectado: true, id_usuario: data.cod_usuario, nombre: data.nombres_usuario+" "+data.apellidos_usuario, link_perfil: data.imagen_usuario });

        } else {

            this.setState({ conectado: false });

        }


    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return (
            <div className="container px-0 pt-3 mt-lg-0 mt-4">               
                <main className="row m-0 p-0">
                    <div className="col-md-2 col-lg-3 col-sm-12">
                        <section className="px-3" style={{ position: "relative" }}>
                            <SidePanel nombre={this.state.nombre} id_usuario={this.state.id_usuario} link_perfil={this.state.link_perfil}/>
                        </section>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-7 pt-lg-4 mt-2 noticias px-lg-4 mx-lg-0">
                        <section style={{ position: "relative" }}>
                            <CreatePublication nombre={this.state.nombre} id_usuario={this.state.id_usuario} link_perfil={this.state.link_perfil} />
                            <VerHistorias />                     
                            <Publication 
                                userImage="https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg"
                                user={this.state.nombre}
                                //etiqueta1="Darwin Pilaloa"
                                //etiqueta2="Silvia Cabrera"
                                fechaPublicacion="1 h"
                                textPublicacion="Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final."
                                imagenPublicacion="https://4ca2a52t2g0244kzir3456v7-wpengine.netdna-ssl.com/charlotte/wp-content/uploads/sites/3/2014/05/puppy-preschool.jpg"
                                />

                        </section>
                    </div>
                    <div className="col offset-md-1 offset-lg-2 mt-4 pt-2 pl-lg-5" >
                        <section style={{ position: "fixed" }}>
                            <Conectados/>
                        </section>
                    </div>
                </main>
            </div>
        )
    }
}
