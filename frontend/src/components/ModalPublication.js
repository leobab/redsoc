import React, { Component } from 'react'

import CreateArchivo from './CreateArchivo'
import CreateEtiqueta from './CreateEtiqueta'


import config_session from '../metodos/config_session';
import axios from 'axios';


export default class ModalPublicacion extends Component {

    state = {

        ruta_server: 'http://localhost:5000/public/usuarios/',
        contenido: ''
    }

    onInputChange = (e) => {

        this.setState({

            [e.target.name]: e.target.value

        })

    }

    crear_publicacion = async() => {

        const response = await axios.post('http://localhost:4000/api/publicacion/crear', {

            contenido: this.state.contenido

        }, config_session);

        if (response.data.mensaje) {

            document.getElementsByClassName("close")[0].click();

        }

    }

    render() {
        return (
            <div className="modal" id="ModalSubirFotoVideo">
                <div className="modal-dialog noticias pt-4">
                    <div className="modal-content">

                        <div className="modal-header pb-2 bg-light">
                            <h6 className="modal-tittle">Crear publicación</h6>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body p-1 m-0 w-100">
                            <div className="d-flex">
                                <img src={this.state.ruta_server + this.props.id_usuario + "/perfil/" + this.props.link_perfil} width="45" height="45" className="rounded-circle m-2 float-left border" alt="" />
                                <div className="m-0 p-0 w-100">
                                    <div className="form-group m-0 mb-1 p-0 w-100">
                                        <textarea name="contenido" value={this.state.contenido} onChange={this.onInputChange} className="form-control w-100 font-weight-normal m-0 pt-3 pb-0 border-0 mitextarea" rows="2" placeholder={"¿Qué estás pensando," + this.props.nombre + "?"}></textarea>
                                    </div>
                                </div>
                            </div>

                            <ul className="list-group list-group-flush m-0">
                                <li className="list-group-item px-3 py-1 w-100">
                                    <CreateArchivo />
                                    <CreateEtiqueta />
                                </li>

                                <li className="list-group-item rounded py-0 w-100">
                                    <div className="row justify-content-between mt-1 px-2 ">
                                        <button type="button" className="btn bg-light rounded-pill my-1 mr-1"><i className="fas fa-image mr-1"></i>Foto/video</button>
                                        <button type="button" className="btn bg-light rounded-pill my-1 mr-1"><i className="fas fa-file-upload mr-1"></i>Archivo</button>
                                        <button type="button" className="btn bg-light rounded-pill my-1 mr-1"><i className="fas fa-poll mr-1"></i>Encuesta</button>
                                        <button type="button" className="btn bg-light rounded-pill my-1"><i className="fas fa-user-plus mr-1"></i>Etiquetar</button>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="modal-footer">

                            <div className="w-100">
                                <div className="row justify-content-around pb-2 px-3">
                                    <div className="bg-light p-1 rounded pl-3">
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Noticias</label>
                                        </div>
                                    </div>
                                    <div className="bg-light p-1 rounded pl-3">
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                            <label className="custom-control-label" htmlFor="customCheck2">Tu historia</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" onClick={()=>this.crear_publicacion()} className="btn btn-primary p-1 w-100">Publicar</button>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
