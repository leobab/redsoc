import React, { Component } from 'react'

export default class Historia extends Component {
    render() {
        return (
            <div className="carousel-item col-3 active m-0 p-1">
                <div className="card bg-dark text-white border-0 historia text-white">
                    <img className="card-img img-fluid center-block h-100" src="https://i.pinimg.com/originals/56/1d/e9/561de92b7dafa0b258653080c2a5d971.jpg" alt="" />
                    <div className="card-img-overlay p-2">
                        <img src={'https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg'} width="28" height="28" className="align-self-start rounded-circle mr-1 border" alt="" />
                        
                    <span className="card-text mt-5 bg-transparent align-text-bottom"><font size="1">Gabriela</font></span>
               
                    </div>
                     </div>
            </div>
        )
    }
}
