const { response, request } = require('express')


const usuariosGet = (req = request, res = response) => {
    const {q, nombre, apikey} = req.query; 
    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPost = (req = request, res = response) => {
    const body = req.body;
    const {q, nombre, apikey} = req.query; 
    res.json({
        msg: 'Post API - Controlador',
        body,
        q,
        nombre,
        apikey
    });
}

const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'Put API - Controlador', 
        id
    });
}

const usuariosdelete = (req, res = response) => {
    res.json({
        msg: 'Delete API - Controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosdelete
}