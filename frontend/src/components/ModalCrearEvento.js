import React, { Component } from 'react'

export default class ModalCrearEvento extends Component {

    loadimageportada(event) {
        const output = document.getElementById('output2');
        output.src = URL.createObjectURL(event.target.files[0]);
    };

    state = {

        dias: ["Día", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
        meses: ["Mes", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        años: ['Año', "2020", "2021", "2022", "2023", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035"],
        dia_seleccionado: '',
        mes_seleccionado: '',
        año_seleccionado: '',
        sexo_seleccionado: ''
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
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
                            <form>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput">Portada del evento</label>
                                    <div className="image-upload text-center" >
                                        <label htmlFor="file-input2" style={{ cursor: "pointer", marginTop: "10px" }} title="Clic para subir foto de portada">
                                            <img src="https://www.blugarden.eu/images/placeholders/placeholder.png" alt="" id="output2" width="100%" height="250" style={picturstyle} />
                                        </label>
                                        <input id="file-input2" type="file" style={{ display: 'none' }} onChange={this.loadimageportada.bind(this.event)} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2">Nombre del evento</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Agrega un nombre conciso y claro" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput3">Ubicación</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Agrega la ubicación del evento" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Categoría</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
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
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2">Organizadores</label>
                                    <input type="text" className="form-control" placeholder="Agrega un nombre conciso y claro" />
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
                                                    this.state.meses.map(meses => (
                                                        <option key={meses} value={meses}>
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
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary">Crear evento</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}