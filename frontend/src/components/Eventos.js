import React, { Component } from 'react'
import EventosSidePanel from './EventosSidePanel'
import EventoItem from './EventoItem'

import config from '../metodos/config_session';
import axios from 'axios';
export default class Eventos extends Component {
    state = {
        datos: [],
        nombre_evento:'', 
        texto:''
    };
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
          this.onRouteChanged();
        }
    }
    onRouteChanged() {
        //alert("ROUTE CHANGED");
        this.publicarCategorias();
    }
    async publicarCategorias() {
        const categoria = window.location.pathname.split("/")[2];
        if (categoria == null) {
            const response = await axios.get('http://localhost:5000/api/obtenerEventos/');
            if (response.data.mensaje) {
                const evento = response.data.evento;
                /*alert(evento);*/
                this.setState({ datos: evento});
            }
        }else{
            const response = await axios.get('http://localhost:5000/api/obtenerEventosCategoria/' + categoria);
            if (response.data.mensaje) {
                const evento = response.data.evento;
                /*alert(evento);*/
                this.setState({ datos: evento});
            }
        }
    }
    async componentDidMount() {
        const categoria = window.location.pathname.split("/")[2];
        //alert("categoria: "+categoria);
        if (categoria == null) {
            const response = await axios.get('http://localhost:5000/api/obtenerEventos/');
            if (response.data.mensaje) {
                const evento = response.data.evento;
                /*alert(evento);*/
                this.setState({ datos: evento});
            }
        }else{
            const response = await axios.get('http://localhost:5000/api/obtenerEventosCategoria/' + categoria);
            if (response.data.mensaje) {
                const evento = response.data.evento;
                /*alert(evento);*/
                this.setState({ datos: evento});
            }
        }
    }

    render() {
        return (
            <div className="container pt-3 mt-5 mb-2">
                <main className="row m-0 p-0 w-100">
                    <div className="col-md-2 col-lg-3 col-sm-12 col-xs-12 " >
                        <section style={{ position: "relative" }}>
                            <EventosSidePanel />
                        </section>
                    </div>
                    <div className="col-lg-9 col-md-10 col-sm-12 col-xs-12">
                        <section className="row" style={{ position: "relative" }}>                                
                            {this.state.datos.map(datos => (
                                <div className="col-sm-6 col-md-4 col-lg-4 px-1" >  
                                    <EventoItem id={datos.id_evento} nombre_evento={datos.nombre_evento} lugar_evento={datos.lugar_evento} categoria={datos.categoria} descripcion={datos.descripcion} organizadores={datos.organizadores} fecha_hora_evento={datos.fecha_hora_evento}  />                                                                   
                                </div>
                            ))} 
                        </section>
                    </div>
                </main>
            </div>
        )
    }
}
