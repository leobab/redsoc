const client = require("../connection");
const pool = require("../connection");
const shortuuid = require("short-uuid");
const path = require("path");
const fs = require('fs-extra');
const mail = require("../libs/mail");

const userctrl = {};

userctrl.prueba = (req, res) => {
    pool.query('select * from usuario', (err, result) => {
        if (!err) {
            res.status(200).json({ mensaje: true, datos: result.rows });
        } else {
            res.status(500).json({ mensaje: err });
        }
    });
    pool.end;
}


userctrl.registrarse = async (req, res) => {

    const user = req.body;

    const cod_usuario = "user-" + shortuuid().generate();

    //res.setHeader("Content-Type", "text/html");

    let insertQuery = `insert into usuario (nombres_usuario, apellidos_usuario, fecha_nac_usuario, email_usuario, contrasena_usuario, presentacion_usuario, telefono_usuario, nom_usuario, imagen_usuario, id_genero, cod_usuario, portada_usuario,estudio_usuario,trabajo_usuario,lugar_vive_usuario,lugar_origen_usuario) values ('${user.nombres_usuario}','${user.apellidos_usuario}','${user.fecha_nac_usuario}','${user.email_usuario}','${user.contrasena_usuario}','','${user.telefono_usuario}','','',${user.id_genero},'`+cod_usuario+`','','','','','' )`;
    

    pool.query(insertQuery, async (err, result) => {
        if (!err) {
            res.status(200).json({ mensaje: true });
            const directorio = path.resolve('src/public/usuarios/' + cod_usuario);
            const perfil = path.resolve('src/public/usuarios/' + cod_usuario + "/perfil");
            const portada = path.resolve('src/public/usuarios/' + cod_usuario + "/portada");
            const publicaciones = path.resolve('src/public/usuarios/' + cod_usuario + "/publicaciones");
            const mensajeria = path.resolve('src/public/usuarios/' + cod_usuario + "/mensajeria");
            const reconocimiento = path.resolve('src/public/usuarios/' + cod_usuario + "/reconocimiento");

            if (!fs.existsSync(directorio)) {
                await fs.mkdir(directorio);
                await fs.mkdir(perfil);
                await fs.mkdir(portada);
                await fs.mkdir(publicaciones);
                await fs.mkdir(mensajeria);
                await fs.mkdir(reconocimiento);
            }
            
            client.end;

        } else {
            res.status(500).json({ mensaje: err.message });
        }
    })
    req.session.cod_usuario = cod_usuario;


}


userctrl.ver_sesion = async (req, res) => {

    try {


        if (req.session.cod_usuario != null) {

            const cod_usuario = req.session.cod_usuario;

            console.log("id usuario actual: "+cod_usuario);

            const perfil = await pool.query("SELECT u.cod_usuario,email_usuario, nombres_usuario,apellidos_usuario, imagen_usuario, portada_usuario FROM usuario as u WHERE u.cod_usuario = $1", [cod_usuario]);

            console.log(perfil.rows[0]);
            res.status(200).json({ mensaje: true, datos: perfil.rows[0] });

        } else {

            res.status(200).json({ mensaje: false, error: "Usuario no logueado" });

        }

    } catch (e) {

        res.status(500).json({ mensaje: false, error: e });

    }

}

function codigo_verificacion(){

    const codigo = Math.abs(Math.round(Math.random() * (1000 - 9999) + 1000));

    if(codigo.toString().length <4){

        return codigo_verificacion();
    }

    return codigo;

}

userctrl.enviar_codverificacion = async (req, res) => {

    try {

        console.log("codigo del usuario al enviar cod: "+req.session.cod_usuario);

        if (req.session.cod_usuario != null) {

            const codigo = codigo_verificacion();

            console.log("este es el codigo de verificacion: "+codigo);

            const cod_usuario = req.session.cod_usuario;

            const { email_usuario } = req.body;

            console.log("este es el email que obtiene: "+email_usuario);

            await mail.sendMail({

                from: 'leobab96@gmail.com',
                to: email_usuario,
                subject: 'Validación de Cuenta Socialnet', 
                text: 'Este es tu código de verificación: '+codigo,
        
            },async(err,info)=>{
        
                if(err){
        
                    res.status(500).json({ mensaje: false, error: err });
        
                }else{
        
                    await pool.query("UPDATE usuario SET cod_verificacion = $1 WHERE cod_usuario = $2", [codigo, cod_usuario]);

                    res.status(200).json({ mensaje: true, datos: info.messageId });
        
                }
        
            });

        } else {

            res.status(200).json({ mensaje: false, error: "Usuario no logueado" });

        }

    } catch (e) {

        res.status(500).json({ mensaje: false, error: e });

    }

}

userctrl.validar_cuenta = async (req, res) => {

    
    try{

        if (req.session.cod_usuario != null) {

            const { cod_verificacion } = req.body;

            const cod_usuario = req.session.cod_usuario;

            const perfil = await pool.query("SELECT cod_verificacion FROM usuario WHERE cod_usuario = $1", [cod_usuario]);

            if(perfil.rows[0].cod_verificacion == cod_verificacion){

                await pool.query("UPDATE usuario SET cod_verificacion = $1 WHERE cod_usuario = $2", ['', cod_usuario]);

                res.status(200).json({ mensaje: true});

            }else{

                res.status(500).json({ mensaje: false, error: "codigo incorrecto" });

            }

        } else {

            res.status(200).json({ mensaje: false, error: "Usuario no logueado" });

        }

    } catch (e) {

        res.status(500).json({ mensaje: false, error: e });

    }
    
    
}

userctrl.ingresar = async (req, res) => {

    try {

        const { email_usuario, contrasena_usuario } = req.body;

        const cod_usuario = await pool.query('SELECT cod_usuario FROM usuario where email_usuario =$1 and contrasena_usuario = $2', [email_usuario, contrasena_usuario]);

        if (cod_usuario.rowCount > 0) {

            req.session.cod_usuario = cod_usuario.rows[0].cod_usuario;

            res.status(200).json({ mensaje: true });


        } else {

            res.status(200).json({ mensaje: false });

        }

    } catch (e) {

        res.status(500).json({ mensaje: false, error: e });

    }

}

userctrl.salir = (req, res) => {

    try {

        if (req.session.cod_usuario != null) {

            req.session.destroy();

            res.status(200).json({ mensaje: true });

        } else {

            res.status(200).json({ mensaje: false, error: "Usuario no logueado" });

        }

    } catch (e) {

        res.status(200).json({ mensaje: false, error: e });

    }


}


userctrl.completar_registro = async (req, res) => {
    try {
        if (req.session.cod_usuario != null) {
            const cod_usuario = req.session.cod_usuario;
            const link_perfil = (req.files[0].filename);
            const link_portada = (req.files[1].filename);
            //const link_reconocimiento = (req.files[2].filename);

            console.log("img perfil: "+link_perfil);
            console.log("img portada: "+link_portada);
            const { alias, descripcion, lugar_origen_usuario, lugar_vive_usuario, estudio_usuario, trabajo_usuario } = req.body;
            await pool.query("UPDATE usuario SET nom_usuario = $1,portada_usuario = $2,imagen_usuario = $3,presentacion_usuario = $4, lugar_origen_usuario=$5, lugar_vive_usuario=$6, estudio_usuario=$7, trabajo_usuario=$8 WHERE cod_usuario = $9", [alias, link_portada, link_perfil, descripcion, lugar_origen_usuario, lugar_vive_usuario, estudio_usuario, trabajo_usuario, cod_usuario])
            await fs.rename(req.files[0].path, path.resolve("src/public/usuarios/" + cod_usuario + "/perfil/" + link_perfil));
            await fs.rename(req.files[1].path, path.resolve("src/public/usuarios/" + cod_usuario + "/portada/" + link_portada));
            //await fs.rename(req.files[2].path, path.resolve("src/public/usuarios/" + cod_usuario + "/reconocimiento/" + link_reconocimiento));
            res.status(200).json({ mensaje: true })
        } else {
            res.status(500).json({ mensaje: false, error: "Usuario no logueado" });
        }
    } catch (e) {
        await fs.unlink(req.files[0].path);
        await fs.unlink(req.files[1].path);
        res.status(500).json({ mensaje: false, error: e });
    }
}

userctrl.ver_perfil = async (req, res) => {

    try {

        if (req.session.cod_usuario != null) {

            const cod_usuario = req.params["id"];

            console.log("codigo del usuario que recibe: "+cod_usuario);

            const perfil = await pool.query("SELECT u.cod_usuario,nombres_usuario, apellidos_usuario, telefono_usuario,email_usuario,fecha_nac_usuario, imagen_usuario, portada_usuario, presentacion_usuario, estudio_usuario, trabajo_usuario, lugar_vive_usuario, lugar_origen_usuario,g.nombre_genero FROM usuario as u, genero as g WHERE u.id_genero = g.id_genero and u.cod_usuario =$1", [cod_usuario]);

            res.status(200).json({ mensaje: true, datos: perfil.rows[0], id_sesion: req.session.cod_usuario });


        } else {

            res.status(200).json({ mensaje: false, error: "Usuario no logueado" });

        }

    } catch (e) {

        res.status(500).json({ mensaje: false, error: e });

    }


}
/*EVENTOS*/
userctrl.insertar_eventos =  async (req, res) => {
    const evento = req.body;
    let insertQuery = `INSERT INTO evento (fecha_hora_evento, lugar_evento, logo, nombre_evento, categoria, descripcion, organizadores) VALUES ('${evento.fecha_hora_evento}', '${evento.lugar_evento}', '${evento.logo}', '${evento.nombre_evento}', '${evento.categoria}', '${evento.descripcion}', '${evento.organizadores}')`;
    console.log(insertQuery);
    pool.query(insertQuery,  async (err, result) => {
        if (!err) {
            res.status(200).json({ mensaje: true });            
            client.end;
        } else {
            res.status(500).json({ mensaje: err.message });
            console.log(err.message);
        }
    });
    pool.end;
}

userctrl.obtenerEventos =  async (req, res) => {
    try {        
        const evento = await pool.query("SELECT * FROM evento");
        //console.log(evento.rows[0]);
        res.status(200).json({ mensaje: true, evento: evento.rows});
    } catch (e) {
        res.status(500).json({ mensaje: false, error: e });
        console.log(e);
    }
}

userctrl.obtenerEventosCategoria =  async (req, res) => {
    try {        
        const categoria = req.params["categoria"];
        console.log("categoria actual: "+categoria);
        const evento = await pool.query('SELECT * FROM evento WHERE categoria  =$1',[categoria]);
        //console.log(evento.rows[0]);
        res.status(200).json({ mensaje: true, evento: evento.rows});
    } catch (e) {
        res.status(500).json({ mensaje: false, error: e });
        console.log(e);
    }
}
module.exports = userctrl;