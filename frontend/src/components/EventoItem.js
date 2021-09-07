import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ModalVerEvento from './ModalVerEvento'

export default class EventoItem extends Component {
    render() {         	     
        const {id} = this.props;
        const {nombre_evento} = this.props;
        const {lugar_evento} = this.props;
        const {categoria} = this.props; 
        const {descripcion} = this.props;
        const {organizadores} = this.props; 
        const {fecha_hora_evento} = this.props; 
        return (
            <div className ="card my-1">
                <img className ="card-img-top" src="https://m.eldiario.es/fotos/Fiesta-Time-Out_EDIIMA20171219_0147_19.jpg" alt="" />
                <div className ="card-body">
                    <h5 className ="card-title"> {nombre_evento} </h5>
                    <p className ="card-text">{descripcion}</p>                    
                    <button className="btn btn-primary" to="/ModalVerEvento" 
                        data-toggle="modal" data-target={"#"+"a"+id}>Ver Mas</button>
                    <ModalVerEvento id={id} nombre_evento={nombre_evento} lugar_evento={lugar_evento} categoria={categoria} descripcion={descripcion} organizadores={organizadores} fecha_hora_evento={fecha_hora_evento}/>
                </div>
            </div>
        )
    }
}
