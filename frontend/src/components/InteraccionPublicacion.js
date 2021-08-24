import React, { Component } from 'react'
import EligeReacion from './EligeReacion'

export default class InteraccionPublicacion extends Component {
    render() {
        return (
            <ul className="list-group list-group-flush m-0 p-0">
                <li className="list-group-item">
                    <div className="row">
                        <a href="className=#v-pills-home" className="text-muted mr-5"><i className="fab fa-gratipay fa-lg mr-2 ml-2"></i>{this.props.sumaReacciones}</a>
                        <div className="col text-right">
                            <a href="className=#v-pills-home" className="text-muted mr-3">{this.props.comentarios}</a>
                            <a href="className=#v-pills-home" className="text-muted text-right">{this.props.compartidos}</a>
                        </div>
                    </div>
                </li>
                <li className="list-group-item px-1 py-1 w-100">
                <div className="btn-group w-100 m-0" role="group" aria-label="First group">
                        <button type="button" className="btn bg-transparent m-0 w-100" data-toggle="modal" data-target=".bd-example-modal-sm"><i className="far fa-thumbs-up mr-2"></i>Me gusta</button>
                        <EligeReacion />
                        <button type="button" className="btn bg-transparent m-0 w-100"><i className="far fa-comment-alt mr-2"></i>Comentar</button>
                        <button type="button" className="btn bg-transparent m-0 w-100"><i className="fas fa-share-alt mr-2"></i>Compartir</button>
                    </div>
                </li>
            </ul>
        )
    }
}
