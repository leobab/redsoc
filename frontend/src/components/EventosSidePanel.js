import React, { Component } from 'react'
import ModalCrearEvento from './ModalCrearEvento'
import { Link } from 'react-router-dom'

export default class EventosSidePanel extends Component {
    render() {
        return (
            <nav className="nav col nav-pills flex-column ">
                <Link className="nav-link btn-lg text-lg-left my-2" to="/eventos"><span><i className="fas fa-calendar-alt fa-lg mr-3"></i>Eventos</span></Link>
                <button className="btn btn-primary mt-3 ml-3" to="/producto" 
               data-toggle="modal" data-target="#exampleModalCenter">+ Crear evento</button>
                <ModalCrearEvento/>
                <h6 className="m-3 mt-4">Categorías</h6>
                <Link className="nav-link" to="google.com"><i className="fas fa-cocktail mr-3"></i>Fiesta</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-palette ml-1 mr-3"></i>Arte</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-music ml-1 mr-3"></i> Música</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-theater-masks ml-1 mr-3"></i>Comedia</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-volleyball-ball ml-1 mr-3"></i>Deportes</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-ribbon ml-1 mr-3"></i>Causas</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-praying-hands ml-1 mr-3"></i>Religión</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-book ml-1 mr-3"></i>Literatura</Link>
                <Link className="nav-link" to="google.com"><i className="fas fa-gamepad ml-1 mr-3"></i>Juegos</Link>
            </nav>
        )
    }
}
