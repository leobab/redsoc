import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import config from '../metodos/config_session';
import axios from 'axios';

import { If } from 'react-if'

import CreatePublication from './CreatePublication'

import Publication from './Publication';

export default class perfil extends Component {


    state = {

        server:"http://localhost:5000",
        ruta_server: 'http://localhost:5000/public/usuarios/',
        id_usuario: 'anonimo',
        nombre_completo: '',
        link_portada: 'portada.jpg',
        link_perfil: 'perfil.jpg',
        seguidores: 0,
        seguidos: 0,
        publicaciones: 0,
        amigos: 0,
        id_sesion: '',
        publicaciones: null

    }

    async componentDidMount() {

        const user_id = window.location.pathname.split("/")[2];

        console.log("id de la url: "+user_id);

        if (user_id != null) {

            const response = await axios.get('http://localhost:5000/api/usuario/' + user_id, config);

            if (response.data.mensaje) {

                const datos = response.data.datos;

                this.setState({ id_usuario: datos.cod_usuario, nombre_completo: datos.nombres_usuario + " " + datos.apellidos_usuario, link_perfil: datos.imagen_usuario, link_portada: datos.portada_usuario });

                console.log("codigo de usuario de la consulta: "+response.data.nombres_usuario);
                
                this.setState({ id_sesion: datos.cod_usuario });

                this.setState({ seguidores: parseInt(datos.total_seguidores), seguidos: parseInt(datos.total_seguidos), amigos: parseInt(datos.total_amigos), publicaciones: parseInt(datos.total_publicaciones) });
                
                this.ver_publicaciones();

            }

        }


    }


    ver_publicaciones = async()=>{


        const response = await axios.get('http://localhost:5000/api/publicacion/ver_publicaciones', config);

        if (response.data.mensaje) {

            console.log(response.data.datos);

        }


    }

    render() {

        return (

            <div className="row">

                    <div className="col-md-4">

                        <div className="card">

                            <h5 className="m-2">Detalles</h5>

                            <div className="card-body text-left">

                                <p>Estudia en <Link to="/">Universidad Técnica de Machala</Link> </p>

                                <p>Estudió en <Link to="/">PADRE JULIO MARIA MATOVELLE</Link></p>

                                <p>Vive en <Link to="/">Machala</Link></p>

                                <p>De <Link to="/">Machala</Link></p>


                            </div>

                            <div className="card-footer">

                                <Link to="/">Editar</Link>

                            </div>


                        </div>

                        <div className="card mt-2">

                            <h5 className="m-2">Seguidores</h5>

                            <div className="card-body text-center">

                                <p>{this.state.seguidores} personas o sitios</p>

                            </div>

                            <div className="card-footer">

                                <Link to="/">Ver todo</Link>

                            </div>

                        </div>

                        <div className="card mt-2">

                            <h5 className="m-2">Siguiendo</h5>

                            <div className="card-body text-center">

                                <p>{this.state.seguidos} personas o sitios</p>

                            </div>

                            <div className="card-footer">

                                <Link to="/">Ver todo</Link>

                            </div>

                        </div>

                        <div className="card mt-2 mb-3">

                            <h5 className="m-2">Publicaciones</h5>

                            <div className="card-body text-center">

                                <p>{this.state.publicaciones} publicaciones o etiquetas</p>

                            </div>

                            <div className="card-footer">

                                <Link to="/">Ver todo</Link>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-8">

                        <CreatePublication nombre={this.state.nombre_completo} id_usuario={this.state.id_usuario} link_perfil={this.state.link_perfil} />
                            
                        <Publication 
                                userImage="https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg"
                                user="Gabriela Astudillo"
                                etiqueta1="Darwin Pilaloa"
                                etiqueta2="Silvia Cabrera"
                                fechaPublicacion="1 h"
                                textPublicacion="Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final."
                                imagenPublicacion="https://4ca2a52t2g0244kzir3456v7-wpengine.netdna-ssl.com/charlotte/wp-content/uploads/sites/3/2014/05/puppy-preschool.jpg"
                                />

                    </div>
                    </div>

        )
    }
}
