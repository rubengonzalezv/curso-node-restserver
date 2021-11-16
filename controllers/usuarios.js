const { response } = require('express'); 





const usuariosGet = (req, res = response) => {

  const {q,nombre,apikey,page=1} = req.query;


    res.json({
        msg:'get API -  controlador',
        q,nombre,apikey,page
    });
  };

  const usuariosPut = (req, res = response) => {
    const id = req.params.id;

    res.json({
        msg:'put API -  controlador',
        id 
    });
  }


  const usuariosPost = (req, res = response) => {
    const {nombre,edad} = req.body;


    res.json({
        msg:'post API -  controlador',
        nombre,edad
    });
  }



  const usuariosDelete = (req, res = response) => {
    res.status(403).json({
        msg:'delete API -  controlador'
    });
  }


  const usuariosPatch = (req, res = response) => {
    res.status(403).json({
        msg:'patch API -  controlador'
    });
  }



  module.exports = {

    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch


  };