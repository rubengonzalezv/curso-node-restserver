const express = require('express')
const cors = require('cors')

class Server{

constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';

    //middelwares
    this.middlewares();



    //rutas de mi aplicacion 
    this.routes();
}

middlewares(){

    this.app.use(express.static('public'));

    //parseo y lectura de body
    this.app.use(express.json());

    this.app.use(cors());
}




routes(){

    this.app.use(this.usuariosPath, require('../routes/user'));

}

listen(){

    this.app.listen(this.port , ()=>{
        console.log('servidor correindo en puerto '+this.port)
    } );
}


}


module.exports = Server;

