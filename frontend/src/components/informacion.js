import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import config from '../metodos/config_session';
import axios from 'axios';

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
        publicaciones: null,
        estudio_usuario:'',
        trabajo_usuario:'',
        lugar_vive_usuario:'',
        lugar_origen_usuario:'',
        fecha_nac_usuario:'',
        email_usuario:'',
        nombre_genero:'',
        telefono_usuario:''
        



    }

    async componentDidMount() {

        const user_id = window.location.pathname.split("/")[2];

        console.log("id de la url: "+user_id);

        if (user_id != null) {

            const response = await axios.get('http://localhost:5000/api/usuario/' + user_id, config);

            if (response.data.mensaje) {

                const datos = response.data.datos;

                this.setState({ id_usuario: datos.cod_usuario, nombre_completo: datos.nombres_usuario + " " + datos.apellidos_usuario, link_perfil: datos.imagen_usuario, link_portada: datos.portada_usuario, estudio_usuario: datos.estudio_usuario, trabajo_usuario: datos.trabajo_usuario, email_usuario: datos.email_usuario, nombre_genero: datos.nombre_genero, telefono_usuario: datos.telefono_usuario, lugar_origen_usuario: datos.lugar_origen_usuario, lugar_vive_usuario: datos.lugar_vive_usuario, fecha_nac_usuario: datos.fecha_nac_usuario });

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

            <div className="col-md-12">

                        <div className="card">

                            <h5 className="m-2">Información</h5>

                            <div className="card-body text-left">

                                <p>Estudia en <Link >{this.state.estudio_usuario}</Link> </p>

                                <p>Trabaja en <Link >{this.state.trabajo_usuario} </Link></p>

                                <p>Vive en <Link >{this.state.lugar_vive_usuario}</Link></p>

                                <p>De <Link to="/">{this.state.lugar_origen_usuario}</Link></p>

                                <p>Fecha de Nacimiento: {this.state.fecha_nac_usuario}</p>

                                <p>Teléfono: {this.state.telefono_usuario}</p>

                                <p>Género: {this.state.nombre_genero}</p>

                                <p>Correo: {this.state.email_usuario}</p>


                            </div>

                            <div className="card-footer">

                                <Link to="/">Editar</Link>

                            </div>


                        </div>


                    </div>


        )
    }
}