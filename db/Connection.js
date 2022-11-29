const mongoose = require('mongoose');

const getConnection = async () => {
    try{

        const url = 'mongodb://web:SrlMU7pGKXBKU422@ac-0rgzxap-shard-00-00.dwytcii.mongodb.net:27017,ac-0rgzxap-shard-00-01.dwytcii.mongodb.net:27017,ac-0rgzxap-shard-00-02.dwytcii.mongodb.net:27017/basededatos?ssl=true&replicaSet=atlas-3ckzym-shard-0&authSource=admin&retryWrites=true&w=majority'

        await mongoose.connect(url);

        console.log('conexion exitosa');

    }catch (error){
        console.log(error);
    }
}

module.exports = {
    getConnection,
}