import React, { Component } from 'react'
import ModalSubirFotoVideo from './ModalPublication'

export default class CreatePublication extends Component {

    state = {
        
        ruta_server: 'http://localhost:5000/public/usuarios/',
     
    }

    onChangeHandler = event => {
        console.log(event.target.files[0])
    }

    render() {
        return (
            <div className="card my-3">
                <h6 className="card-header">Crear publicación</h6>
                <div className="form-inline pb-0">
                    <div className="card-body p-1 m-0 w-100 d-flex">
                        <img src={this.state.ruta_server+this.props.id_usuario+"/perfil/"+this.props.link_perfil} width="45" height="45" className="rounded-circle m-2 float-left border" alt="" />
                        <div className="m-0 p-0 w-100">
                            <div className="form-group m-0 p-0 w-100">
                                <textarea className="form-control w-100 font-weight-normal m-0 pt-3 pb-0 border-0 mitextarea"
                                    data-toggle="modal" data-target="#ModalSubirFotoVideo" rows="2" placeholder={"¿Qué estás pensando, "+this.props.nombre+"?"}></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-body p-0 m-0">
                    <ul className="list-group list-group-flush m-0">
                        <li className="list-group-item px-2 py-1 w-100">




                        </li>
                        <li className="list-group-item rounded py-0 w-100">
                            <div className="row justify-content-between mt-1 px-2 ">
                                <button type="button" className="btn bg-light rounded-pill my-1 mr-1" data-toggle="modal" data-target="#ModalSubirFotoVideo"><i className="fas fa-image mr-1"></i>Foto/video</button>
                                <ModalSubirFotoVideo nombre={this.props.nombre} id_usuario={this.props.id_usuario} link_perfil={this.props.link_perfil}/>
                                <button type="button" className="btn bg-light rounded-pill my-1 mr-1"><i className="fas fa-file-upload mr-1"></i>Archivo</button>
                                <button type="button" className="btn bg-light rounded-pill my-1 mr-1"><i className="fas fa-poll mr-1"></i>Encuesta</button>
                                <button type="button" className="btn bg-light rounded-pill my-1"><i className="fas fa-user-plus mr-1"></i>Etiquetar</button>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}
