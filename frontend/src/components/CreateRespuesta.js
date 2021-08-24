import React, { Component } from 'react'

export default class createRespuesta extends Component {
    render() {
        return (
            <li className="list-group-item list-group-item my-2 p-0">
            <img src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="26" height="26" className="rounded-circle float-left mr-2 mt-2 border" alt="" />
            <div className="col m-0 p-0">
                <div className="input-group-prepend border rounded-pill bg-light">
                    <input type="text" className="form-control rounded-pill border-0 bg-light" placeholder="Escribe un comentario..." aria-label="Caja  para comentario" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary-flush rounded-circle pl-2 pr-2" type="button" data-toggle="tooltip" data-placement="top" title="Inserta un emoji"><i className="far fa-smile"></i></button>
                        <button className="btn btn-outline-secondary-flush rounded-circle pl-2 pr-2" type="button" data-toggle="tooltip" data-placement="top" title="Adjunta una foto o un video"><i className="far fa-file-image"></i></button>
                        <button className="btn btn-outline-secondary-flush rounded-circle pl-2 pr-2" type="button" data-toggle="tooltip" data-placement="top" title="Publica un GIF"><i className="far fa-clone"></i></button>
                        <button className="btn btn-outline-secondary-flush rounded-circle pl-2 pr-2" type="button" data-toggle="tooltip" data-placement="top" title="Publica un sticker"><i className="far fa-sticky-note"></i></button>
                    </div>
                </div>
            </div>
        </li>
        )
    }
}
