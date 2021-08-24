import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import config from '../metodos/config_session';

import { If, Then, Else } from 'react-if';

export default class navegation extends Component {

    state = {

        conectado: false,
        cod_usuario: '',
        nombre: '',
        link_perfil: '',
        ruta_server: 'http://localhost:5000/public/usuarios/'

    }


    async componentDidMount() {

        const response = await axios.get('http://localhost:5000/api/ver_sesion', config);


        if (response.data.mensaje) {

            const data = response.data.datos;

            this.setState({ conectado: true, cod_usuario: data.cod_usuario, nombre: data.nombres_usuario, link_perfil: data.imagen_usuario });

        } else {

            this.setState({ conectado: false });

        }


    }

    ver_perfil = (e) => {

        window.location.href = "/perfil/" + this.state.cod_usuario;

    }

    salir = async () => {

        const resp = await axios.get('http://localhost:5000/api/salir', config);

        if (resp.data.mensaje) {

            window.location.href = "/";

        }

    }

    render() {


        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top p-1">

                <div className="container">

                    <If condition={this.state.conectado}>
                        <Then>
                            <Link className="navbar-brand" to="/principal">Socialnet</Link>
                        </Then>

                        <Else>
                            <Link className="navbar-brand" to="/">Socialnet</Link>
                        </Else>
                    </If>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <If condition={this.state.conectado}>


                        <div className="collapse navbar-collapse" id="navbarNav">

                            <ul className="navbar-nav ml-auto flex-row flex justify-content-around">
                                <li className="nav-item active">
                                    <Link className="nav-link px-sm-5 px-lg-1" to="/"><i className="fas fa-user-friends fa-lg px-2"></i></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link px-sm-5 px-lg-1" to="/mensajeria"><i className="fas fa-envelope fa-lg px-2"></i></Link>
                                </li>
                                <div className="dropdown dropleft">

                                    <li className="nav-item active">

                                        <Link type="button" id="menuOcultoPublicacion" to="" data-toggle="dropdown" className="nav-link px-sm-5 px-lg-1" ><i className="fas fa-bell fa-lg px-2"></i></Link>

                                        <div className="dropdown-menu" aria-labelledby="menuOcultoPublicacion">
                                            <Link className="dropdown-item" to="/"><img className="align-self-start mr-2 rounded-circle border" src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="36" height="36" alt="" />
                                                Silvia te ha enviado una solicitud de amistad</Link>
                                            <div className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="/"><img className="align-self-start mr-2 rounded-circle border" src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="36" height="36" alt="" />
                                                Silvia te ha enviado una solicitud de amistad</Link>
                                            <div className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to="/"><img className="align-self-start mr-2 rounded-circle border" src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="36" height="36" alt="" />
                                                Silvia le ha dado me gusta a tu publicación</Link>
                                        </div>

                                    </li>
                                </div>


                                <li className="nav-item dropdown active">
                                    <Link className="nav-link dropdown-toggle" to="/" data-toggle="dropdown">{this.state.nombre}
                                        <img src={this.state.ruta_server + this.state.cod_usuario + "/perfil/" + this.state.link_perfil} width="25" height="25" className="rounded-circle ml-2" alt="" />
                                    </Link>

                                    <div className="dropdown-menu">

                                        <button className="dropdown-item" onClick={() => this.ver_perfil()} >Perfil</button>
                                        <Link className="dropdown-item" to="/">Modo Oscuro</Link>
                                        <Link className="dropdown-item" to="/">Modo Claro</Link>
                                        <Link className="dropdown-item" to="" onClick={() => this.salir()}>Salir</Link>

                                    </div>
                                </li>
                            </ul>
                        </div>
                    </If>

                </div>

            </nav>
        )
    }
}
