const usuarios = require("../controllers/usuarios");

const multer = require("../libs/multer");


module.exports = (app) =>{

    
    app.get("/api/prueba", usuarios.prueba);
    app.post("/api/ingresar", usuarios.ingresar);
    app.post("/api/registrarse", usuarios.registrarse);
    app.get("/api/salir", usuarios.salir);
    app.post("/api/validar_cuenta", usuarios.validar_cuenta);
    app.get("/api/ver_sesion", usuarios.ver_sesion);
    app.post("/api/enviar_codverificacion", usuarios.enviar_codverificacion);
    app.post("/api/completar_registro",multer.array("images",2),usuarios.completar_registro);
    app.get("/api/usuario/:id", usuarios.ver_perfil);
}