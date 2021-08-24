import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import config_session from '../metodos/config_session';
import axios from 'axios';


export default class main extends Component {


    state = {

        dias: ["Día", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
        meses: ["Mes", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        años: ['Año', "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991", "1990", "1989", "1988", "1987", "1986", "1985", "1984", "1983", "1982", "1981", "1980", "1979", "1978", "1977", "1976", "1975", "1974", "1973", "1972", "1971", "1970"],
        dia_seleccionado: '',
        mes_seleccionado: '',
        año_seleccionado: '',
        sexo_seleccionado: '',
        telefono: '',
        email: '',
        email_reg: '',
        clave_reg: '',
        clave: '',
        nombre: '',
        apellido: ''


    }

    onInputChange = (e) => {

        this.setState({

            [e.target.name]: e.target.value

        })

    }

    onInputChangeSexo = (e) => {

        this.setState({ sexo_seleccionado: e.target.value });

    }
    
    onSubmit = async (e) => {

        e.preventDefault();

        const response = await axios.post('http://localhost:5000/api/ingresar', {

            email_usuario: this.state.email,
            contrasena_usuario: this.state.clave

        }, config_session);

        if (response.data.mensaje) {

            window.location.href = "/principal";

        }

    }


    onSubmitRegistro = async (e) => {

        e.preventDefault();

        const response = await axios.post('http://localhost:5000/api/registrarse', {

            nombres_usuario:this.state.nombre, 
            apellidos_usuario:this.state.apellido, 
            fecha_nac_usuario:this.state.año_seleccionado + "-" + this.state.mes_seleccionado + "-" + this.state.dia_seleccionado, 
            email_usuario:this.state.email_reg, 
            contrasena_usuario:this.state.clave_reg, 
            telefono_usuario:this.state.telefono,
            id_genero:1


        }, config_session);

        console.log(response.data.mensaje);

        if (response.data.mensaje) {

            window.location.href = "/validarcuenta";

        }

    }


    render() {

        return (

            <div className="row mt-5">

                <div className="col-md-6 mt-3">

                    <div className="container ">

                        <h4 className="text-justify">Socialnet te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.</h4>
                        <img src={'/portada.png'} width="100%" className="" alt="" />

                    </div>

                </div>

                <div className="col-md-6 mt-3">

                    <div className="container">

                        <div className="card mb-2">

                            <div className="card-body">
                                <h5 className="card-title">Inicio de Sesión</h5>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="email" onChange={this.onInputChange} value={this.state.email} placeholder="Correo electrónico"></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" name="clave" onChange={this.onInputChange} value={this.state.clave} placeholder="Contraseña"></input>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary" type="submit">Ingresar</button>
                                        <Link className="btn btn-link" to="/">¿Ha olvidado su contraseña?</Link>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Crear una Cuenta</h5>
                                <form onSubmit={this.onSubmitRegistro}>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col">
                                                <input type="text" className="form-control" name="nombre" onChange={this.onInputChange} value={this.state.nombre} placeholder="Nombre" />
                                            </div>
                                            <div className="col">
                                                <input type="text" className="form-control" name="apellido" onChange={this.onInputChange} value={this.state.apellido} placeholder="Apellido" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control" onChange={this.onInputChange} value={this.state.email_reg} name="email_reg" placeholder="Correo electrónico"></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" onChange={this.onInputChange} value={this.state.clave_reg} name="clave_reg" placeholder="Contraseña nueva"></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="txt" name="telefono" placeholder="Teléfono" onChange={this.onInputChange} value={this.state.telefono} className="form-control" ></input>
                                    </div>
                                    <h6>Fecha de Nacimiento</h6>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <select className="form-control" onChange={this.onInputChange} name="dia_seleccionado" value={this.state.dia_seleccionado} required>
                                                    {
                                                        this.state.dias.map(dia => (
                                                            <option key={dia} value={dia}>
                                                                {dia}
                                                            </option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <select className="form-control" onChange={this.onInputChange} name="mes_seleccionado" value={this.state.mes_seleccionado} required>
                                                    {
                                                        this.state.meses.map((meses, index) => (
                                                            <option key={meses} value={index}>
                                                                {meses}
                                                            </option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <select className="form-control" onChange={this.onInputChange} name="año_seleccionado" value={this.state.año_seleccionado} required>
                                                    {
                                                        this.state.años.map(años => (
                                                            <option key={años} value={años}>
                                                                {años}
                                                            </option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <h6>Sexo</h6>
                                    <div className="row text-center">
                                        <div className="col">
                                            <div className="form-group">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" onChange={this.onInputChangeSexo} name="sexo_seleccionado" value="Mujer" required />
                                                    <label className="form-check-label" >Mujer</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" onChange={this.onInputChangeSexo} name="sexo_seleccionado" value="Hombre" required />
                                                    <label className="form-check-label" >Hombre</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" onChange={this.onInputChangeSexo} name="sexo_seleccionado" value="Otro" required />
                                                    <label className="form-check-label" >Otro</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group text-center mt-2">
                                        <button className="btn btn-success btn-block" type="submit">Registrarse</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )

    }
}
