import React, { Component } from 'react'

export default class PublicacionGallery extends Component {
    render() {
        return (

            
            <div className="modal" id="ModalPublicationGallery">
                <div className="modal-dialog modal-lg modal-dialog-centered noticias pt-4">
                    <div className="modal-content bg-dark">
                        <div className="modal-body p-1 m-0 w-100">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={this.props.foto1} alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={this.props.foto2} alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={this.props.foto3} alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>







        )
    }
}
