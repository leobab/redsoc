import React, { Component } from 'react'

export default class CreateArchivo extends Component {
    render() {
        return (

            <div className="custom-file border-0">
                <input type="file" className="custom-file-input border-0" id="customFile"
                accept="video/*,  video/x-m4v, video/webm, video/x-ms-wmv, video/x-msvideo, video/3gpp, video/flv, video/x-flv, video/mp4, video/quicktime, video/mpeg, video/ogv, .ts, .mkv, image/*, image/heic, image/heif"/>
                <label className="custom-file-label border-0" htmlFor="customFile">Elige un archivo</label>
            </div>
        )
    }
}
