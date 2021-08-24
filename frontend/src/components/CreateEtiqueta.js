import React, { Component } from 'react'

export default class CreateEtiqueta extends Component {
    render() {
        return (
            <div className="input-group py-2">
                <div className="input-group-prepend">
                    <span className="input-group-text">Con</span>
                </div>
                <input type="text" className="form-control" placeholder="¿Con quién estabas?"/>
            </div>
        )
    }
}
