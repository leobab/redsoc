import React, { Component } from 'react'
import EventosSidePanel from './EventosSidePanel'
import EventoItem from './EventoItem'

export default class Eventos extends Component {
    render() {
        return (
            <div className="container pt-3 mt-5 mb-2">
                <main className="row m-0 p-0 w-100">
                    <div className="col-md-2 col-lg-3 col-sm-12 col-xs-12 " >
                        <section style={{ position: "relative" }}>
                            <EventosSidePanel />
                        </section>
                    </div>
                    <div className="col-lg-9 col-md-10 col-sm-12 col-xs-12">
                        <section className="row" style={{ position: "relative" }}>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <EventoItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <EventoItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <EventoItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <EventoItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <EventoItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <EventoItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <EventoItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <EventoItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <EventoItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <EventoItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <EventoItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <EventoItem/>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        )
    }
}
