import React, { Component } from 'react'
import MarketplaceSidePanel from './MarketplaceSidePanel'
import MarketplaceItem from './MarketplaceItem'

export default class Marketplace extends Component {
    render() {
        return (
            <div className="container pt-3 mt-5 mb-2">
                <main className="row w-100 m-0 p-0">
                    <div className="col-md-2 col-lg-3 col-sm-12 col-xs-12" >
                        <section style={{ position: "relative"}}>
                            <MarketplaceSidePanel/>
                        </section>
                    </div>
                    <div className="col-lg-9 col-md-10 col-sm-12 col-xs-12">
                        <section className="row" style={{ position: "relative" }}>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <MarketplaceItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <MarketplaceItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <MarketplaceItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <MarketplaceItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <MarketplaceItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <MarketplaceItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <MarketplaceItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <MarketplaceItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <MarketplaceItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <MarketplaceItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <MarketplaceItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <MarketplaceItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <MarketplaceItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <MarketplaceItem/>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 px-1" >
                                <MarketplaceItem/>
                            </div>

                        </section>
                    </div>
                </main>
            </div>


        )
    }
}
