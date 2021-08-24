import React, { Component } from 'react'
import EligeReacion from './EligeReacion'
import { Link } from 'react-router-dom'

export default class Respuesta extends Component {
    render() {
        return (
            <li className="list-group-item p-0 my-2 border-0">
                <div className="media m-0">
                    <img className="align-self-start mr-2 my-2 rounded-circle border" src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="26" height="26" alt="" />
                    <div className="media-body bg-light rounded px-3 py-2">
                        <div className="row w-100 inline m-0 pb-0">
                            <Link className="mt-0 font-weight-bold" to="/perfil">{this.props.userRespuesta}</Link>
                            <div className="dropdown dropleft ml-3">
                                <button type="button" className="btn btn-transparent btn-sm text-muted p-0 toggle" id="menuOcultoComentario" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,10">
                                    <i className ="fas fa-ellipsis-h"></i>
                                </button>
                                <div className ="dropdown-menu" aria-labelledby="menuOcultoComentario">
                                    <Link className ="btn rounded-0 dropdown-item" to="/">Editar</Link>
                                    <Link className ="btn btn-danger rounded-0 dropdown-item" to="/">Eliminar</Link>
                                </div>
                            </div>
                        </div>                        
                        <img className="m-0 p-0 mr-2" width="120px" src={this.props.gif}  alt="" />
                        <div className="row m-0 p-0">
                            <a href="className=#v-pills-home" className="mr-3" data-toggle="modal" data-target=".bd-example-modal-sm">Me gusta</a>
                            <EligeReacion />
                            <a href="className=#v-pills-home" className="mr-3">Responder</a>
                            <a href="className=#v-pills-home" className="text-muted">{this.props.fechaRespuesta}</a>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}
