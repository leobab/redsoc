import React, { Component } from 'react'
import Send from '@material-ui/icons/Send'
import Abajo from '@material-ui/icons/ArrowDropDown'
import Face from '@material-ui/icons/TagFaces'
import File from '@material-ui/icons/InsertPhoto'
import { Link } from 'react-router-dom'
import '../css/mensajeria.css'

import socketIOClient from 'socket.io-client';

import config from '../metodos/config_session';
import axios from 'axios';

var socket;

export default class mensajeria extends Component {

    state = {
        server: "http://localhost:5000",
        search: "",
        mensaje: "",
        id_emisor: "",
        id_receptor: "",
        conectado: true
    }

    loadimage(event) {
        const output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
    };


    onInputChange = (e) => {

        this.setState({

            [e.target.name]: e.target.value

        })

    }

    async componentDidMount() {

        const id_receptor = window.location.pathname.split("/")[2];

        if (id_receptor != null) {


            this.setState({ id_receptor: id_receptor });

            const response = await axios.get('http://localhost:4000/api/ver_sesion', config);

            if (response.data.mensaje) {

                const data = response.data.datos;

                this.setState({ conectado: true, id_emisor: data.id_usuario});

            } else {

                this.setState({ conectado: false });

            }

            socket = socketIOClient(this.state.server);

            socket.on("mensaje", data => {

                if(data.id_receptor === this.state.id_emisor)
                {
                
                    var li = document.createElement('li');
                    li.innerHTML=data.mensaje;
                    li.className="him";

                    document.getElementsByClassName("chat")[0].append(li);

                    this.subir_scroll();

                }
                

            });



        }

    }

    componentWillUnmount () {
        
        socket.close();
        
	}

    onKeyDown = (e)=>{

        if(e.key === "Enter"){

            this.enviar_mensaje();
        }

    }

    enviar_mensaje = () => {

        socket.emit("mensaje", {

            id_emisor: this.state.id_emisor,
            id_receptor: this.state.id_receptor,
            mensaje: this.state.mensaje

        });

        var li = document.createElement('li');
        li.innerHTML=this.state.mensaje;
        li.className="me";

        document.getElementsByClassName("chat")[0].append(li);

        document.getElementsByName("mensaje")[0].value = "";

        document.getElementsByClassName("zona-chat")
        
        this.subir_scroll();
        
    }

    subir_scroll(){

        var div = document.getElementsByClassName("zona-chat")[0];
        div.scrollTop=div.scrollHeight

    }

    render() {

        const picturstyle = {
            'objectFit': 'cover',
            'objectPosition': 'center center'

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
                                <img className="profile-image mt-2 mr-2" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "50px", height: "50px", borderRadius: "40px" }} alt="" />
                                <div className="text">
                                    <h6 className="usuarioname" style={{ marginTop: "11px", marginBottom: "0px" }}>Robo Cop</h6>
                                    <p className="mensaje text-muted small">Hey, you're arrested!</p>
                                </div>
                                <span style={{ marginTop: "11px", marginBottom: "0px", marginLeft: "40px" }} className="time mensaje text-muted small small">13:21</span>
                                <p className="dropdown abajo mt-1" type="button" data-toggle="dropdown"><Abajo /></p>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="">Eliminar mensaje</Link>
                                </div>
                            </div>
                            <hr className="mt-1" />
                        </div>
                    </div>

                    <div className="col-9">
                        <div className="row" style={{ borderBottom: "1px solid rgb(211,211,211)" }}>
                            <img className="profile-image ml-4 mt-2 mr-2 mb-2" src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg" style={{ width: "50px", height: "50px", borderRadius: "40px", cursor: "pointer" }} alt="" />
                            <div className="text">
                                <h6 className="usuarioname-chat" style={{ marginTop: "11px", marginBottom: "3px", cursor: "pointer" }}>Robo Cop</h6>
                                <p className="mensaje text-muted-chat small" style={{ color: "grey" }}>Activo hace 8min</p>
                            </div>

                        </div>


                        <div className="zona-chat" style={{ overflowY: "scroll", height: "480px", borderBottom: "1px solid rgb(211,211,211)" }}>
                            <ul className="chat mt-4">
                                
                            </ul>
                        </div>

                        <div className="row">
                            <div className="col-10">
                                <input className="form-control mt-3 ml-2 mr-5" type="text" name="mensaje" autoComplete="off" onKeyDown={this.onKeyDown} onChange={this.onInputChange} value={this.state.mensaje} style={{ background: "#eee", borderRadius: "40px" }} placeholder="Escribe un mensaje" />
                            </div>
                            <p className="ml-2 mt-4 mr-2" onClick={() => this.enviar_mensaje()} type="button"><Send /></p>
                            <p className="mt-4 mr-2" type="button"><Face /></p>
                            <p className="mt-4 mr-2" type="button" data-toggle="modal" data-target="#exampleModalCenter"><File /></p>

                            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLongTitle">Subir archivos</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body" style={{ alignContent: "center" }}>
                                            <input type="file" onChange={this.loadimage.bind(this.event)} />
                                            <img src="" id="output" width="200" height="200" style={picturstyle} alt="" />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                            <button type="button" className="btn btn-primary" >Enviar</button>
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
