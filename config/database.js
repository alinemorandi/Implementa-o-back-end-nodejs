const Sequelize = require('sequelize');
let sequelize = new Sequelize('pds2', 'root', '123',{
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 20,
        min: 5,
        acquire: 30000,
        idle: 10000
    },
});
sequelize.sync();
module.exports=sequelize;