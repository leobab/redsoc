import React, { Component } from 'react'
import axios from 'axios';

export default class completaregistro extends Component {

    state = {

        alias: '',
        descripcion: '',
        lugar_origen_usuario: '',
        lugar_vive_usuario: '',
        estudio_usuario: '',
        trabajo_usuario: '',
        file1: null,
        file2: null,
        file3: null

    }

    loadimageprofile = (e) => {

        const output = document.getElementById('output');
        output.src = URL.createObjectURL(e.target.files[0]);

        this.setState({ file1: e.target.files[0] })

    };

    loadimageportada = (e) => {
        const output = document.getElementById('output2');
        output.src = URL.createObjectURL(e.target.files[0]);

        this.setState({ file2: e.target.files[0] })

    };

    onSubmit = async (e) => {

        e.preventDefault();

        let formData = new FormData();

        formData.append('images', this.state.file1);
        formData.append('images', this.state.file2);
        formData.append('images', this.state.file3);
        formData.append('alias', this.state.alias);
        formData.append('descripcion', this.state.descripcion);
        formData.append('lugar_origen_usuario', this.state.lugar_origen_usuario);
        formData.append('lugar_vive_usuario', this.state.lugar_vive_usuario);
        formData.append('estudio_usuario', this.state.estudio_usuario);
        formData.append('trabajo_usuario', this.state.trabajo_usuario);



        const response = await axios.post('http://localhost:5000/api/completar_registro', formData,
            {
                withCredentials: true, headers:
                {
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin': true
                }
            });


        if (response.data.mensaje) {

            window.location.href = "/principal";

        }

    }

    onInputChange = (e) => {

        this.setState({

            [e.target.name]: e.target.value

        })

    }

    

    render() {

        const cardstyle = {
            width: '21.5em',
            margin: '0 auto'

        };

        const picturstyle = {
            'objectFit': 'cover',
            'objectPosition': 'center center'

        }

        return (
            <div className="container p-3 mt-5">
                <div className="card mt-1 w-75" style={cardstyle}>
                    <div className="card-body">
                        <h5 className="card-title text-center">Completar registro de Correo</h5>
                        <form className="mt-4" onSubmit={this.onSubmit}>
                            <div className="form-row">
                                <div className="col-6">
                                    <input type="text" name="alias" onChange={this.onInputChange} value={this.state.alias} className="form-control" placeholder="Alias" />
                                </div>
                                <div className="col-6">
                                    <input type="text" name="descripcion" onChange={this.onInputChange} value={this.state.descripcion} className="form-control" placeholder="Descripción" />
                                </div>
                                <div className="col-6 mt-3">
                                    <input type="text" name="estudio_usuario" onChange={this.onInputChange} value={this.state.estudio_usuario} className="form-control" placeholder="Lugar donde estudia" />
                                </div>
                                <div className="col-6 mt-3">
                                    <input type="text" name="trabajo_usuario" onChange={this.onInputChange} value={this.state.trabajo_usuario} className="form-control" placeholder="Lugar donde trabaja" />
                                </div>
                                <div className="col-6 mt-3">
                                    <input type="text" name="lugar_vive_usuario" onChange={this.onInputChange} value={this.state.lugar_vive_usuario} className="form-control" placeholder="Ciudad o país donde vive" />
                                </div>
                                <div className="col-6 mt-3">
                                    <input type="text" name="lugar_origen_usuario" onChange={this.onInputChange} value={this.state.lugar_origen_usuario} className="form-control" placeholder="Ciudad o país donde nació" />
                                </div>
                            </div>
                            <h6 className="mt-4">Foto de perfil</h6>
                            <div className="form-row mt-4">
                                <div className="col text-center">
                                    <div className="image-upload" >
                                        <label htmlFor="file-input" style={{ cursor: "pointer" }} title="Clic para subir foto de perfil">
                                            <img src="https://www.tuexperto.com/wp-content/uploads/2015/07/perfil_01.jpg" alt="" id="output" width="200" height="200" style={picturstyle} className="rounded-circle" />
                                        </label>
                                        <input id="file-input" type="file" name="images" style={{ display: 'none' }} onChange={this.loadimageprofile} accept="image/*, image/heic, image/heif" />
                                    </div>
                                </div>
                            </div>
                            <h6 className="mt-4">Foto de portada</h6>
                            <div className="form-row mt-4">
                                <div className="col text-center">
                                    <div className="image-upload" >
                                        <label htmlFor="file-input2" style={{ cursor: "pointer" }} title="Clic para subir foto de portada">
                                            <img src="https://i.pinimg.com/236x/dd/32/e4/dd32e425983b716ec853e77f165cbfa0.jpg" alt="" id="output2" width="100%" height="250" style={picturstyle} />

                                        </label>
                                        <input id="file-input2" type="file" name="images" style={{ display: 'none' }} onChange={this.loadimageportada} accept="image/*, image/heic, image/heif" />
                                    </div>
                                </div>
                            </div>

                            <button className="btn btn-success" style={{ float: "right" }} type="submit">Finalizar Registro</button>


                        </form>
                    </div>

                </div>
            </div>

        )
    }
}

