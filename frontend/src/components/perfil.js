import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import config from '../metodos/config_session';
import axios from 'axios';

import { If } from 'react-if'

import CreatePublication from './CreatePublication'

import Publication from './Publication';

import Informacion from './informacion';
import Biografia from './biografia';

export default class perfil extends Component {


    state = {

        server: "http://localhost:5000",
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
    }

    constructor() {
        super();
        this.state = {
            server: "http://localhost:5000",
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
            informacion: false,
            biografia: true,
            presentacion_usuario: ''
        };
        this.hideComponent = this.hideComponent.bind(this);
    }

    async componentDidMount() {

        const user_id = window.location.pathname.split("/")[2];

        console.log("id de la url: " + user_id);

        if (user_id != null) {

            const response = await axios.get('http://localhost:5000/api/usuario/' + user_id, config);

            if (response.data.mensaje) {

                const datos = response.data.datos;

                this.setState({ id_usuario: datos.cod_usuario, nombre_completo: datos.nombres_usuario + " " + datos.apellidos_usuario, link_perfil: datos.imagen_usuario, link_portada: datos.portada_usuario, presentacion_usuario: datos.presentacion_usuario });

                console.log("codigo de usuario de la consulta: " + response.data.nombres_usuario);

                this.setState({ id_sesion: datos.cod_usuario });

                this.setState({ seguidores: parseInt(datos.total_seguidores), seguidos: parseInt(datos.total_seguidos), amigos: parseInt(datos.total_amigos), publicaciones: parseInt(datos.total_publicaciones) });

                this.ver_publicaciones();

            }

        }


    }


    ver_publicaciones = async () => {


        const response = await axios.get('http://localhost:5000/api/publicacion/ver_publicaciones', config);

        if (response.data.mensaje) {

            console.log(response.data.datos);

        }


    }

    hideComponent(name) {
        console.log(name);
        switch (name) {
            case "informacion":
                this.setState({ informacion: !this.state.informacion, biografia: !this.state.biografia });
                break;
            case "biografia":
                this.setState({ informacion: !this.state.informacion, biografia: !this.state.biografia });
                break;
        }
    }

    render() {

        const { informacion, biografia, showHideDemo3 } = this.state;

        return (


            <div className="container pt-2 col-lg-10 col-md-10 col-sm-12 mt-5 px-lg-5 px-md-5 px-0" >

                <div className="card mt-2">

                    <div style={{ height: "320px", width: "100%", backgroundImage: "url(" + this.state.ruta_server + this.state.id_usuario + "/portada/" + this.state.link_portada + ")", backgroundSize: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>

                        <If condition={this.state.id_usuario !== this.state.id_sesion}>

                            <div className="card-body" style={{ float: "right" }} >

                                <button className="btn btn-success mr-1" >Seguir</button>
                                <button className="btn btn-primary mr-1" >Enviar Solicitud</button>

                            </div>

                        </If>


                    </div>


                    <div className="card-img-overlay mt-5">

                        <div className="row align-items-center ml-2">

                            <img src={this.state.ruta_server + this.state.id_usuario + "/perfil/" + this.state.link_perfil} alt="" style={{ height: "168px", width: "168px", objectFit: "cover", objectPosition: "center center" }} className="rounded-circle img-thumbnail" />

                            <h4 className="ml-3 text-white font-weight-bold" style={{ WebkitTextStroke: "1px black", fontSize: "30px" }}>{this.state.nombre_completo}</h4>
                        

                        </div>

                    </div>


                </div>

                <div className="card mb-3">

                    <p>{this.state.presentacion_usuario}</p>

                    <div className="m-1 bg-white ml-auto">

                        <Link className="btn btn-info mr-1" onClick={() => this.hideComponent("biografia")} >Biografía</Link>
                        <Link className="btn btn-warning mr-1" onClick={() => this.hideComponent("informacion")} >Información</Link>
                        <Link className="btn btn-secondary mr-1" to="">Amigos</Link>
                        <Link className="btn btn-primary mr-1" to="">Fotos</Link>

                    </div>

                </div>

                <div className="row mb-4" >
                    {informacion && <Informacion />}
                    
                    {biografia && <Biografia />}

                </div>


            </div>

        )
    }
}

