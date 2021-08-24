import React, { Component } from 'react'
import Send from '@material-ui/icons/Send'
import Abajo from '@material-ui/icons/ArrowDropDown'
import Face from '@material-ui/icons/TagFaces'
import File from '@material-ui/icons/InsertPhoto'
import { Link } from 'react-router-dom'

export default class messages extends Component {

    state = {
        search: ""
    }

    loadimage(event) {
        const output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
    };


    onInputChange = (e) => {

        this.setState({

            [e.target.name]: e.target.value

        })
        console.log(e.target.value)

    }

    render() {

        const picturstyle = {
            'object-fit': 'cover',
            'object-position': 'center center'

        } 

        return (
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-3" style={{ borderRight: "1px solid rgb(211,211,211)" }}>
                        <div className="row ml-2 mt-2" >
                            <h3 className="titulo mt-3">Chats</h3>
                        </div>

                        <div className="row-md-3 mt-2" style={{ padding: "5px" }}>
                            <input className="buscar form-control" type="text" style={{ background: "#eee", borderRadius: "40px" }} placeholder="Buscar en mensajes" />
                        </div>

                        <div className="row-md-3 mt-3" style={{ overflowY: "scroll", height: "450px" }}>
                            <div style={{ padding: "5px", verticalAlign: "baseline", display: "flex", cursor: "pointer" }}>
                                <img class="profile-image mt-2 mr-2" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "50px", height: "50px", borderRadius: "40px" }} alt="" />
                                <div class="text">
                                    <h6 className="usuarioname" style={{ marginTop: "11px", marginBottom: "0px" }}>Robo Cop</h6>
                                    <p className="text-muted small">Hey, you're arrested!</p>
                                </div>
                                <span style={{ marginTop: "11px", marginBottom: "0px", marginLeft: "40px" }} class="time text-muted small small">13:21</span>
                                <p className="dropdown abajo mt-1" type="button" data-toggle="dropdown"><Abajo /></p>
                                <div class="dropdown-menu">
                                    <Link className="dropdown-item">Eliminar mensaje</Link>
                                </div>
                            </div>
                            <hr className="mt-1" />
                            <div style={{ padding: "5px", verticalAlign: "baseline", display: "flex", cursor: "pointer" }}>
                                <img class="profile-image mt-2 mr-2" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "50px", height: "50px", borderRadius: "40px" }} alt="" />
                                <div class="text">
                                    <h6 className="usuarioname" style={{ marginTop: "11px", marginBottom: "0px" }}>Robo Cop</h6>
                                    <p className="text-muted small">Hey, you're arrested!</p>
                                </div>
                                <span style={{ marginTop: "11px", marginBottom: "0px", marginLeft: "40px" }} class="time text-muted small small">13:21</span>
                                <p className="dropdown abajo mt-1" type="button" data-toggle="dropdown"><Abajo /></p>
                                <div class="dropdown-menu">
                                    <Link className="dropdown-item">Eliminar mensaje</Link>
                                </div>
                            </div>
                            <hr className="mt-1" />
                            <div style={{ padding: "5px", verticalAlign: "baseline", display: "flex", cursor: "pointer" }}>
                                <img class="profile-image mt-2 mr-2" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "50px", height: "50px", borderRadius: "40px" }} alt="" />
                                <div class="text">
                                    <h6 className="usuarioname" style={{ marginTop: "11px", marginBottom: "0px" }}>Robo Cop</h6>
                                    <p className="text-muted small">Hey, you're arrested!</p>
                                </div>
                                <span style={{ marginTop: "11px", marginBottom: "0px", marginLeft: "40px" }} class="time text-muted small small">13:21</span>
                                <p className="dropdown abajo mt-1" type="button" data-toggle="dropdown"><Abajo /></p>
                                <div class="dropdown-menu">
                                    <Link className="dropdown-item">Eliminar mensaje</Link>
                                </div>
                            </div>
                            <hr className="mt-1" />
                            <div style={{ padding: "5px", verticalAlign: "baseline", display: "flex", cursor: "pointer" }}>
                                <img class="profile-image mt-2 mr-2" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "50px", height: "50px", borderRadius: "40px" }} alt="" />
                                <div class="text">
                                    <h6 className="usuarioname" style={{ marginTop: "11px", marginBottom: "0px" }}>Robo Cop</h6>
                                    <p className="text-muted small">Hey, you're arrested!</p>
                                </div>
                                <span style={{ marginTop: "11px", marginBottom: "0px", marginLeft: "40px" }} class="time text-muted small small">13:21</span>
                                <p className="dropdown abajo mt-1" type="button" data-toggle="dropdown"><Abajo /></p>
                                <div class="dropdown-menu">
                                    <Link className="dropdown-item">Eliminar mensaje</Link>
                                </div>
                            </div>
                            <hr className="mt-1" />
                            <div style={{ padding: "5px", verticalAlign: "baseline", display: "flex", cursor: "pointer" }}>
                                <img class="profile-image mt-2 mr-2" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "50px", height: "50px", borderRadius: "40px" }} alt="" />
                                <div class="text">
                                    <h6 className="usuarioname" style={{ marginTop: "11px", marginBottom: "0px" }}>Robo Cop</h6>
                                    <p className="text-muted small">Hey, you're arrested!</p>
                                </div>
                                <span style={{ marginTop: "11px", marginBottom: "0px", marginLeft: "40px" }} class="time text-muted small small">13:21</span>
                                <p className="dropdown abajo mt-1" type="button" data-toggle="dropdown"><Abajo /></p>
                                <div class="dropdown-menu">
                                    <Link className="dropdown-item">Eliminar mensaje</Link>
                                </div>
                            </div>
                            <hr className="mt-1" />
                        </div>
                    </div>

                    <div className="col-9">
                        <div className="row" style={{ borderBottom: "1px solid rgb(211,211,211)" }}>
                            <img class="profile-image ml-4 mt-2 mr-2 mb-2" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "50px", height: "50px", borderRadius: "40px", cursor: "pointer" }} alt="" />
                            <div class="text">
                                <h6 className="usuarioname-chat" style={{ marginTop: "11px", marginBottom: "3px", cursor: "pointer" }}>Robo Cop</h6>
                                <p className="text-muted-chat small" style={{ color: "grey" }}>Activo hace 8min</p>
                            </div>

                        </div>


                        <div className="zona-chat" style={{ overflowY: "scroll", height: "480px", borderBottom: "1px solid rgb(211,211,211)" }}>
                            <ul className="chat mt-4">
                                <li className="him">Hola silvia</li>
                                <li className="me">Hola Robo me gustaría analizar los requerimientos del proceso de titulación mediante la caracterización de las distintas formas de trabajo titulación que ofrece la Universidad Técnica de Machala.</li>
                                <li className="him">Bueno silvia</li>
                                <li className="me">Gracias Robo</li>
                                <li className="me">Te escribo luego men</li>
                                <li className="him">Ya pilas</li>
                                <li className="him"><img class="profile-image mt-2 mr-2" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" alt="" /></li>
                            </ul>
                        </div>

                        <div className="row">
                            <div className="col-10">
                                <input className="form-control mt-3 ml-2 mr-5" type="text" style={{ background: "#eee", borderRadius: "40px" }} placeholder="Escribe un mensaje" />
                            </div>
                            <p className="ml-2 mt-4 mr-2" type="button"><Send /></p>
                            <p className="mt-4 mr-2" type="button"><Face /></p>
                            <p className="mt-4 mr-2" type="button" data-toggle="modal" data-target="#exampleModalCenter"><File /></p>

                            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLongTitle">Subir archivos</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body" style={{alignContent:"center"}}>
                                            <input type="file" onChange={this.loadimage.bind(this.event)} />
                                            <img src="" id="output" width="200" height="200" style={picturstyle} alt=""/>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                            <button type="button" class="btn btn-primary">Enviar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
