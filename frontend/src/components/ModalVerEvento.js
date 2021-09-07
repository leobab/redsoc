import React, { Component } from 'react'
import config_session from '../metodos/config_session';
import axios from 'axios';

export default class ModalVerEvento extends Component {    

    onNuevoevento =  async (e) => {
       /* e.preventDefault();
        const response = await axios.post('http://localhost:5000/api/insertar_eventos', {
            logo:this.state.logo ,    
            nombre_evento:this.state.nombre_evento,
            lugar_evento:this.state.lugar_evento, 
            categoria: this.state.categoria,
            descripcion: this.state.descripcion,
            organizadores: this.state.organizadores,
            fecha_hora_evento:this.state.año_seleccionado + "-" + this.state.mes_seleccionado + "-" + this.state.dia_seleccionado
        }, config_session);

        console.log(response.data.mensaje);

        if (response.data.mensaje) {
            window.location.href = "/eventos";
        }*/
    }

    render() {
        const {id} = this.props; 
        const {nombre_evento} = this.props;
        const {lugar_evento} = this.props;
        const {categoria} = this.props; 
        const {descripcion} = this.props;
        const {organizadores} = this.props; 
        const {fecha_hora_evento} = this.props;
        const picturstyle = {
            'objectFit': 'cover',
            'objectPosition': 'center center'
        }
        return (
            <div className="modal fade" id={"a"+id} tabIndex="-1" role="dialog" aria-labelledby={"a"+id+"Title"} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Detalles del evento</h5>
                        </div>
                        <div className="modal-body modal-body-evento">
                            <form onSubmit={this.onNuevoevento}> 
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput">Portada del evento</label>
                                    <div className="image-upload text-center" >
                                        <img src="https://m.eldiario.es/fotos/Fiesta-Time-Out_EDIIMA20171219_0147_19.jpg" alt="" id="output2" width="100%" height="250" style={picturstyle} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2">Nombre del evento</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder={nombre_evento} name="nombre_evento" disabled={true}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput3">Ubicación</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput3" placeholder={lugar_evento} name="lugar_evento" disabled={true}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Categoría</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput3" placeholder={categoria} name="Categoría"disabled={true}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Descripción</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={descripcion} name="descripcion" disabled={true}></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2">Organizadores</label>
                                    <input type="text" className="form-control" placeholder={organizadores} name="organizadores" disabled={true}/>
                                </div>
                                <label htmlFor="exampleFormControlSelect1">Fecha</label>
                                <input type="text" className="form-control" placeholder={fecha_hora_evento} name="Fecha" disabled={true} />

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar Ventana</button>
                                    <button type="submit" className="btn btn-primary">Asistire</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}