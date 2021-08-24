import axios from 'axios'

import config from '../metodos/config_session';

const metodo = {}

metodo.estoy_conectado = async () => {

    const resp = await axios.get('http://localhost:4000/api/usuario/estoy_conectado', config)

    if (resp.data.mensaje) {

        return true

    }

    return false
}

metodo.salir = async () => {
    
    const resp = await axios.get('http://localhost:4000/api/usuario/salir', config);

    if (resp.data.mensaje) {

        return true

    }

    return false
}

export default metodo;