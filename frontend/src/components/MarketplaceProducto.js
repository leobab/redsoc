import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class MarketplaceProducto extends Component {

    loadimageportada(event) {
        const output = document.getElementById('output2');
        output.src = URL.createObjectURL(event.target.files[0]);
    };

    render() {
        const picturstyle = {
            'objectFit': 'cover',
            'objectPosition': 'center center'
        }
        return (
            <div className="modal fade" id="modalVenderAlgo" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="card-title p-2 pl-3">Vende en Marketplace</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body modal-body-evento">
                            <form>
                                <fieldset>
                                    <div className="form-group">
                                        <input type="text" className="form-control mt-3" placeholder="¿Qué vendes?" />
                                    </div>
                                    <div className="form-group">
                                        <input type="money" className="form-control" placeholder="Precio" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Ubicación" />
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option>Selecciona una categoría</option>
                                            <option>Alquileres</option>
                                            <option>Ropa y accesorios</option>
                                            <option>Casa y jardín</option>
                                            <option>Familia</option>
                                            <option>Vehículos</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" id="exampleTextarea" placeholder="Descripción" rows="3"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Foto del producto</label>
                                        <div className="image-upload text-center" >
                                            <label htmlFor="file-input2" style={{ cursor: "pointer" }} title="Clic para subir foto de portada">
                                                <img src="https://www.blugarden.eu/images/placeholders/placeholder.png" alt="" id="output2" width="100%" height="500" style={picturstyle} />
                                            </label>
                                            <input id="file-input2" type="file" style={{ display: 'none' }} onChange={this.loadimageportada.bind(this.event)} />
                                        </div>
                                    </div>
                                </fieldset>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <Link type="submit " className="btn btn-primary" to="/marketplace">Publicar producto</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}





