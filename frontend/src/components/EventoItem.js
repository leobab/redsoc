import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EventoItem extends Component {
    render() {
        return (
            <div className ="card my-1">
                <img className ="card-img-top" src="https://m.eldiario.es/fotos/Fiesta-Time-Out_EDIIMA20171219_0147_19.jpg" alt="" />
                <div className ="card-body">
                    <h5 className ="card-title">Card title</h5>
                    <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="#" className ="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        )
    }
}
