import React, { Component } from 'react'
import axios from 'axios';
import config from '../metodos/config_session';

export default class validarcuenta extends Component {

    state = {

        id_usuario: '',
        email_usuario: '',
        conectado: false,
        cod_verificacion: ''

    }

    onInputChange = (e) => {

        this.setState({

            [e.target.name]: e.target.value

        })

    }

    async componentDidMount(){
        
        const response = await axios.get('http://localhost:5000/api/ver_sesion', config);

        if (response.data.mensaje) {

            const data = response.data.datos;

            this.setState({ conectado: true, id_usuario: data.id_usuario, email_usuario: data.email_usuario});

        } else {

            this.setState({ conectado: false });

        }

        this.enviar_cod();

    }


    onSubmit = async (e) => {
    
        e.preventDefault();

        const response = await axios.post('http://localhost:5000/api/validar_cuenta', {

            cod_verificacion: this.state.cod_verificacion

        }, config);

        if (response.data.mensaje) {
            
            window.location.href = "/completar_registro";

        }   
    
    }

    enviar_cod = async () => {
    
        const response = await axios.post('http://localhost:5000/api/enviar_codverificacion', {

            email_usuario: this.state.email_usuario

        }, config);

        if (response.data.mensaje) {
            
            console.log(response);
            //window.location.href = "/principal";

        }       
    
    }

    render() {

        const cardstyle = {
            width: '21.5em',
            margin: '0 auto'
        };
        return (
            <div className="container p-3">
                <div className="card w-75 mt-5" style={cardstyle}>
                    <div className="card-body text-center">
                        <h5 className="card-title">Validación de Cuenta</h5>
                            <p className="card-text">Confírmanos que te pertenece este correo electrónico.<br></br> Introduce el código del mensaje que hemos enviado a <strong>{this.state.email_usuario}</strong>.</p>
                        <form className="text-center" onSubmit={this.onSubmit}>
                            <div className="form-row text-center">
                                <div className="col-2">
                                </div>
                                <div className="col-5">
                                    <input type="text" name="cod_verificacion" onChange={this.onInputChange} value={this.state.cod_verificacion} class="form-control" placeholder="Código de verificación" />
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-primary" type="submit">Validar correo</button>
                                </div>
                            </div>
                        </form>
                        <div className="row">
                            <div className="col-2">
                            </div>
                            <div className="col-5">
                                <button className="btn btn-link" onClick={()=>this.enviar_cod()} >Volver a enviar código</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
