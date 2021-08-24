import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MarketplaceProducto from './MarketplaceProducto'

export default class MarketplaceSidePanel extends Component {
    render() {
        return (
            <nav className="nav col flex-column nav-pills px-1 pr-3">
                <Link className="nav-link btn-lg text-lg-left my-2" to="/marketplace"><span><i className="fas fa-store fa-lg mr-3"></i>Marketplace</span></Link>
                <button className="btn btn-primary mt-3 ml-3" 
                 data-toggle="modal" data-target="#modalVenderAlgo">+ Vender algo</button>
                 <MarketplaceProducto/>
                <h6 className="ml-3 mt-4">Ubicación</h6>
                <div className="form-group ml-3">
                    <input type="text" className="form-control" placeholder="Ubicación" />
                </div>
                <h6 className="m-3">Categorías</h6>
                <Link className="nav-link" to="google.com"><i className="fas fa-building ml-1 mr-3"></i> Alquileres</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-tshirt mr-3"></i>Ropa y accesorios</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-home ml-1 mr-3"></i>Casa y jardín</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-car ml-1 mr-3"></i> Vehículos</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-mobile-alt ml-2 mr-3"></i> Electrónica</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-heart ml-1 mr-3"></i>Familia</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-guitar ml-1 mr-3"></i>Pasatiempos</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-binoculars ml-1 mr-3"></i>Clasificados</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-home ml-1 mr-3"></i>Viviendas en venta</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-gamepad ml-1 mr-3"></i>Entretenimiento</Link>

            </nav>

        )
    }
}
