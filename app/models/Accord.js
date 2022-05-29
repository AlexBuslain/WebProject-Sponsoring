const Sequelize = require('sequelize');
const db = require('../config/database');

const Accord = db.define('accords',{

    accord_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sponsor: {
        type: Sequelize.STRING
    },
    athlete: {
        type: Sequelize.STRING
    },
    date_signature: {
        type: Sequelize.DATE
    },
    date_fin: {
        type: Sequelize.DATE
    },
    //link_id: {
    //    type: Sequelize.INTEGER,
    //    foreignKey: true,
    //}

})
module.exports = Accord;