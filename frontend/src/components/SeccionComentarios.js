import React, { Component } from 'react'
import CreateComment from './CreateComment'
import Comment from './Comment'


export default class SeccionComentarios extends Component {
    render() {
        return (
            <div className="card-body p-2 m-0">
                <ul className="list-group list-group-flush">
                    <Comment
                    userComentario="Darwin Pilaloa"
                    fechaComentario="10 min"
                    texto="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
                    />
                    <div className="p-2">
                        <CreateComment/>
                    </div>
                </ul>
            </div>
        )
    }
}
