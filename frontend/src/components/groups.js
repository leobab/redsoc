import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Abajo from '@material-ui/icons/ArrowDropDown'

export default class groups extends Component {

    loadimageportada(event) {
        const output = document.getElementById('output2');
        output.src = URL.createObjectURL(event.target.files[0]);
    };

    render() {

        const picturstyle = {
            'object-fit': 'cover',
            'object-position': 'center center'

        }

        return (

            <div className="container p-3 mt-3">

                <div className="card mt-5">
                    <h5 className="card-header" style={{ background: "white" }}>Grupos que manejas
                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModalCenter" style={{ float: "right", fontWeight: "bold" }}>
                            + Crear grupo
                    </button>

                        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header" style={{ background: "rgb(245,245,245)" }}>
                                        <h5 className="modal-title" id="exampleModalLongTitle" >Crear nuevo grupo</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p className="text-muted small" style={{ color: "grey" }}>Los grupos son excelentes para hacer las cosas y mantenerse en contacto solo con las personas que desea. Comparta fotos y videos, tenga conversaciones, haga planes y más.</p>
                                        <form action="">
                                            <p className="h6">Nombre del grupo</p>
                                            <input className="form-control" type="text" style={{ marginBottom: "10px" }}></input>
                                            <p className="h6">Añadir miembros</p>
                                            <input className="form-control" type="text" name="product" list="productName" style={{ marginBottom: "10px" }} />
                                            <datalist id="productName">
                                                <option value="Pen">Pen</option>
                                                <option value="Pencil">Pencil</option>
                                                <option value="Paper">Paper</option>
                                            </datalist>
                                            <p className="h6">Seleccionar privacidad</p>
                                            <div className="form-group">
                                                <select className="form-control" id="exampleFormControlSelect1">
                                                    <option>Privado</option>
                                                    <option>Público</option>
                                                </select>
                                            </div>
                                            <p className="h6">Descripción del grupo</p>
                                            <textarea className="form-control mb-3" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            <p className="h6">Foto de portada del grupo</p>
                                            <div className="image-upload text-center" >
                                                <label for="file-input2" style={{ cursor: "pointer", marginTop:"10px"}} title="Clic para subir foto de portada">
                                                    <img src="https://www.trecebits.com/wp-content/uploads/2018/11/Facebook-Grupos.jpg" alt="" id="output2" width="100%" height="250" style={picturstyle} />
                                                </label>
                                                <input id="file-input2" type="file" style={{ display: 'none' }} onChange={this.loadimageportada.bind(this.event)} />
                                            </div>
                                            
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary">Crear</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </h5>

                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <img className="group-image ml-3 mr-3" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "80px", height: "80px", borderRadius: "40px" }} alt="" />
                                            <div className="text">
                                                <h5 className="usuarioname-chat mt-3" style={{ marginTop: "11px", marginBottom: "3px" }} type="button">Grupo Robo Cop</h5>
                                            </div>
                                            <p className="dropdown abajo mt-3" type="button" data-toggle="dropdown" style={{float:"right"}}><Abajo /></p>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item">Eliminar grupo</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <img className="group-image ml-3 mr-3" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "80px", height: "80px", borderRadius: "40px" }} alt="" />
                                            <div className="text">
                                                <h5 className="usuarioname-chat mt-3" style={{ marginTop: "11px", marginBottom: "3px" }} type="button">Grupo Robo Cop</h5>
                                            </div>
                                            <p className="dropdown abajo mt-3" type="button" data-toggle="dropdown" style={{float:"right"}}><Abajo /></p>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item">Eliminar grupo</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <img className="group-image ml-3 mr-3" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "80px", height: "80px", borderRadius: "40px" }} alt="" />
                                            <div className="text">
                                                <h5 className="usuarioname-chat mt-3" style={{ marginTop: "11px", marginBottom: "3px" }} type="button">Grupo Robo Cop</h5>
                                            </div>
                                            <p className="dropdown abajo mt-3" type="button" data-toggle="dropdown" style={{float:"right"}}><Abajo /></p>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item">Eliminar grupo</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mt-3 mb-3">
                    <h5 className="card-header" style={{ background: "white" }}>Tus grupos</h5>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <img className="group-image ml-3 mr-3" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "80px", height: "80px", borderRadius: "40px" }} alt="" />
                                            <div className="text">
                                                <h5 className="usuarioname-chat mt-3" style={{ marginTop: "11px", marginBottom: "3px" }} type="button">Grupo Robo Cop</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <img className="group-image ml-3 mr-3" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "80px", height: "80px", borderRadius: "40px" }} alt="" />
                                            <div className="text">
                                                <h5 className="usuarioname-chat mt-3" style={{ marginTop: "11px", marginBottom: "3px" }} type="button">Grupo Robo Cop</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <img className="group-image ml-3 mr-3" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "80px", height: "80px", borderRadius: "40px" }} alt="" />
                                            <div className="text">
                                                <h5 className="usuarioname-chat mt-3" style={{ marginTop: "11px", marginBottom: "3px" }} type="button">Grupo Robo Cop</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <img className="group-image ml-3 mr-3" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "80px", height: "80px", borderRadius: "40px" }} alt="" />
                                            <div className="text">
                                                <h5 className="usuarioname-chat mt-3" style={{ marginTop: "11px", marginBottom: "3px" }} type="button">Grupo Robo Cop</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <img className="group-image ml-3 mr-3" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "80px", height: "80px", borderRadius: "40px" }} alt="" />
                                            <div className="text">
                                                <h5 className="usuarioname-chat mt-3" style={{ marginTop: "11px", marginBottom: "3px" }} type="button">Grupo Robo Cop</h5>
                                            </div>
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
