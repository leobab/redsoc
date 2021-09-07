import React, { Component } from 'react'
import config_session from '../metodos/config_session';
import axios from 'axios';

export default class ModalCrearEvento extends Component {

    state = {
        dias: ["Día", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
        meses: ["Mes", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        años: ['Año', "2020", "2021", "2022", "2023", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035"],
        dia_seleccionado: '',
        mes_seleccionado: '',
        año_seleccionado: '',
        nombre_evento: '',
        logo: null,
        lugar_evento: '',
        categoria: '',
        descripcion: '',
        organizadores: ''
    }

    loadimageportada(e) {
        const output = document.getElementById('output2');
        output.src = URL.createObjectURL(e.target.files[0]);
        this.setState({ logo: URL.createObjectURL(e.target.files[0]) })
    };
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onNuevoevento =  async (e) => {
        //alert("enviando...."+this.state.logo + ' ' + this.state.nombre_evento + ' ' + this.state.lugar_evento + this.state.año_seleccionado + "-" + this.state.mes_seleccionado + "-" + this.state.dia_seleccionado  +'batman');
        e.preventDefault();
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
        }
    }

    render() {
        const picturstyle = {
            'objectFit': 'cover',
            'objectPosition': 'center center'
        }
        return (
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Crear evento</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body modal-body-evento">
                            <form onSubmit={this.onNuevoevento}> 
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput">Portada del evento</label>
                                    <div className="image-upload text-center" >
                                        <label htmlFor="file-input2" style={{ cursor: "pointer", marginTop: "10px" }} title="Clic para subir foto de portada">
                                            <img src="https://www.blugarden.eu/images/placeholders/placeholder.png" alt="" id="output2" width="100%" height="250" style={picturstyle} />
                                        </label>
                                        <input id="file-input2" type="file" name="logo" style={{ display: 'none' }} onChange={this.loadimageportada.bind(this)}  accept="image/*, image/heic, image/heif" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2">Nombre del evento</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Agrega un nombre conciso y claro" name="nombre_evento" onChange={this.onInputChange} value={this.state.nombre_evento}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput3">Ubicación</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Agrega la ubicación del evento" name="lugar_evento" onChange={this.onInputChange}  value={this.state.lugar_evento}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Categoría</label>
                                    <select className="form-control" id="exampleFormControlSelect1" name="categoria" onChange={this.onInputChange}  value={this.state.categoria}>
                                        <option>Fiesta</option>
                                        <option>Arte</option>
                                        <option>Música</option>
                                        <option>Comedia</option>
                                        <option>Deportes</option>
                                        <option>Causas</option>
                                        <option>Religión</option>
                                        <option>Literatura</option>
                                        <option>Juegos</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Descripción</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="descripcion" onChange={this.onInputChange}  value={this.state.descripcion}></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2">Organizadores</label>
                                    <input type="text" className="form-control" placeholder="Agrega un nombre conciso y claro" name="organizadores" onChange={this.onInputChange}  value={this.state.organizadores}/>
                                </div>
                                <label htmlFor="exampleFormControlSelect1">Fecha</label>
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
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    <button type="submit" className="btn btn-primary">Crear evento</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}